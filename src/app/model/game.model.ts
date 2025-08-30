export interface Choice {
  option: string;
  nextQuestionId: string;
}

export interface Question {
  id: string;
  text: string;
  choices: Choice[];
}

export interface ScenarioData {
  scenario: string;
  questions: Question[];
}
export interface Scenario {
  title: string;
  description: string;
  imageUrl: string; // replacing the icon
  tags: string[];
  detailsLink: string;
  category: string;
}
