import { Component } from '@angular/core';
import { TooltipComponent } from '@angular/material/tooltip';
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

  ngOnInit() {
    // document.getElementById('tooltip').show();

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
