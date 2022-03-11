import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {IonicStorageModule} from '@ionic/storage-angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import router jangan lup
// service dimasukan ke provider , gunanya service ?

const appRoutes: Routes = [
  {path:'login', component: LoginComponent}, 
  {path:'register', component: RegisterComponent}, 

]; // konstanta untuk menyimpan semua path yang ada didalam web ini
@NgModule({
  declarations: [AppComponent,LoginComponent,RegisterComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(),HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes)],//librari routes ditambah disini
  
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
