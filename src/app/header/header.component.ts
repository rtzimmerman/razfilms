import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuItemsArray: any[] = [
       {"title":"Home","link":"home"},
       {"title":"Films","link":"films"},
       {"title":"About","link":"about"},
       {"title":"Contact","link":"contact"},
    ];
      public onMenuClose(){
        console.log("menu closed");
      }
      public onMenuOpen(){
        console.log("menu Opened");
      }
      public onItemSelect(item:any){
        window.location.assign(item.link);
        console.log(item);
      }
      
  wow() {
    console.log('wow');
  };
  constructor() { }

  ngOnInit() {
  }

}
