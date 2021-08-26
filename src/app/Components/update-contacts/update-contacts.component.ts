import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ContactPerson } from 'src/app/Models/data-interface';
import { DataRepoService } from 'src/app/services/data-repo.service';

@Component({
  selector: 'app-update-contacts',
  templateUrl: './update-contacts.component.html',
  styleUrls: ['./update-contacts.component.css']
})
export class UpdateContactsComponent implements OnInit {

  contactFormGroup: FormGroup;
  contactPerson: ContactPerson = new ContactPerson();
  contactPersons: ContactPerson[] = [];
  currentId:number;

  constructor(private dataRepoService: DataRepoService,
    private activatedRoute:ActivatedRoute,
    private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.initContactForm();

    this.activatedRoute.params.subscribe(res=>{
      this.currentId = res["id"];
    })

    this.getContactById();
  }


  initContactForm() {
    this.contactFormGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'phone': new FormControl(null, Validators.required)
    })
  }


  onSubmit() {
  
    this.contactPerson.name = this.contactFormGroup.value["name"];
    this.contactPerson.country = this.contactFormGroup.value["country"];
    this.contactPerson.phone = this.contactFormGroup.value["phone"];
    this.updateContactDetails();
  }

  onReset(){
    debugger;
    this.contactFormGroup.reset();
  }

  updateContactDetails() {
    this.dataRepoService.updateContactDetails(this.contactPerson).subscribe(response => {
      debugger;
      console.log(JSON.stringify(response));
      this.contactPerson = <ContactPerson>response;
      if(this.contactPerson.name!=null)
      this.snackBar.open("Succefully updated !");
    },error=>{
      this.snackBar.open(error);
    });
  }

  populateValues(Obj:ContactPerson[]){

    this.contactFormGroup.get('name')?.setValue(Obj[0].name);
    this.contactFormGroup.get('country')?.setValue(Obj[0].country);
    this.contactFormGroup.get('phone')?.setValue(Obj[0].phone);
  }

  getContactById(){
    this.dataRepoService.getContactById(this.currentId).subscribe(response=>{
      this.contactPersons = <ContactPerson[]>response;
      this.populateValues(this.contactPersons);
    },error=>{
      console.log(error);
    })
  }
}
