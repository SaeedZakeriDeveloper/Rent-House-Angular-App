import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
//import {FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  registerForm: FormGroup | undefined;
  submitted : boolean =  false;
  dataLoaded: boolean=false;
 // f: any;
  
  constructor(
    //private  formBuilder:FormBuilder,
    private authService:AuthService,                              
    private toasterService:ToastrService,         //dar ebteda bayad in library ro nasb konim ke va beraye nasb az syntax npm i "npm install ngx-toastr "                 //The ngx-toastr provides various kinds of options that can be used to customize the notification of our application. We might have seen it in the devices where we can modify the frequency of the notifications.
  ) { }


  get f() {
     return this.registerForm.controls
    }    //property get va hatman bayad ye meghdari return kone yani age return nakone error mid,,, methood get hastesh ke raftaresh shabihe proprtyie




  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    // this.registerForm=this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(8)]]
    // })

    this.registerForm= new FormGroup({
      firstName: new FormControl('', Validators.required ),
      lastName: new FormControl('', Validators.required ),
      email: new FormControl('', Validators.required ),
      password: new FormControl('', [Validators.required ,Validators.minLength(8)])
    });

   // this.f = this.registerForm.controls;
  }



  register(){
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value)
        this.authService.register(registerModel).subscribe(response=>{
        this.toasterService.success(response.message,"Success")
        this.dataLoaded=true
      }
      ,responseError=>{
       
        if(responseError.error.ValidationErrors?.length > 0) {    
         
          this.toasterService.error(responseError.error,"Worng")
        }
        
      })
    }

     else {
      this.toasterService.error("Please complete all required fields.","Attention!")
    }
  }
}





