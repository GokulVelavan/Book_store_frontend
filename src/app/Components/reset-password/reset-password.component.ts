import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm!:FormGroup;
  token:any;
  constructor(private formBuilder: FormBuilder,private activateRoute:ActivatedRoute,private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.token= this.activateRoute.snapshot.paramMap.get('token'); // allParams is an object

  }
  reset(){
    let reqData={
      password:this. resetPasswordForm.value.newPassword,
      confirmPassword:this. resetPasswordForm.value.confirmPassword
    }
    console.log(reqData,this.token);
    this.userservice.resetPassword(reqData,this.token).subscribe((result)=>{
      console.log(result);
    })
  }
}
