import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
// import { DataService } from '../data.service';
import { DbService } from '../db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; 
  record:any={
    username:'',
    password:'',
  };
  constructor(private fb:FormBuilder,private data:DbService, private router: Router,) {
    this.loginForm=this.fb.group({
      username:[this.record.username],
      password:[this.record.password]
    })
   }
   
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9@!_]{6,}")]]
    })
      }
      login(FormValue:any) {
        console.log(FormValue.username);
        this.data.getdata(FormValue.username).subscribe((info: any) => {
          console.log(info);
          const adminData=info.docs[0];
        
          if (
            adminData.id == FormValue.username &&
            adminData.password == FormValue.password
          ) {
            this.router.navigate(['farmerentry']);
            alert('Verified');
          } else {
            alert('err');
          }
        });
        console.log(FormValue);
      }
      get username() {
        return this.loginForm.get('username')!;
      }
      get password() {
        return this.loginForm.get('password')!;
      }
    }

// login(){
//   this.data.add("sowmya_trainee",this.loginForm.value).subscribe(res=>{
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
// }


