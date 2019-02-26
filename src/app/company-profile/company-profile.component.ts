import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyProfileService } from '../company-profile.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.sass']
})
export class CompanyProfileComponent implements OnInit {

  company: Company;

  constructor(private companyProfileService: CompanyProfileService) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    this.company = new Company('Add a company name', 'Add an address', 'Add an email', 'Add a phone');
    const storedCompany = this.companyProfileService.getCompany();
    if (storedCompany) {
      this.company = new Company(storedCompany.name, storedCompany.address, storedCompany.email, storedCompany.phone);
    }
  }

  onSubmit(): void {
    this.companyProfileService.setCompany(this.company);
  }

}
