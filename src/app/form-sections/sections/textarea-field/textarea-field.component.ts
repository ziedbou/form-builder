import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss']
})
export class TextareaFieldComponent implements OnInit {

  constructor() { }

  @Input() field;

  ngOnInit(): void {
  }

}
