import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expertiescards',
  templateUrl: './expertiescards.component.html',
  styleUrls: ['./expertiescards.component.scss']
})
export class ExpertiescardsComponent implements OnInit {

  constructor() { }
@Input() expertiescards:any;
  ngOnInit(): void {
  }
  
}
