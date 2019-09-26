import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  checkForGreen = false;
  checkForYellow = false;
  checkForWhite = false;

  onClickForGreen(){
    this.checkForGreen=true;
  }

  onClickForYellow(){
    this.checkForYellow=true;
  }

  onClickForWhite(){
    this.checkForWhite=true;
  }

}
