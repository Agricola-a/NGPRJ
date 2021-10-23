import { Component, Input, OnInit } from '@angular/core';

interface Header {
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

  private _myHeader: Header = {title: '', label: '', link: '', type: 'btn-link'}

  @Input() set header(value: Partial<Header>) {
    this._myHeader = { ...this._myHeader, ...value }
  }

  get myHeader(): Partial<Header> {
    return this._myHeader;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
