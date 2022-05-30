import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
// import { DataService } from '../data.service';
import { DbService } from '../db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm!:FormGroup;
  record:any={
    name:'',
    mobileNumber:'',
    email:'',
    password:''
  }

  constructor(private fb: FormBuilder,private api:DbService) {
    this.registerForm=this.fb.group({
      name:[this.record.name],
      mobileNumber:[this.record.mobileNumber],
      email:[this.record.email],
      password:[this.record.password]
    })
   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]]
    })
  }
  get name(){
    return this.registerForm.get('name')
  }
  get mobileNumber(){
    return this.registerForm.get('mobileNumber')
  }
  get email(){
    return this.registerForm.get('email')
  }
  get password(){
    return this.registerForm.get('password')
  }
  // register(){
  //   this.data.add("sowmya_trainee",this.registerForm.value).subscribe(res=>{
  //     console.log(res);
  //     alert("data was posted👌");
  //   },rej=>{
  //     alert("data is not posted!!😢");
  //   });
  //   this.data.get("sowmya_trainee").subscribe(res=>{
  //     console.log(res);
  //     alert("the data is Retrived🤙");
  //   },rej=>{
  //     alert("data was not retrived!!😢")
  //   });
  // }
register(Formvalue:NgForm){
  console.log(Formvalue);

  this.api.signupdata(Formvalue).subscribe((data) => {
     console.log(data);
  })
}
}