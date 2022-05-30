import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  //  alluser:any;
  constructor(private data:DataService) { }

  ngOnInit(): void {
  }
  fetch(){
    this.data.get("food_chain").subscribe(res=>{
      console.log(res);
      alert("the data is Retrived");
      
    },rej=>{
      alert("data was not retrived!!")
    });
  }

  }
  
