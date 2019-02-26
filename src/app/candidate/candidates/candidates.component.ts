import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.sass']
})
export class CandidatesComponent implements OnInit {

  public candidates: any;
  public selectedCandidate: any;

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidateService.getCandidates()
    .subscribe(candidates => this.candidates = candidates.results);
  }

  onSelect(candidate: any): void {
    this.selectedCandidate = candidate;
  }

}
