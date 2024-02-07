// force-app\main\default\lwc\button\button.js:
import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {

    @api label;
    @api icon;
    handleButton(event) {
        const factor = this.label; // Since label is passed as @api property, it should hold the factor value
        this.dispatchEvent(new CustomEvent('multiply', { // Change 'buttonclick' to 'multiply' to match the event name
          detail: factor,
          bubbles: true // Uncomment this if you want the event to bubble up the DOM hierarchy
        }));
      }
}