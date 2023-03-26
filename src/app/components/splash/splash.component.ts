import { Component } from '@angular/core';

import { Router } from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {

  constructor(private router: Router){
  }

  public goToHome(): void{
    this.router.navigateByUrl("/home")
  }

}
