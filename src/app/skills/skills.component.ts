import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList = [
    { name: 'Angular', path: "assets/AngularJs.png" },
    { name: 'Java', path: "assets/Java_icon.png"},
    { name: 'Python', path: "assets/python.png"},
    { name: 'Spring boot', path: "assets/Spring.png"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
