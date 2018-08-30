import { Component, OnInit } from '@angular/core';
import { Transporter, SendMailOptions } from 'nodemailer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  handleClick = () => {
    console.log('clicked');
  }

  constructor() { }

  ngOnInit() {
  }

}
