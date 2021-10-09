import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngprj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "NGPrj";

  constructor() { }

  ngOnInit(): void {
  }

}
