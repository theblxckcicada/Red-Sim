using System;
using System.Collections.Generic;

public static class ScenarioHelper
{
  private static readonly Random _random = new Random();

  public static ScenarioData GetRandomScenario(List<ScenarioData> scenarios)
  {
    if (scenarios == null || scenarios.Count == 0)
      throw new InvalidOperationException("No scenarios available to select from.");

    int index = _random.Next(scenarios.Count);
    return scenarios[index];
  }
}
