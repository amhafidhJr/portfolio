import { AfterViewInit, Component } from '@angular/core';


declare const particlesJS: any;
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'assets/particle.json', null);
    
    }
}
