import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    

    registrationForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      })
    });
  }

  ngOnInit() {
  }
  
  saveDetails(value) {
    console.dir(value);
  }

}
