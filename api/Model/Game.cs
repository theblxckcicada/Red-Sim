using System.Collections.Generic;
using System.Text.Json.Serialization;

public class Choice
{
  [JsonPropertyName("option")]
  public string Option { get; set; }

  [JsonPropertyName("nextQuestionId")]
  public string NextQuestionId { get; set; }
}

public class Question
{
  [JsonPropertyName("id")]
  public string Id { get; set; }

  [JsonPropertyName("text")]
  public string Text { get; set; }

  [JsonPropertyName("choices")]
  public List<Choice> Choices { get; set; } = new();
}

public class ScenarioData
{
  [JsonPropertyName("scenario")]
  public string Scenario { get; set; }

  [JsonPropertyName("questions")]
  public List<Question> Questions { get; set; } = new();
}
