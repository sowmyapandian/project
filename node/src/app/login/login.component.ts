import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  record:any={
    email:'',
    password:''
  }
  

  constructor(private fb:FormBuilder) 
  {
    this.loginForm=this.fb.group({
      email:[this.record.email],
      password:[this.record.password]
    })
      
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required,Validators.pattern('[a-zA-Z0-9]*@gmail.com')],
      password:['',Validators.required,Validators.pattern('[a-zA-Z0-9@!_#]{3, }')]
    })
  }

  click(value:any){
    console.log(value);
  }

}
