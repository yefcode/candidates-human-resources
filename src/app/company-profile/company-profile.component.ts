import { Component, OnInit } from '@angular/core';
import { Company } from '../company';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass']
})
export class CompanyProfileComponent implements OnInit {

  company: Company;

  constructor() { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    this.company = new Company('Company name', 'company address', 'company email', 'company phone');
  }

}
