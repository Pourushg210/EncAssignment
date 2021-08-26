import { BreakpointObserver,Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataRepoService } from '../services/data-repo.service';
import { Users } from '../Models/data-interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  cols:number;
  users:Users[];
  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 1,
    xs: 1
  }

  constructor(private breakpointObserver:BreakpointObserver,
    private dataRepoService:DataRepoService,
    private route:Router,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.initLayout();
    this.getUsers();
    this.loginForm = new FormGroup({
      'userName':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}$")])
    })
  }

  // Used to make layout based on different screens
  initLayout() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
    });
  }

  
  

   // Getting response returned from getUsers() method of dataRepo service
   getUsers() {
    
    this.dataRepoService.getUsers().subscribe(response => {    
      this.users = <Users[]>response;
      console.log(JSON.stringify(this.users));
      
    })
  }

  // This method is used to call when form is submitted
  
  onSubmit()
  {
    let userEmail = this.loginForm.value["userName"];

    // Checking if entered input is found in fetched users
    let index = this.users.findIndex(user=>user.email === userEmail);

    if(index!==-1)
    {
      localStorage.setItem('loggedInUser',userEmail);
      this.route.navigate(['/companydata']);     
    }
    else{
      this.snackBar.open("This user does not exist !");
    }
  }
}
