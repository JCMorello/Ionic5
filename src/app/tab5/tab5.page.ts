import { Component, OnInit } from '@angular/core';
import  { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  // Validators
  registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$'),
        Validators.minLength(5)
      ]
    ],
    phone: [
      '',
      [
        Validators.required,
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')
      ]
    ],
    address: this.formBuilder.group({
      street: ['', [Validators.required, Validators.maxLength(100)]],
      city: ['', [Validators.required, Validators.maxLength(100)]],
      state: ['', [Validators.required, Validators.maxLength(100)]],
      zip: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]
      ]
    })
  });

  // Error Messages
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Name cant be longer than 100 characters' },
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
      { type: 'minlength', message: 'email cant be shorter than 5 characters' },
    ],
    phone: [
      { type: 'required', message: 'Phone is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
    ],
    street: [
      { type: 'required', message: 'Street is required' },
      { type: 'maxlength', message: 'Street cant be longer than 100 characters' },
    ],
    city: [
      { type: 'required', message: 'City is required' },
      { type: 'maxlength', message: 'City cant be longer than 100 characters' },
    ],
    state: [
      { type: 'required', message: 'State is required' },
      { type: 'maxlength', message: 'State cant be longer than 100 characters' },
    ],
    zip: [
      { type: 'required', message: 'Zip is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
    ]
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get street() {
    return this.registrationForm.get('address.street');
  }

  get city() {
    return this.registrationForm.get('address.city');
  }

  get state() {
    return this.registrationForm.get('address.state');
  }

  get zip() {
    return this.registrationForm.get('address.zip');
  }

  public submit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
  }

}
