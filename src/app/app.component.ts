import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-ThinhTran';

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fullname : ['', [Validators.required, Validators.minLength(10)]],
      emailaddress : ['', [Validators.required, Validators.email]],
      pass : ['', Validators.required],
      confirmpass : ['', Validators.required],
      address: this.fb.group({
        housenumber : ['', Validators.required],
        street : ['', Validators.required],
        city: ['', Validators.required]
      }),
      skills: this.fb.array([])
    })
    this.myForm.valueChanges.subscribe(console.log);
  }

  get address() {
    return this.myForm.get('address') as FormGroup;
  }


  get skillFroms() {
    return this.myForm.get('skills') as FormArray;
  }

  addskills() {
    const skill = this.fb.group({
      des:[]
    })

    this.skillFroms.push(skill);
  }

}
