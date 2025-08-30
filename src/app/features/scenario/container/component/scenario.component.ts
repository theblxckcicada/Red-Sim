import { Component, Input } from '@angular/core';
import { Question, ScenarioData } from 'src/app/model';

@Component({
  standalone: false,
  selector: 'app-scenario',
  template: `
    <div class="container">
      <header>
        <p class="subtitle">Ovawatch Corp Penetration Testing Exercise</p>
      </header>

      <div class="scenario">
        <h2>MISSION BRIEFING</h2>
        <p>{{ scenarioData?.scenario }}</p>
      </div>

      <!-- Terminal Output -->
      <div class="terminal">
        <div class="terminal-content">
          <div *ngFor="let line of terminalOutput" class="response">
            {{ line }}
          </div>
        </div>
      </div>

      <!-- Current Question -->
      <div id="currentQuestion" *ngIf="currentQuestion">
        <div class="choices">
          <div
            class="choice"
            *ngFor="let choice of currentQuestion.choices"
            (click)="selectChoice(choice.nextQuestionId)"
          >
            <div class="choice-text">{{ choice.option }}</div>
            <div class="next-step">>> proceed to next phase</div>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="controls">
        <button class="btn" (click)="restartSimulation()">↻ Restart</button>
      </div>

      <!-- Status Bar -->
      <!-- <div class="status-bar">
        <div class="status-item">
          <span class="status-label">DETECTION RISK</span>
          <span class="status-value">{{ detectionRisk }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">ACCESS LEVEL</span>
          <span class="status-value">{{ accessLevel }}</span>
        </div>
        <div class="status-item">
          <span class="status-label">INTEL POINTS</span>
          <span class="status-value">{{ intelPoints }}</span>
        </div>
      </div> -->
    </div>
  `,
  styles: [
    `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Courier New', monospace;
      }

      body {
        background-color: #0a0a0a;
        color: #00ff00;
        line-height: 1.6;
        overflow-x: hidden;
        position: relative;
        padding: 20px;
      }

      .matrix-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        opacity: 0.1;
        pointer-events: none;
      }

      .container {
        max-width: 900px;
        margin: 0 auto;
      }

      header {
        text-align: center;
        padding: 20px 0;
        border-bottom: 1px solid #00ff00;
        margin-bottom: 30px;
        position: relative;
      }

      h1 {
        font-size: 2.5rem;
        text-shadow: 0 0 10px #00ff00;
        margin-bottom: 10px;
      }

      .subtitle {
        color: #00cc00;
        font-size: 1.2rem;
      }

      .scenario {
        background-color: #001100;
        border: 1px solid #00aa00;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 30px;
        box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
      }

      .scenario h2 {
        color: #00ff00;
        margin-bottom: 15px;
        border-bottom: 1px dashed #00aa00;
        padding-bottom: 10px;
      }

      .terminal {
        background-color: #001100;
        border: 1px solid #00aa00;
        border-radius: 5px;
        padding: 20px;
        margin-bottom: 20px;
        min-height: 200px;
        max-height: 400px;
        overflow-y: auto;
        box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
      }

      .terminal-content {
        white-space: pre-wrap;
      }

      .prompt {
        color: #00ff00;
      }

      .command {
        color: #ffffff;
      }

      .response {
        color: #00cc00;
        margin-bottom: 15px;
      }

      .choices {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 15px;
        margin-top: 20px;
      }

      .choice {
        background-color: #002200;
        border: 1px solid #00aa00;
        border-radius: 5px;
        padding: 15px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .choice:hover {
        background-color: #003300;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        transform: translateY(-2px);
      }

      .choice-text {
        margin-bottom: 5px;
      }

      .next-step {
        font-size: 0.9rem;
        color: #00cc00;
        font-style: italic;
      }

      .status-bar {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        padding: 10px;
        background-color: #001100;
        border: 1px solid #00aa00;
        border-radius: 5px;
      }

      .status-item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .status-label {
        font-size: 0.8rem;
        color: #00cc00;
      }

      .status-value {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .controls {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
      }

      .btn {
        background-color: #002200;
        color: #00ff00;
        border: 1px solid #00aa00;
        border-radius: 5px;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn:hover {
        background-color: #003300;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
      }

      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      .blink {
        animation: blink 1s infinite;
      }

      @keyframes glitch {
        0% {
          transform: translate(0);
        }
        20% {
          transform: translate(-2px, 2px);
        }
        40% {
          transform: translate(-2px, -2px);
        }
        60% {
          transform: translate(2px, 2px);
        }
        80% {
          transform: translate(2px, -2px);
        }
        100% {
          transform: translate(0);
        }
      }

      .glitch {
        animation: glitch 0.5s infinite;
      }

      @media (max-width: 768px) {
        .choices {
          grid-template-columns: 1fr;
        }

        h1 {
          font-size: 2rem;
        }

        .controls {
          flex-direction: column;
          gap: 10px;
        }

        .btn {
          width: 100%;
        }
      }
    `,
  ],
})
export class ScenarioComponent {
  @Input() scenarioData: ScenarioData | undefined | null;

