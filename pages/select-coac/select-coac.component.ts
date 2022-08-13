import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthentificatoinService} from '../../services/authentificatoin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  template: `

    <div  class="modal-header" >
      <h4 class="modal-title">Selection Coach</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close()">X</button>
    </div>
    <div class="modal-body">
      <div class="">
        <img class="" src="assets/img/theme/team-1-800x800.jpg" width="200" style="border-radius: 50%; float: left;" alt="">
        <div class="" style="transform: translateX(5%);" >30 DT/Month<img class="" src="assets/img/brand/rating.png" style="width: 30%;" alt=""></div>
        <div class="h3 text-center" style=";transform: translateY(-350%) ;margin-left: 50% ; clear: both">Foulen Ben Foulen</div>
      </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ex iste voluptate? Consectetur facilis, fuga ipsam minima quis repudiandae sapiente sunt totam voluptatibus! Debitis dolorem, facilis fugiat illum magnam molestiae!
      Consequatur culpa et eveniet ipsam laboriosam, laudantium maiores molestias quae quaerat sunt. Ab ad consequatur culpa eveniet fuga iure placeat rerum, ullam.
    </p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" style="transform: translateX(-40%)" (click)="activeModal.close()">Select as a personale Coach</button>
    </div>
  `
})
export class NgbdModalContent {
  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'app-select-coac',
  templateUrl: './select-coac.component.html',
  styleUrls: ['./select-coac.component.scss']
})
export class SelectCoacComponent implements OnInit {

  constructor(private modalService: NgbModal, public router: Router) {
  }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }

  activate() {
    AuthentificatoinService.isIn = true;
    this.router.navigate(['/dashboard']);
  }
}
