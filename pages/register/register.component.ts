import { Component, OnInit } from '@angular/core';
import {AuthentificatoinService} from '../../services/authentificatoin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  activate() {
    AuthentificatoinService.isIn = true;
    this.router.navigate(['/dashboard']);
  }
}
