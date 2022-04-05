import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task Tracker';
  constructor(private router:Router){

  }
  hasRoute(route: String){
    return this.router.url === route;
  }
}
