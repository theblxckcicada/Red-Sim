import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  standalone: false,
  selector: 'app-home',
  template: `
    <div class="matrix-bg" id="matrixBg"></div>
    <div class="container">
      <section class="hero">
        <h2>
          Experience the Thrill of
          <span class="glitch">Cyber Penetration Testing</span>
        </h2>
        <p>
          Step into the shoes of an elite red teamer and attempt to breach
          Ovawatch Corp's network. Make strategic decisions, exploit
          vulnerabilities, and exfiltrate sensitive data—all in a realistic
          simulation environment.
        </p>
        <a routerLink="/scenario" class="cta-button">BEGIN MISSION</a>
      </section>

      <section id="features" class="features">
        <div class="feature">
          <h3>Realistic Scenarios</h3>
          <p>
            Based on actual penetration testing methodologies and techniques
            used by cybersecurity professionals.
          </p>
        </div>
        <div class="feature">
          <h3>Multiple Pathways</h3>
          <p>
            Choose your approach: social engineering, vulnerability
            exploitation, or credential attacks.
          </p>
        </div>
        <div class="feature">
          <h3>Learn Cybersecurity</h3>
          <p>
            Understand attack vectors and defense mechanisms through hands-on
            experience.
          </p>
        </div>
      </section>

  

      <section id="start" class="hero">
        <h2>Ready to <span class="glitch">Hack</span>?</h2>
        <p>
          Join the ranks of cybersecurity professionals who understand offensive
          security by experiencing it firsthand. This simulation is designed for
          educational purposes to help security professionals better understand
          attack methodologies.
        </p>
        <a routerLink="/scenario" class="cta-button">LAUNCH SIMULATION</a>
      </section>

      <footer>
        <p>Red Team Simulation - Ovawatch Corp Penetration Testing Exercise</p>
        <p>
          This is a simulation for educational purposes only. Always practice
          ethical hacking with proper authorization.
        </p>
      </footer>
    </div>
  `,
  styles: [``],
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {});
  }
}
