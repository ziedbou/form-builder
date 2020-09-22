import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {

  constructor() { }


  form = {
    params: {},
    sections: [
      {
        name: 'Section 1',
        fields: [
         
          {
            label: "New field Select",
            type: 'select',  
            multiple: false,
            width:'col-md-6',
            options : [
              {key:'fr',value :'Français'},
              {key:'en',value :'Anglais'}
            ]
          },
          {
            label: "New field",
            type: 'text',  
            multiple: false,
            width:'col-md-6',
          },
          
          {
            label: "New radio field",
            type: 'radio',  
            multiple: false,
            width:'col-md-12',
            options : [
              {key:'H',value :'Homme'},
              {key:'F',value :'Femme'}
            ]
          },
          {
            label: "Countries",
            type: 'select',  
            multiple: true,
            width:'col-md-12',
            options : [
              {key:'fr',value :'France'},
              {key:'us',value :'USA'}
            ]
          },
          {
            label: "Fruits",
            type: 'checkbox',  
            multiple: false,
            width:'col-md-12',
            options : [
              {key:'Apple',value :'Apple'},
              {key:'Banana',value :'Banana'}
            ]
          },
        ]
      }
    ]
  }

  ngOnInit(): void {
  }

}
