import { trigger, state, transition, style, animate } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

declare const particlesJS: any;


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class ProjectsComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    particlesJS.load('particles-js', 'assets/particle.json', null);
    
    }

  cards = [
    { 
      title: 'MjasiriHub', 
      content: 'MjasiriHub is an e-advertising entity aiming at linking goods and services providers to those who need them', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: 'https://play.google.com/store/apps/details?id=tz.ac.technovations.mjasirihub&hl=en&gl=US'
    },
    { 
      title: 'Ecommerce', 
      content: 'This is the first card', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: 'https://najahelectronic.com/login'
    },
    { 
      title: 'IMS', 
      content: 'This is the first card', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: 'https://inventory.najahtechnology.link/'
    },
    { 
      title: 'Watr App trucker', 
      content: 'This is the first card', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: '#'
    },
    { 
      title: 'Afyatel App', 
      content: 'This is the first card', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: '#'
    },
    { 
      title: 'Laundry MS', 
      content: 'This is the first card', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yFBGQLzEApveUrA5ahKyBgNtXMmyzlN9fw&usqp=CAU',
      link: 'https://laundry.najahtechnology.link/'
    },
    
  ];

  onCardEnter(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  }

  onCardLeave(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
  }

}
