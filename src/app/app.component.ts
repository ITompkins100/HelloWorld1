import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Hello world! This is Dante</h1>
             <h1>This is Irena!</h1>
             <h1>Hello world! This is Edward!</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
