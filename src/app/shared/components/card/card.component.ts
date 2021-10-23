import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngprj-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() classes!: string | object | string[];

  constructor() { }

  ngOnInit(): void {
  }

}
