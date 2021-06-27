import { Component, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'portfolio';
  menuButtons: any;
  @ViewChild('tooltipMenu', {static: true}) menu: MatTooltip;
  @ViewChild('tooltipHome', {static: true}) home: MatTooltip;
  @ViewChild('tooltipResume', {static: true}) resume: MatTooltip;

  ngOnInit() {
    this.menu.show();
    this.home.show();
    this.resume.show();
    setTimeout(()=>{ this.menu.hide(); this.home.hide(); this.resume.hide(); }, 3000);
    this.menuButtons = [document.getElementById('home'), document.getElementById('about'), document.getElementById('projects'), document.getElementById('skills'), document.getElementById('contact')];
    // document.getElementById('home').setAttribute('style', 'color: black; text-decoration: underline;');
  }

  constructor (private router: Router) {
    this.router.navigate(["/home"]);
  }

  navigateToComponent(drawer, path) {
    drawer.toggle();    
    // this.setButtonsStyle(path); 
    this.router.navigate(["/"+path]);
  }

  downloadPDF() {
    FileSaver.saveAs("assets/Harsha_Chaudhary.pdf", "HarshaChaudharyResume");
  }

  prepareRoute(outlet: RouterOutlet){
    
  }

  setButtonsStyle(path) {
    this.menuButtons.forEach(element => {
      if (element.id === path){
        element.setAttribute('style', 'color: black; text-decoration: underline;');
      }
      else {
        element.setAttribute('style', 'color: rgb(68, 68, 68);');
      }
    });
  }

}


