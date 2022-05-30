import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {
  // courselist:course[];



   
  constructor() { }
  
  ngOnInit(): void {
  //  this.getcourses();  
  }
//   getcourses()
//   {
//     this.courselist=[ 
//       {id:1,name:'c',isselected:false},
//       {id:2,name:'c#',isselected:false},
//       {id:3,name:'SQL',isselected:false},
//       {id:4,name:'java',isselected:false},
//     ]
//   }
//   class course{
//     id:number;
//     name: string;
//     isselected: boolean;
//   }
}  