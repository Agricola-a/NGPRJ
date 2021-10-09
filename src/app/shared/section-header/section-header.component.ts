import { Component, Input, OnInit } from '@angular/core';

interface Button {
  title: string;
  label: string;
  link: string;
  type: 'btn-link' | 'btn-primary';
}

@Component({
  selector: 'ngprj-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  private _myHeader: Button = {title: '', label: '', link: '', type: 'btn-link'}

  @Input() set header(value: Partial<Button>) {
    this._myHeader = { ...this._myHeader, ...value }
  }

  get myHeader(): Partial<Button> {
    return this._myHeader;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
