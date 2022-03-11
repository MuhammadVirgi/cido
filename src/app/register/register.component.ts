import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  username = '';
  password = '';
  address = '';
  number = '';
  constructor() { }

  ngOnInit() {}

  registerUser(){
    console.log(this.username);
    console.log(this.password);
    console.log(this.address);
    console.log(this.number);
  }

}
