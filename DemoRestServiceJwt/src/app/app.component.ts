import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoProject';
  technology = 'Spring Training';
  Review = "Welcome"
  isOk = false;
  success = "cyan";
  mySuccessClass = "mySuccess";
  btn = "changeMe";
  success2 = "black";
  
  change(str: any) {//any type
    this.technology = "Angular training";
    console.log(this.technology);
    this.success = "red"
    console.log(str)
  }
  change2() {
    this.technology = "HTML training";
    this.success = "Black";
    console.log(this.technology);
    
  }
  change3() {
    this.btn = "afterChange";
  }
  

}
