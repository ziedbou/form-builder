import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.scss']
})
export class TextInputFieldComponent implements OnInit {

  constructor() { }

  @Input() field ;

  ngOnInit(): void {
  }

}
