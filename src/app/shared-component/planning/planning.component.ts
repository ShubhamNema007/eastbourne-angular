import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public cardsdata =[ 
    {
      info:{
        imgplanning:"../../../assets/images/card-planning-one.svg",
         planningtitle:'Our Planning Lorem',
      planningpara:'EastBourne is a private investment firm focused on Private Equity and Special Situations.',}
    },
    {
      info:{
        imgplanning:"../../../assets/images/card-planning-two.svg",
        planningtitle:'Our Planning Ipsum',
      planningpara:'EastBourne is a private investment firm focused on Private Equity and Special Situations.',}
    },
    {
      info:{
        imgplanning:"../../../assets/images/card-planning-three.svg",
        planningtitle:'Our Planning Dolor',
      planningpara:'EastBourne is a private investment firm focused on Private Equity and Special Situations.',}
    }
  ]
}

