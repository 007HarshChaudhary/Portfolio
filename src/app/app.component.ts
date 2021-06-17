import { Component, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'portfolio';
  @ViewChild('tooltipMenu', {static: true}) menu: MatTooltip;
  @ViewChild('tooltipHome', {static: true}) home: MatTooltip;
  @ViewChild('tooltipResume', {static: true}) resume: MatTooltip;

  ngOnInit() {
    this.menu.show();
    this.home.show();
    this.resume.show();
    setTimeout(()=>{ this.menu.hide(); this.home.hide(); this.resume.hide(); }, 3000);
  }

  constructor (private router: Router) {
    this.router.navigate(["/home"]);
  }

  navigateToComponent(drawer, path) {
    drawer.toggle();    
    this.router.navigate(["/"+path]);
  }

  downloadPDF() {
    FileSaver.saveAs("assets/Harsha_Chaudhary.pdf", "HarshaChaudharyResume");
  }
}
