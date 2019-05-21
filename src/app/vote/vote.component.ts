import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  selectedRank: string = '';
  ranks: any = [
    'Bardzo dobrze',
    'Dobrze',
    'Średnio',
    'Źle',
    'Tragicznie'
  ];
  currentTime: number = null;
  questions: any;
  currentQuestion: any = null;
  showVote = false;
  showSuccess = false;
  counter: number = 11;


  constructor(public db: AngularFirestore) {
  }




  ngOnInit() {
    // Pull questions from firestore
    this.db.collection('questions').valueChanges().subscribe(res => this.questions = res);

    // Current Date, and count egzakly current time with secounds (timeout for 1)
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1);


  }

  // Assign selected question to currentQuestion and show Modal Vote
  selectQuestion(question) {
    this.currentQuestion = question;
    this.showVote = this.showVote === false ? true : false;
  }

  // Close btn on Modal Vote
  closeQuestion() {
    this.showVote = this.showVote === true ? false : true;
  }

  // Click on star input => send vote to firestore
  sendRank(event: any) {
    this.selectedRank = event.target.value;
    this.db.collection('ranks').add({ rank: this.selectedRank, time: this.currentTime, question: this.currentQuestion + 1 });

    // Hide Modal Vote and show Modal Success
    setTimeout(() => {
      this.showSuccess = this.showSuccess === false ? true : false;
      this.showVote = this.showVote === true ? false : true;
    }, 1000)

    // Modal Success - countdown
    let countdown = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        this.showSuccess = this.showSuccess === true ? false : true;
        clearInterval(countdown);
      }
    }, 1000)
    this.counter = 11;
  }
}
