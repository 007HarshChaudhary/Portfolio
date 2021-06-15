import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  socialLinks = [
    {ref: "https://github.com/007HarshChaudhary", src:"assets/github.png", alt:"Github"},
    {ref: "https://www.youtube.com/channel/UCd1rWoJN3v9rONdgVNQmwnQ", src:"assets/yt_icon.png", alt:"YouTube"},
    {ref: "https://www.linkedin.com/in/harshachaudhary007/", src:"assets/linkedin.png", alt:"LinkedIn"},
    {ref: "https://www.instagram.com/its._.me_harsh/", src:"assets/insta.png", alt:"Instagram"},
    {ref: "https://www.facebook.com/001harsh", src:"assets/fb_icon.png", alt:"Facebook"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
