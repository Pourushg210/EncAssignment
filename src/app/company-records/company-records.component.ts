import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataRepoService } from '../services/data-repo.service';
import { Company } from '../Models/data-interface';
import { ContactPerson } from '../Models/data-interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-records',
  templateUrl: './company-records.component.html',
  styleUrls: ['./company-records.component.css']
})
export class CompanyRecordsComponent implements OnInit {

  isLoading = false;
  companies:Company[];
  contactPersons:ContactPerson[];
  dataSource: any = new MatTableDataSource();
  dataSourceContacts:any = new MatTableDataSource();

  displayedColumns: string[] = ['CompanyName','Description'];
  ContactsColumns: string[] = ['name','country','phone','action'];

  constructor(private dataRepoService: DataRepoService,
    private snackBar:MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.getCompaines();
    this.getContactPersons();
  }

 // Getting reponse for companies 
  getCompaines() {
    this.isLoading = true;
    this.dataRepoService.getCompaines().subscribe(response => {
      this.companies = <Company[]>response;
      console.log(JSON.stringify(this.companies));
      this.dataSource = new MatTableDataSource(this.companies);
      this.isLoading = false;
    },error=>{
      this.snackBar.open("Something went wrong !");
      this.isLoading = false;
    })
  }
   
  // Getting response for contact persons
  getContactPersons(){
    debugger;
    this.isLoading = true;
    this.dataRepoService.getContactPersons().subscribe(response=>{
      this.contactPersons = <ContactPerson[]>response;
      console.log(JSON.stringify(this.contactPersons));
      this.dataSourceContacts = new MatTableDataSource(this.contactPersons);
      this.isLoading = false;
    },error=>{
      this.snackBar.open("Something went wrong !");
      this.isLoading = false;
    })
  }
  // Getting response for contact persons
  addContactPersons(){
    debugger;
    this.isLoading = true;
    this.dataRepoService.getContactPersons().subscribe(response=>{
      this.contactPersons = <ContactPerson[]>response;
      console.log(JSON.stringify(this.contactPersons));
      this.dataSourceContacts = new MatTableDataSource(this.contactPersons);
      this.isLoading = false;
    },error=>{
      this.snackBar.open("Something went wrong !");
      this.isLoading = false;
    })
  }

  addContact(){
    this.router.navigate(['/companydata/addcontact']);
  }

  navToUpdateContact(id:any){
    this.router.navigate(['/companydata/updatecontact/id/',id]);
  }

  deleteContact(contactId:any){

    if(confirm("Are you sure you want to delete the user details?"))
    {
      debugger;
      this.dataRepoService.deleteContactDetails(contactId).subscribe(response=>{

        console.log(response);
      },error=>{
        console.log(error);
        this.snackBar.open("Error :"+JSON.stringify(error));
      })
    }
    else{
      alert("Operation has been cancelled");
    }
  }
}
