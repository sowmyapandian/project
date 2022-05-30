import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-paymentnext',
  templateUrl: './paymentnext.component.html',
  styleUrls: ['./paymentnext.component.css']
})
export class PaymentnextComponent implements OnInit {
  // payment!:FormGroup
  order!:string;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  upi(event:any){
   this.router.navigate(['upipayment'])
  }
  netBank(event:any){
    this.router.navigate(['netbank'])
  }
  cash(event:any){
    alert('success')
      }
  add(){
    this.order='Order confirmed'
  }

}
