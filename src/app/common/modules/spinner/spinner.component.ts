import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  standalone: false,
  selector: 'app-spinner',
  template: `<ng-container *ngIf="this.loading"
    ><div class=" h-screen w-screen z-30 absolute flex justify-center">
      <div class="demo-container mt-52 flex justify-center ">
        <div *ngIf="showSpinner" class="spinner-container">
          <div class="hexagon-spinner">
            <div class="hexagon-inner"></div>
            <div class="binary-flow">
              <div
                *ngFor="let digit of binaryDigits"
                class="binary-digit"
                [style.left.%]="Math.random() * 100"
                [style.animationDelay]="Math.random() * 3 + 's'"
              >
                {{ digit }}
              </div>
            </div>
            <div class="scan-line"></div>
          </div>
          <p class="spinner-text">{{ spinnerText }}</p>
        </div>

        <div *ngIf="showContent" class="content">
          <div class="cyber-border rounded-lg p-0.5 mb-6">
            <div class="bg-slate-900 rounded-lg p-6">
              <p class="text-green-400 hacker-text font-medium">
                <span class="text-green-500">$</span> Data retrieval complete
              </p>
              <p class="text-white hacker-text mt-2">
                System secure. All data encrypted and verified.
              </p>
            </div>
          </div>
          <h2 class="text-2xl text-green-400 hacker-text mb-4">
            Security Dashboard Loaded
          </h2>
          <p class="text-gray-300 max-w-md mx-auto">
            Your secure data has been successfully fetched and decrypted.
            Security protocols are active and all systems are operational.
          </p>
        </div>
      </div>
    </div>
  </ng-container>`,
  styles: [
    `
      .hacker-text {
        font-family: 'Fira Code', monospace;
      }

      .cyber-grid {
        background-size: 50px 50px;
        background-image: linear-gradient(
            to right,
            rgba(16, 185, 129, 0.05) 1px,
            transparent 1px
          ),
          linear-gradient(
            to bottom,
            rgba(16, 185, 129, 0.05) 1px,
            transparent 1px
          );
      }

      /* Hexagon spinner */
      .hexagon-spinner {
        position: relative;
        width: 80px;
        height: 80px;
        animation: rotate-spinner 2s linear infinite;
      }

      .hexagon-spinner:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        background: linear-gradient(
          45deg,
          transparent,
          transparent 40%,
          #10b981
        );
        animation: pulse-hexagon 1.5s linear infinite;
      }

      .hexagon-spinner:after {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        right: 4px;
        bottom: 4px;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        background: #0f172a;
      }

      .hexagon-inner {
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        background: linear-gradient(
          45deg,
          transparent,
          transparent 40%,
          #10b981
        );
        opacity: 0.6;
        animation: pulse-hexagon-inner 1.5s linear infinite;
        z-index: 10;
      }

      /* Binary code animation */
      .binary-flow {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 5;
      }

      .binary-digit {
        position: absolute;
        color: #10b981;
        font-size: 10px;
        font-family: 'Fira Code', monospace;
        opacity: 0;
        animation: binary-flow 3s linear infinite;
      }

      /* Scanning line */
      .scan-line {
        position: absolute;
        height: 2px;
        width: 100%;
        background: linear-gradient(90deg, transparent, #10b981, transparent);
        top: 0;
        animation: scan 2s ease-in-out infinite;
        z-index: 15;
      }

      /* Keyframes */
      @keyframes rotate-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes pulse-hexagon {
        0% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.8;
        }
        100% {
          opacity: 0.2;
        }
      }

      @keyframes pulse-hexagon-inner {
        0% {
          opacity: 0.1;
        }
        50% {
          opacity: 0.4;
        }
        100% {
          opacity: 0.1;
        }
      }

      @keyframes binary-flow {
        0% {
          transform: translateY(-20px);
          opacity: 0;
        }
        5% {
          opacity: 0.7;
        }
        95% {
          opacity: 0.7;
        }
        100% {
          transform: translateY(100px);
          opacity: 0;
        }
      }

      @keyframes scan {
        0% {
          top: 0;
        }
        100% {
          top: 100%;
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade-out {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .spinner-container {
        position: relative;
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .spinner-text {
        margin-top: 30px;
        text-align: center;
        color: #10b981;
        font-family: 'Fira Code', monospace;
        animation: pulse-text 2s infinite;
      }

      @keyframes pulse-text {
        0% {
          opacity: 0.5;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0.5;
        }
      }

      .demo-container {
        text-align: center;
        padding: 2rem;
      }

      .btn {
        background: rgba(16, 185, 129, 0.2);
        border: 1px solid #10b981;
        color: #10b981;
        padding: 0.75rem 1.5rem;
        margin: 1rem;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn:hover {
        background: rgba(16, 185, 129, 0.3);
        box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
      }

      .content {
        display: none;
        animation: fade-in 0.5s ease;
        margin-top: 2rem;
        text-align: center;
      }

      .fade-out {
        animation: fade-out 0.5s ease forwards;
      }
    `,
  ],
})
export class AppSpinnerComponent {
  @Input() loading: boolean | null = false;

spinnerText: string = 'Fetching secure data...';
showSpinner: boolean = this.loading ?? true;
showContent: boolean = !!this.loading;
binaryDigits: string[] = [];
Math: any;

private spinnerInterval: any;

constructor() {}

ngOnInit(): void {
  this.startLoopingSpinner();
}

ngOnDestroy(): void {
  // Clean up interval when component is destroyed
  if (this.spinnerInterval) {
    clearInterval(this.spinnerInterval);
  }
}

generateBinaryDigits() {
  this.binaryDigits = [];
  for (let i = 0; i < 40; i++) {
    this.binaryDigits.push(Math.random() > 0.5 ? '1' : '0');
  }
}

startLoopingSpinner() {
  this.showSpinner = true;
  this.showContent = false;
  this.generateBinaryDigits();
  this.spinnerText = 'Fetching secure data...';

  const stages = [
    { delay: 2000, text: 'Establishing secure connection...' },
    { delay: 2000, text: 'Decrypting data packets...' },
    { delay: 2000, text: 'Verifying checksums...' }
  ];

  const totalDuration = 8000; // total loop duration in ms

  this.spinnerInterval = setInterval(() => {
    this.generateBinaryDigits();
    this.spinnerText = 'Fetching secure data...';
    this.showSpinner = true;
    this.showContent = false;

    stages.forEach(stage => {
      setTimeout(() => {
        this.spinnerText = stage.text;
      }, stage.delay);
    });
  }, totalDuration);
}

}
