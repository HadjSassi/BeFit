import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthentificatoinService} from '../../services/authentificatoin.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/courses', title: 'Courses',  icon: 'ni-books text-success', class: '' },
    { path: '/coaches', title: 'Coaches',  icon: 'ni-user-run', class: '' },
    { path: '/nutritionist', title: 'Nutritionist',  icon: 'ni-basket text-warning', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public isIn : boolean = AuthentificatoinService.isIn ;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  desactivate() {
    AuthentificatoinService.isIn = false ;
  }
}
