import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.sass']
})
export class CandidateDetailComponent implements OnInit {

  @Input() candidate: any;

  constructor() { }

  ngOnInit() {
  }

}
