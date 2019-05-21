import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { UserIdleModule } from 'angular-user-idle';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VoteComponent } from './vote/vote.component';

const config = {
  apiKey: "AIzaSyCNK2jnePR_hmOOfNnQKzfZZvsr3b_TDzI",
  authDomain: "test-ab3c8.firebaseapp.com",
  databaseURL: "https://test-ab3c8.firebaseio.com",
  projectId: "test-ab3c8",
  storageBucket: "test-ab3c8.appspot.com",
  messagingSenderId: "138095144702"
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule, FormsModule, AngularFireModule.initializeApp(config), AngularFirestoreModule, UserIdleModule.forRoot({ idle: 15, timeout: 1, ping: 1 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
