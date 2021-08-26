import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DataRepoService } from '../services/data-repo.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  isLoading = false;
  companyId:string;
  companyDetails:any;
  company:any;
  constructor(private activatedRoute:ActivatedRoute,
    private dataRepoService:DataRepoService,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      this.companyId = res['id'];
    })
    this.getCompanyDetailsById();
  }

  getCompanyDetailsById(){
    this.isLoading = true;
    this.dataRepoService.getCompanyDetailsById(this.companyId).subscribe(response=>{
      this.companyDetails = response;
      this.company = this.companyDetails[0];
      this.isLoading = false;
    },error=>{
      this.snackBar.open("Something went wrong !");
      this.isLoading = false;
    })
  }

}
