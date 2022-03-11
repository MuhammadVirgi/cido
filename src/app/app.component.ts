import { Component, } from '@angular/core';

import { Storage } from '@ionic/storage';
import { UserService } from './user.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  judul = 'Ionic-Angular week 09';
  constructor(private storage: Storage, public us: UserService,public navCtrl: NavController) {}
  userid = '';
  username = '';
  password = ''; 
  login_error = '';
  users = [];
  isRegister = false;
  address: string = "";
  number: number = 0;

  // using database
  loginUser() {
    this.us.loginDB(this.username, this.password).subscribe((data) => {
      // console.log(data);
      this.users = data;
      this.username = this.users[0]['username'];
      console.log(this.users[0]['username']);
      console.log(this.users[0]['password']);
      this.storage.set('username', this.username);
      if(this.username != ''){
        this.navCtrl.navigateRoot('/register');
      }
    });
  }


  Register() {
    this.isRegister = true;
  }

  register() {
    this.us.regisDB(this.username,
      this.password,
      this.address, this.number).subscribe(
        (data) => {
          if (data['result'] == "OK") {
            alert("Welcome... Enjoy your communication with Omail :) \nPlease Re-Login");
            this.ngOnInit();
            this.isRegister = false;
          } else {
            alert(data['message']);
          }
        }
      );
  }
  async ngOnInit() {
    await this.storage.create();
    this.username = await this.storage.get('username')
    
    console.log(this.username);
  }
}
