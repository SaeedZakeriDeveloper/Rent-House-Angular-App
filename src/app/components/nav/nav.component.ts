import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn: boolean = false;

  constructor(private loginService : LoginService , private router : Router ) { }

  authenticated: boolean = false;
  subscriptions: Subscription[] = [];
  

  ngOnInit(): void {    
    this.subscriptions.push(
      this.loginService.loginSubject.subscribe((result: any) => {
        this.loggedIn = result.value;
      })
    );
  }


  onLogout(){
     this.loginService.logout()
     this.router.navigate(['/login'])
  }
}
