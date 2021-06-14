import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  socialLinks = [
    {ref: "https://github.com/007HarshChaudhary", src:"assets/github.png", alt:"github"},
    {ref: "https://www.youtube.com/channel/UCd1rWoJN3v9rONdgVNQmwnQ", src:"assets/yt_icon.png", alt:"youtube"},
    {ref: "https://www.linkedin.com/in/harshachaudhary007/", src:"assets/linkedin.png", alt:"linkedIn"},
    {ref: "https://www.instagram.com/its._.me_harsh/", src:"assets/insta.png", alt:"instagram"},
    {ref: "https://www.facebook.com/001harsh", src:"assets/fb_icon.png", alt:"facebook"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
