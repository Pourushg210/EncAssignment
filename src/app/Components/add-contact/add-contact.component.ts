import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactPerson } from 'src/app/Models/data-interface';
import { DataRepoService } from 'src/app/services/data-repo.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactFormGroup: FormGroup;
  contactPerson: ContactPerson = new ContactPerson();

  constructor(private dataRepoService: DataRepoService) { }

  ngOnInit(): void {
    this.initContactForm();
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
    this.addContactPersons();
    
  }

  onReset(){
    this.contactFormGroup.reset();
  }

  addContactPersons() {
    this.dataRepoService.addContactPersons(this.contactPerson).subscribe(response => {
      console.log(JSON.stringify(response));
    });
  }

}
