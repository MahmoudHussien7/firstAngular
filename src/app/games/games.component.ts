import { Component } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  games: Array<any> = [
    {
      id: '1',
      title: 'Black',
      description: 'Immerse yourself in two distinct single-player campaigns.',
      genre: 'Action',
      released: '2005',
      ageRating: '18+',
      price: 12.49,
      discountedPrice: 4.79,
      onSale: true,
      image: 'https://static.noroff.dev/api/gamehub/2-black.jpg',
      tags: ['gamehub', 'game'],
      favorite: true,
    },
    {
      id: '2',
      title: 'The Legend of Zelda: Breath of the Wild',
      description: 'Explore a vast world and uncover its secrets.',
      genre: 'Adventure',
      released: '2017',
      ageRating: '10+',
      price: 59.99,
      discountedPrice: 49.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
      tags: ['zelda', 'adventure'],
      favorite: true,
    },
    {
      id: '3',
      title: 'Cyberpunk 2077',
      description: 'Dive into a dystopian future in this RPG adventure.',
      genre: 'RPG',
      released: '2020',
      ageRating: '18+',
      price: 49.99,
      discountedPrice: 29.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
      tags: ['sci-fi', 'RPG'],
      favorite: false,
    },
    {
      id: '4',
      title: 'God of War',
      description: 'Embark on a mythological journey with Kratos.',
      genre: 'Action',
      released: '2018',
      ageRating: '18+',
      price: 49.99,
      discountedPrice: 24.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg',
      tags: ['mythology', 'action'],
      favorite: true,
    },
    {
      id: '5',
      title: 'Grand Theft Auto V',
      description:
        'Experience the lives of three criminals in a sprawling open world.',
      genre: 'Action',
      released: '2013',
      ageRating: '18+',
      price: 29.99,
      discountedPrice: 19.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png',
      tags: ['open-world', 'action'],
      favorite: true,
    },
    {
      id: '6',
      title: 'Elden Ring',
      description:
        'Explore a vast world created by Hidetaka Miyazaki and George R.R. Martin.',
      genre: 'RPG',
      released: '2022',
      ageRating: '16+',
      price: 59.99,
      discountedPrice: 39.99,
      onSale: true,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfsYjEemPjLSGQzWDMadXv7mvYPiEg2oRFKneBwn8ECGj4gmf-1V2FBBTR3rpPI5oaf88HQ',
      tags: ['fantasy', 'RPG'],
      favorite: true,
    },
    {
      id: '7',
      title: 'Resident Evil 4 Remake',
      description:
        'Survive the horrors of the infected village in this classic remake.',
      genre: 'Horror',
      released: '2023',
      ageRating: '18+',
      price: 59.99,
      discountedPrice: 49.99,
      onSale: false,
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/89/Resident_Evil_4_Remake_cover.jpg',
      tags: ['horror', 'action'],
      favorite: false,
    },
    {
      id: '8',
      title: 'Horizon Forbidden West',
      description:
        'Uncover mysteries in a post-apocalyptic world with robotic creatures.',
      genre: 'Action RPG',
      released: '2022',
      ageRating: '16+',
      price: 69.99,
      discountedPrice: 59.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/4/41/Horizon_Forbidden_West_cover_art.jpg',
      tags: ['open-world', 'action'],
      favorite: true,
    },
    {
      id: '9',
      title: 'Spider-Man: Miles Morales',
      description: 'Swing through New York City as Miles Morales.',
      genre: 'Action',
      released: '2020',
      ageRating: '13+',
      price: 49.99,
      discountedPrice: 39.99,
      onSale: true,
      image:
        'https://upload.wikimedia.org/wikipedia/en/3/3f/Spider-Man_Miles_Morales_cover.jpg',
      tags: ['superhero', 'action'],
      favorite: false,
    },
  ];
  handleReciveData(id: string) {
    console.log('cld from parent ', id);
    this.games = this.games.filter((game) => game.id !== id);
  }
}
