import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tax-angular';
  currentTime: string | undefined;

  ngOnInit(): void {
    this.updateTime();
  }

  constructor() {}

  updateTime() {
    const thailandTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
    this.currentTime = thailandTime;
  }

}
