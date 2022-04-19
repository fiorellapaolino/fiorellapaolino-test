import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;
  form!: FormGroup;
  users: Contact[] = [];

  constructor(private user: FormBuilder) { }

  register: Contact = {
    name: '',
    lastname: '',
    age: 0,
    phone: 0,
    email: '',
    description: '',
  }

  ngOnInit(): void {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.user.group({
      name: new FormControl('', [
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(16),
        Validators.max(55),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(9),
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])

    });
  }

  save() {
    let data = localStorage.setItem('usuario', JSON.stringify(this.form.value));
    console.log(data);
  }

  onSubmit() {
    this.submitted = true;

    this.users.push(this.form.value);

    console.log(this.form.value);
    console.log(this.form);

    this.form.setValue({ name: "", lastname: "", age: "", phone: "", email: "", description: "" });
    this.form.markAsPristine();
    this.form.reset(this.form);
  }
}
