import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {


  isOpen = false;

  constructor(private userIdle: UserIdleService) {
  }

  ngOnInit() {
  }

  showVote() {
    this.isOpen = true;

    // Angular User Idle package for detecting no user action
    this.userIdle.startWatching();
    this.userIdle.onTimerStart().subscribe(() => this.isOpen = false);
    this.userIdle.onTimeout().subscribe(() => this.userIdle.stopTimer());

  }

}
