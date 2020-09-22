import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})
export class SelectFieldComponent implements OnInit {

  constructor() { }

  @Input() field;

  ngOnInit(): void {
  }

}
