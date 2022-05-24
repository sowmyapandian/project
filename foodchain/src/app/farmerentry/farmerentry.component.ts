import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms'; 
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-farmerentry',
  templateUrl: './farmerentry.component.html',
  styleUrls: ['./farmerentry.component.css']
})
export class FarmerentryComponent implements OnInit {
    constructor(private data:DataService) { }
    orderform!:FormGroup;
  
  ngOnInit(): void {
  }
  parentSelector: boolean = false;
  store:any = [];
  sum:any=0;
  kg:any=1;
  name:any;
  obj:any;
  ans = true;
  kilogram!: number;
  select!: boolean;
  obj1 :any=[];
  obj2:any;
  food = [
    { id: 1, select: false, name: 'Carrot',price:45,kilo:'' },
    { id: 2, select: false, name: 'Cauliflower',price:25,kilo:''},
    { id: 3, select: false, name: 'Potato',price:30,kilo:'' },
    { id: 4, select: false, name: 'Onion' ,price:23,kilo:''},
    { id: 5, select: false, name: 'Tomato' ,price:35,kilo:''},
  ];
  onchangenumber($event:any){
    var kilogram = $event.target.value;

    for(var i=1;i<this.food.length;i++){
      this.food[i].kilo=kilogram;
    }
    for(var i=1;i<this.food.length;i++){
      console.log(this.food[i].kilo);
    } 
  }
  onChangeFood($event:any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    // const kilo=$event.target.changed;
    // const notchecked = $event.target.uncheck;
    this.food = this.food.map((d) => {
      if (d.id==id  ){
        d.select = isChecked; 
        d.select = true;
        console.log(d.name);   
        // var item=d.select    
        // console.log(this.kilogram.value)       
        this.sum=this.sum+d.price;
        console.log(this.sum);        
        this.parentSelector = false;
        return d;
       
      }
     
      // for(var i=1;i<=this.food.length;i++){
      // if(this.food[i].select== this.ans) {
      //   var obj1={
      //    value: this.food[i]
      //   }
      //   console.log("obj1",obj1);
      // }
      // console.log(this.food[i].select)
    // }
     
     

      if (id == -1) {
        d.select = this.parentSelector;
        return d;
      }

      return d;
     
     
    });
    
    this.obj={
      vegtables:this.food,
    }
    for(var i=1;i<=this.food.length;i++){
      if(this.food[i].select== this.ans) {
        this.obj1=[{
         id:this.food[i].id,name:this.food[i].name,price:this.food[i].price
        }]
      // console.log(this.food[i].select)

      }
      // console.log(this.obj1);


    }
       console.log(this.obj1);

    for(i=1;i<this.obj1.length;i++){
      this.obj2={
        value:this.obj1
      }
      console.log("inside loop:",this.obj2);
    }
    // console.log("obj2",obj2);
    console.log("outside loop:",this.obj2);

  }

  
  
  submit(){
    console.log("correct form:",this.obj2);
    this.data.add("food_chain",this.obj).subscribe(res=>{
        console.log(res);
        alert("data was posted");
      },rej=>{
        alert("data is not posted!!");
      });
      this.data.get("food_chain").subscribe(res=>{
        console.log(res);
        alert("the data is Retrived");
      },rej=>{
        alert("data was not retrived!!")
      });
  }
//   headers=["id","vegtables","Price"];
//     add($event:any,d:any) {
//       const id = $event.target.value;
//       const name=$event.target.value;
//       const price=$event.target.value;
//       const isChecked = $event.target.checked;
//        if(d.id==id){
//         d.select = isChecked;
//         console.log(this.store.push(this.food));
//        }
// } 
}

// function price(price: any) {
//   throw new Error('Function not implemented.');
// }

