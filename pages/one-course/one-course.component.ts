import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Video Zumba 1</h4>
          <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.close()">X</button>
        </div>
        <div class="modal-body">

          <iframe width="440" height="250" src="https://www.youtube.com/embed/sf7BrE75st8" title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur corporis culpa cumque, cupiditate dolor dolorem eos
            ex hic impedit nemo nulla quaerat quidem quo repudiandae saepe similique sint ut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos dolore explicabo hic laborum nesciunt odio quasi
            quod sint? A accusantium ad dicta ea illum libero minus, molestias quae sunt.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos dolore explicabo hic laborum nesciunt odio quasi
            quod sint? A accusantium ad dicta ea illum libero minus, molestias quae sunt.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, dignissimos dolore explicabo hic laborum nesciunt odio quasi
            quod sint? A accusantium ad dicta ea illum libero minus, molestias quae sunt.
          </p>
        </div>
      </div>
    </div>
  `
})
export class NgbdModalContente {
  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.scss']
})
export class OneCourseComponent implements OnInit {

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContente);
  }
}
