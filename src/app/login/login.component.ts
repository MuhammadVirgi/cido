import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from '../user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor() {}
  // userid = '';
  // username = '';
  // password = ''; 
  // login_error = '';
  // users = [];

  // // using database
  // loginUser() {
  //   this.us.loginDB(this.username, this.password).subscribe((data) => {
  //     // console.log(data);
  //     this.users = data;
  //     this.username = this.users[0]['username'];
  //     console.log(this.users[0]['username']);
  //     console.log(this.users[0]['password']);
  //     this.storage.set('username', this.username);
  //     if(this.username != ''){
  //       this.navCtrl.navigateRoot('/register');
  //     }
  //   });
  // }
    ngOnInit() {
    
    
  //   console.log(this.username);
  }
}
