import { CarouselConfig } from 'ng-carousel-cdk/public-api';
import { CarouselWidthMode, CarouselAlignMode, CarouselComponent } from "ng-carousel-cdk";
import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselItem } from 'src/app/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(CarouselComponent) carouselRef: CarouselComponent;
  categories = ["Cappuccino", "MAchlato", "Late", "Americano"];
  categorySelected = this.categories[0];


  public config: CarouselConfig<any>;
  constructor(){
  }

  public ngOnInit(): void {
    this.initCarousel();
  }

  public initCarousel(){
    this.config = {
      items: [
        "Cappuccino", "Machlato", "Late", "Americano"
      ],
      slideWidth: 30,
      alignMode: CarouselAlignMode.LEFT,
      widthMode: CarouselWidthMode.PERCENT,
      shouldLoop: false,
    }
  }


  public selectCategory(category: any, index: number){
    this.categorySelected = category;
    this.carouselRef.setIndex(index);
    if(index === 0) {
      this.initCarousel();
    }
  }

}
