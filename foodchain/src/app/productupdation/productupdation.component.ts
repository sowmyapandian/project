import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-productupdation',
  templateUrl: './productupdation.component.html',
  styleUrls: ['./productupdation.component.css']
})
export class ProductupdationComponent implements OnInit {
  productupdation!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
