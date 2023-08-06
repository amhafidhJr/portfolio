import { Component, Injectable, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import Typed from 'typed.js';


declare const particlesJS: any;
declare var anime: any;  

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  
  
  @ViewChild('textContainer') textContainer!: ElementRef;

  ngOnInit(): void {
    setTimeout(() => {
      const options = {
        strings: [
          "Hi, I'm Abdulahlim Hafidh",
          "A passionate Full Stack Developer and Cybersecurity Enthusiast",
          "Focused on building secure and scalable web applications",
          "Experienced in JavaScript, Angular, React, Java, and Python",
          "Creating efficient and user-friendly software solutions",
          "Let's connect and create something amazing together!",
        ],
        typeSpeed: 50,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|',
        contentType: 'html', // Use HTML content type
        callback: () => {
          // Once the Typed.js animation is complete, manually set word-wrap for the text
          this.textContainer.nativeElement.style.whiteSpace = 'normal';
          this.textContainer.nativeElement.style.wordBreak = 'break-word';
        }
      };
  
      new Typed(this.textContainer.nativeElement, options);
    });
  }

  constructor() {}
  ngAfterViewInit(): void {
  particlesJS.load('particles-js', 'assets/particle.json', null);
  
  }


 
  
}
