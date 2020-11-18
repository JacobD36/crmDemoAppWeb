import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  collapse = false;
  menuOpt = 1;

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  colapsar(){
    this.collapse = !this.collapse;
  }

  logOut() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

  addMenuOpt(menu: number) {
    this.menuOpt = menu;
  }
}
