import { Component, OnInit } from '@angular/core';
import {AuthentificatoinService} from '../../services/authentificatoin.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  activate() {
    AuthentificatoinService.isIn = true ;
  }
}
