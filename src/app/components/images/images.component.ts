import { Component, OnInit } from '@angular/core';
import { ImageService } from "../../services/image.service";

import { Image } from "../../models/Image";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images:Image[];

  constructor(private imageService:ImageService) { }

  ngOnInit() {

    this.imageService.getImages().subscribe(images=>{

      this.images = images;

    });

  }

  checkForGreen = false;
  checkForYellow = false;
  checkForWhite = false;

  onClickForGreen(){
    this.checkForGreen=true;
  }

  onClickForYellow(){
    this.checkForYellow=true;
  }

  onClickForWhite(){
    this.checkForWhite=true;
  }
}
