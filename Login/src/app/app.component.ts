import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//logical name associated with this element this is used to refer -->used as tag in index.html
  templateUrl: './app.component.html',//self independent block-->html 
  styleUrls: ['./app.component.css']//css
})
export class AppComponent {
  title = 'Hello Zensar';
}
