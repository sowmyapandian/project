import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { format } from 'path';
import { DataService } from '../data.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payment!:FormGroup;
record:any={
  name:'',
  doorno:'',
  streetname:'',
  state:'',
  county:'',
};
  constructor(private fb:FormBuilder,private router:Router,private data:DataService) { 
    this.payment=this.fb.group({
      name:[this.record.name],
      doorno:[this.record.doorno],
      streetname:[this.record.streetname],
      state:[this.record.state],
      country:[this.record.country],

    })
  }

  ngOnInit(): void {
    this.payment=this.fb.group({
      name:['',[Validators.required]],
      doorno:['',[Validators.required]],
      streetname:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]],
    })
  }
  get name(){
    return this.payment.get('name')!;
  }
  get doorno(){
    return this.payment.get('doorno')!;
  }
  get streetname(){
    return this.payment.get('streetname')!;
  }
  get state(){
    return this.payment.get('state')!;
  }
  get country(){
    return this.payment.get('country')!;
  }
next(){
  this.data.add("food_chain",this.payment.value).subscribe(res=>{
    console.log(this.payment.value);
    console.log(res);
    alert("data was posted");
    this.router.navigate(['paymentnext'])
  },rej=>{
    alert("data is not posted!!");
  });
  // this.data.get("food_chain").subscribe(res=>{
  //   console.log(res);
  //   alert("the data is Retrived");
  // },rej=>{
  //   alert("data was not retrived!!")
  // });
console.log("success");

}
}
