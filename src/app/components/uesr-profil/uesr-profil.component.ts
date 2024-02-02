import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-uesr-profil',
  templateUrl: './uesr-profil.component.html',
  styleUrls: ['./uesr-profil.component.css']
})
export class UesrProfilComponent  implements OnInit{


  userForm: FormGroup;
  user: User;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    // this.getUser();
  }

  // getUser(){
  //   this.userService.getbyid(this.authService.userId).subscribe(response => {
  //     this.user = response.data
  //     this.userForm.patchValue(response.data)
  //   })
  // }


}
