import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {name: 'Cat Dog Classifier', description: 'A CNN model to predict cat or dog in the image', technology: 'PyTorch', imagePath: 'assets/deep.png'},
    {name: 'Library Management System', description: 'Library management software. Used JavaFX and MySQL', technology: 'Java, JavaFX, MySQL', imagePath: 'assets/library.jpg'},
    {name: 'Sorting Visualizer', description: 'Visualize the working of sorting algorithms', technology: 'Java, JavaFX', imagePath: 'assets/sorting.png'},
    {name: 'Line Following Robot', description: 'A toy car that follows a line', technology: 'Arduino, Ultra-sonic sensors', imagePath: 'assets/lineFollower.jpg'},
    {name: 'Sudoku Solver', description: 'Takes an image of 9*9 sudoku as input and generates the solution', technology: 'OpenCV, Deep learning', imagePath: 'assets/sudoku.jpg'},
    {name: 'Home Automation', description: 'Control lights without going close to the switch board!', technology: 'NodeMCU, Blynk', imagePath: 'assets/nodemcu.jpg'},
    {name: 'Light Follower Bot', description: 'A robot that follows light', technology: 'NodeMCU, Blynk', imagePath: 'assets/light follower.png'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
