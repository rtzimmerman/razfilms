import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private menuItemsArray: any[] = [
       {"title":"Home","link":"home"},
       {"title":"Films","link":"films"},
       {"title":"About","link":"about"},
       {"title":"Contact","link":"contact"},
    ];
    
  wow() {
    console.log('wow');
  };
  constructor() { }

  ngOnInit() {
  }

}
