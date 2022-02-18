import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  sendmail()
  {
    let reqData={
      email:this.forgetPasswordForm.value.email,
    }
    this.userservice.forgetPassword(reqData).subscribe((result)=>{
      console.log(result);
    })
  }
}
