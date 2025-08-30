using System.Net;
using System.Text.Json;
using System.Xml.Linq;
using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Polly;
using Polly.Retry;

namespace api
{
  public class GameFileApiTrigger
  {
    private const string ContainerName = "red-sim-cache";
    private const string BlobName = "red-sim-data.json";

    [Function("GameFileApiTrigger")]
    public static async Task<HttpResponseData> Run(
      [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "scenario")] HttpRequestData req,
      FunctionContext context
    )
    {
      var logger = context.GetLogger("GameFileApiTrigger");

      try
      {
        // Check query param
        // Get storage connection string
        var connectionString = Environment.GetEnvironmentVariable("DataConnectionString");
        if (string.IsNullOrEmpty(connectionString))
        {
          throw new Exception("Connection to database not configured");
        }

        // Get or create blob container
        var blobServiceClient = new BlobServiceClient(connectionString);
        var containerClient = blobServiceClient.GetBlobContainerClient(ContainerName);
        await containerClient.CreateIfNotExistsAsync();

        var blobClient = containerClient.GetBlobClient(BlobName);

        // Check cache if not forced refresh
        if (await blobClient.ExistsAsync())
        {
          var properties = await blobClient.GetPropertiesAsync();

          // Return cached content
          var download = await blobClient.DownloadContentAsync();
          var cachedContent = download.Value.Content.ToString();

          // parse the scenarios
          var scenarios = JsonSerializer.Deserialize<List<ScenarioData>>(cachedContent);

          // fetch random scenario
          var scenario = ScenarioHelper.GetRandomScenario(scenarios);

          var cachedResponse = req.CreateResponse(HttpStatusCode.OK);
          await cachedResponse.WriteAsJsonAsync(scenario);

          logger.LogInformation("Served from cache");
          return cachedResponse;
        }
      }
      catch (Exception ex)
      {
        logger.LogError($"Error in the api");
        var errorResp = req.CreateResponse(HttpStatusCode.InternalServerError);
        await errorResp.WriteStringAsync($"Error in the api");
        return errorResp;
      }
      return req.CreateResponse();
    }
  }
}
