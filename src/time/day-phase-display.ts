import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('day-phase-display')
export class DayPhaseDisplay extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 300px; /* Adjust the size of the canvas as needed */
      height: 150px; /* Adjust the size of the canvas as needed */
      border: 1px solid black;
      border-radius: 50%;
      overflow: hidden;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;

  firstUpdated() {
    const canvas = this.shadowRoot?.querySelector('canvas');
    const ctx = canvas?.getContext('2d');
    if (canvas && ctx) {

      // Calculate the center of the canvas
      const centerX = canvas.width / 2;
      const centerY = canvas.height;
  
      // Define properties for the sun
      let sunAngle = 0;
      const sunRadius = 20;
      const sunOrbitRadius = 60;
  
      // Define properties for the moon
      let moonAngle = Math.PI;
      const moonRadius = 15;
      const moonOrbitRadius = 60;
  
      const drawSunAndMoon = () => {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Calculate the positions of the sun and moon
        const sunX = centerX + sunOrbitRadius * Math.cos(sunAngle);
        const sunY = centerY - sunOrbitRadius * Math.sin(sunAngle);
  
        const moonX = centerX + moonOrbitRadius * Math.cos(moonAngle);
        const moonY = centerY - moonOrbitRadius * Math.sin(moonAngle);
  
        // Draw the sun
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
        ctx.fill();
  
        // Draw the moon
        ctx.fillStyle = 'gray';
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
        ctx.fill();
  
        // Update angles for the next frame
        sunAngle += 0.01;
        moonAngle += 0.01;
  
        // Request next animation frame
        requestAnimationFrame(drawSunAndMoon);
      };
  
      // Start animation loop
      drawSunAndMoon();
    }
  }

  render() {
    return html`<canvas></canvas>`;
  }
}