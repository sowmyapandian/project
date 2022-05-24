import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  record:any={
    name:'',
    email:'',
    phonenumber:'',
    password:''
  }
  

  constructor(private fb:FormBuilder) {
    this.signupForm=this.fb.group({
      name:this.record.name,
      email:this.record.name,
      phonenumber: this.record.phonenumber,
      password:this.record.password
    })
   }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      name:['',Validators.required,Validators.pattern("[A-Za-z]")],
      email:['',Validators.required,Validators.pattern("[A-Za-z0-9]*@gmail.com")],
      phonenumber:['',Validators.required,Validators.pattern("[0-9]{10}")],
      password:['',Validators.required,Validators.pattern("[A-Za-z0-9@!_#]")],
    })
  }

}
