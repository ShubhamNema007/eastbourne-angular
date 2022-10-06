import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experties',
  templateUrl: './experties.component.html',
  styleUrls: ['./experties.component.scss'],
})
export class ExpertiesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  public expertiescardsdata = [
    {
      cardbadges: 'DEBT',
      cardname: 'Akido',
      cardcity: '(USA)',
      cardcontent:
        'kido enables leading health institutions and innovators to use information to drive transformational change...',
      cardimg: '../../../assets/images/AKIDO.svg',
    },
    {
      cardbadges: 'PRIVATE EQUITY',
      cardname: 'Brick Eagle',
      cardcity: '(INDIA)',
      cardcontent:
        'kido enables leading health institutions and innovators to use information to drive transformational change...',
      cardimg: '../../../assets/images/brick_eagle.svg',
    },
    {
      cardbadges: 'CURRENT HOLDINGS',
      cardname: 'Step One Financial',
      cardcity: '(UK)',
      cardcontent:
        'kido enables leading health institutions and innovators to use information to drive transformational change...',
      cardimg: '../../../assets/images/i-med.svg',
    },
    {
      cardbadges: 'CURRENT HOLDINGS',
      cardname: 'I-med',
      cardcity: '(UK)',
      cardcontent:
        'kido enables leading health institutions and innovators to use information to drive transformational change...',
      cardimg: '../../../assets/images/stepone.svg',
    },
  ];
}