  // game state
  currentQuestionId = 'Q1';
  history: string[] = [];
  detectionRisk = 'LOW';
  accessLevel = 'NONE';
  intelPoints = 0;

  // terminal log
  terminalOutput: string[] = [];

  ngOnInit(): void {
    this.initMatrixEffect();
    this.loadQuestion(this.currentQuestionId);
    this.updateStatus();
  }
  validateScenarioData(scenarioData: ScenarioData | null | undefined) {
    var isValid = scenarioData && Object.keys(scenarioData).length > 0;
    return isValid;
  }

  get currentQuestion(): Question | undefined {
    return this.scenarioData?.questions.find(
      (q) => q.id === this.currentQuestionId
    );
  }

  loadQuestion(questionId: string): void {
    const question = this.scenarioData?.questions.find(
      (q) => q.id === questionId
    );
    if (!question) return;

    if (questionId !== this.currentQuestionId) {
      this.history.push(this.currentQuestionId);
    }
    this.currentQuestionId = questionId;
    this.terminalOutput = [];
    this.addToTerminal(`root@redteam:~# engage`);
    this.addToTerminal(question.text);
  }

  selectChoice(nextQuestionId: string): void {
    if (!nextQuestionId) return;

    // if outcome logic is needed
    if (nextQuestionId.startsWith('O')) {
      const outcome = this.scenarioData?.questions.find(
        (q) => q.id === nextQuestionId
      );
      if (outcome) {
        this.addToTerminal(outcome.text);
        if (outcome.text.includes('Domain Admin'))
          this.accessLevel = 'DOMAIN ADMIN';
        if (
          outcome.text.includes('Fail') ||
          outcome.text.includes('detected')
        ) {
          this.detectionRisk = 'HIGH';
        }
      }
      this.updateStatus();
    }

    setTimeout(() => this.loadQuestion(nextQuestionId), 1000);
  }

  goBack(): void {
    if (this.history.length > 0) {
      const prevQuestionId = this.history.pop()!;
      this.loadQuestion(prevQuestionId);
      this.addToTerminal('root@redteam:~# back');
      this.addToTerminal('Returning to previous step...');
    }
  }

  restartSimulation(): void {
    this.currentQuestionId = 'Q1';
    this.history = [];
    this.detectionRisk = 'LOW';
    this.accessLevel = 'NONE';
    this.intelPoints = 0;
    this.terminalOutput = [
      'root@redteam:~# connect ovawatch-corp',
      'Initializing penetration test against ovawatch CORP infrastructure...',
      'Establishing secure connection to command and control server...',
      '[+] Connection established. Ready to begin.',
    ];
    this.loadQuestion(this.currentQuestionId);
    this.updateStatus();
    this.addToTerminal('root@redteam:~# restart');
    this.addToTerminal('Simulation restarted. All progress reset.');
  }

  addToTerminal(text: string): void {
    this.terminalOutput.push(text);
  }

  updateStatus(): void {
    // triggers Angular change detection automatically
  }

  // Matrix background effect
  initMatrixEffect(): void {
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-bg';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@%&!?*';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 10, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
}
