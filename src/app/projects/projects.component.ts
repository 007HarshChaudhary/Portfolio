import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {name: 'Cat Dog Classifier', description: 'A CNN model to predict cat or dog in the image', technology: 'PyTorch', imagePath: 'assets/deep.jpeg'},
    {name: 'Library Management System', description: 'Library management software. Used JavaFX and MySQL', technology: 'Java, JavaFX, MySQL', imagePath: 'assets/library.jpg'},
    {name: 'Sorting Algorithm Visualizer', description: 'Visualize the working of sorting algorithms like Bubble sort, Insertion sort, Selection sort, Merge sort and Quick sort', technology: 'Java, JavaFX', imagePath: 'assets/sorting.png'},
    {name: 'Line Following Robot', description: 'A toy car that follows a path', technology: 'Arduino, Ultra-sonic sensors', imagePath: 'assets/lfr.jpg'},
    {name: 'Sudoku Solver', description: 'Takes an image of 9*9 sudoku as input and generates the solution. Used OpenCV to extract digits from the image and CNN to identify digits', technology: 'OpenCV, Deep learning', imagePath: 'assets/sudoku.jpg'},
    {name: 'Home Automation', description: 'Control lights without going close to the switch board. Lazy people\'s favorite!', technology: 'NodeMCU, Blynk', imagePath: 'assets/nodemcu.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
