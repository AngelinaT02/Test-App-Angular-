import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css']
})
export class SingleImageComponent implements OnInit {

  @Input() image:Image;

  constructor() { }

  ngOnInit() {
    
  }

}
