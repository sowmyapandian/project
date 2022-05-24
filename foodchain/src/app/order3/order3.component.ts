import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order3',
  templateUrl: './order3.component.html',
  styleUrls: ['./order3.component.css']
})
export class Order3Component implements OnInit {
  check!: FormGroup;
  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  checkboxArray:any = [
    {
      id:1,
      type:"checkbox",
      name:"Tomato",
      price:40
    } ,
    {
      id:2,
      type:"checkbox",
      name:"Potato",
      price:80
    } ,
    {
      id:3,
      type:"checkbox",
      name:"Carrot",
      price:120
    },
     {
      id:4,
      type:"checkbox",
      name:"Beans",
      price:160
    }
  ];
  productArray:any=[];
  arrays:any=[];
  total:any=0;
  db:any;
  getProduct(){
    // this.productArray = this.data.productService();
    // this.arrays = this.data.productService();
    console.log(this.arrays);
  }
  tempArray:any = [];
  newArray:any = [];
  onChange(event:any){
    if(event.target.checked){
      // console.log(event.target.value);
        this.tempArray = this.arrays.filter((e:any)=> e.id == event.target.value) 
        this.productArray = [];
        this.newArray.push(this.tempArray);
        for(let i=0;i<this.newArray.length;i++){
          var firstArray = this.newArray[i];
          for(let i=0;i<firstArray.length;i++){
            var obj =firstArray[i];
              this.productArray.push(obj);
          }
        }
        console.log(this.productArray);

        this.db=function(){
          // this.data.add("sowmya_trainee",this.productArray).subscribe(res=>{
          //   console.log(res);
          //   alert("data was posted👌");
          // },rej=>{
          //   alert("data is not posted!!😢");
          // });
          // this.data.get("sowmya_trainee").subscribe(res=>{
          //   console.log(res);
          //   alert("the data is Retrived🤙");
          // },rej=>{
          //   alert("data was not retrived!!😢")
          // });
          // return'<button type="button" (click)="post()">post</button>'
        }
        for(let i=0;i<firstArray.length;i++){
          this.total = this.total + firstArray[i].price;
        }
        console.log(this.total);
     
    }
    else{
      this.tempArray = this.productArray.filter((e:any)=> e.id != event.target.value) ;
      console.log(this.tempArray);
      this.newArray = [];
      this.productArray = [];
      this.newArray.push(this.tempArray)
      for(let i=0;i<this.newArray.length;i++){
        var firstArray = this.newArray[i];
        for(let i=0;i<firstArray.length;i++){
          var obj =firstArray[i];
            this.productArray.push(obj);
        }
      }
      for(let i=0;i<firstArray.length;i++){
      this.total = this.total-firstArray[i].price;
        
      }
      console.log(this.total);
    }

  }
  submit(){
  alert("your order is placed");
    
  }
  post(){}

}
