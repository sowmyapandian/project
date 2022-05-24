// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-orger2',
//   templateUrl: './orger2.component.html',
//   styleUrls: ['./orger2.component.css']
// })
// export class Orger2Component implements OnInit {
//   order!: FormGroup;
//   store:any = [];
//   sum:any=0;
//   food = [
//     { id: 1, select: false, name: 'Carrot',price:45 },
//     { id: 2, select: false, name: 'Cauliflower',price:25},
//     { id: 3, select: false, name: 'Potato',price:30 },
//     { id: 4, select: false, name: 'Onion' ,price:23},
//     { id: 5, select: false, name: 'Tomato' ,price:35},
//   ];
//   constructor() { 
    
//   }
//   onChangeFood($event:any) {
//     const id = $event.target.value;
//     const isChecked = $event.target.checked;
//     // const notchecked = $event.target.uncheck;
//     this.food = this.food.map((d) => {
//       if (d.id==id ){
//         d.select = isChecked; 
//         console.log(d.name);
//         this.sum=this.sum+d.price;
//         console.log(this.sum);
       
//         this.parentSelector = false;
//         return d;
//       }
//       if (id == -1) {
//         d.select = this.parentSelector;
//         return d;
//       }

//       return d;
//     });
    
//   }
//   submit(){
//     console.log(this.order.value);
//     this.data.add("sowmya_trainee",this.food).subscribe(res=>{
//         console.log(res);
//         alert("data was posted👌");
//       },rej=>{
//         alert("data is not posted!!😢");
//       });
//       this.data.get("sowmya_trainee").subscribe(res=>{
//         console.log(res);
//         alert("the data is Retrived🤙");
//       },rej=>{
//         alert("data was not retrived!!😢")
//       });
//   }
 