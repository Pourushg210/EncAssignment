import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactPerson } from '../Models/data-interface';

@Injectable({
  providedIn: 'root'
})
export class DataRepoService {

  constructor(private httpClient:HttpClient) {   
  }

  basicURL = "https://my-json-server.typicode.com/bokadedarvin/AngularDeveloperSample/";
  
  // This method is used to fetch users
  getUsers(){
    let URL = this.basicURL + "users";
    return this.httpClient.get(URL);
  }

  // This method is used to fetch contact persons
  getContactPersons(){
    let URL = this.basicURL + "contacts";
    return this.httpClient.get(URL);
  }

  // This method is used to fetch contact persons
  addContactPersons(contact:ContactPerson){
    // debugger;
    let URL = this.basicURL + "contacts/";
    let requestBody = JSON.stringify(contact);
    return this.httpClient.post(URL,requestBody);
  }

// This method is used to fetch companies
  getCompaines(){
    let URL = this.basicURL + "companies";
    return this.httpClient.get(URL);
  }

  // This method is used to fetch company details by company id
  getCompanyDetailsById(compId:string){
    const URL = this.basicURL + "companies?id="+compId;
    return this.httpClient.get(URL);
  }

  // This method is used to fetch company details by company id
  updateContactDetails(contactPerson:ContactPerson){
    const URL = this.basicURL + "contacts";
    return this.httpClient.post(URL,contactPerson);
  }

  // This method is used to fetch company details by company id
  deleteContactDetails(contactId:any){
    const URL = this.basicURL + "contacts?id="+contactId;
    return this.httpClient.delete(URL);
  }

  getContactById(contactId:number){
    const URL = this.basicURL + "contacts?id="+contactId;
    return this.httpClient.get(URL);
  }
}
