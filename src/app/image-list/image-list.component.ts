import { Component } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent {
  images = [
    {
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      imageUrl: 'URL_de_la_imagen_1.jpg',
      reactions: [
        { icon: 'thumb_up', count: 5 },
        { icon: 'favorite', count: 2 },
        { icon: 'star', count: 3 },
        // Agrega más reacciones según sea necesario
      ]
    },
    {
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      imageUrl: 'URL_de_la_imagen_1.jpg',
      reactions: [
        { icon: 'thumb_up', count: 5 },
        { icon: 'favorite', count: 2 },
        { icon: 'star', count: 3 },
        // Agrega más reacciones según sea necesario
      ]
    },
    {
      title: 'Imagen 1',
      description: 'Descripción de la imagen 1',
      imageUrl: 'URL_de_la_imagen_1.jpg',
      reactions: [
        { icon: 'thumb_up', count: 5 },
        { icon: 'favorite', count: 2 },
        { icon: 'star', count: 3 },
        // Agrega más reacciones según sea necesario
      ]
    },
    // Agrega más imágenes con reacciones
  ];

}
