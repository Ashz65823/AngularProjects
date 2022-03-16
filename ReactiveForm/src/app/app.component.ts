import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private builder: FormBuilder) {
    //in group method{we have to specify all the fields there values as key value pair}
    //we also specify validation rules here
    //eg., Validators.required 
    this.userForm = this.builder.group({
      username: ['zensar', Validators.required],
      password:['123',Validators.required]
    })
  }
  title = 'ReActiveForm';
  userForm: FormGroup;//1st step
  //object creation


  login() {
    console.log(this.userForm.controls['username'].value)
    console.log(this.userForm.controls['password'].value)
  }
  getUserForm() {
    return this.userForm.controls;
  }
}
