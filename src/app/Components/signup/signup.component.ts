import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ToggleSwitch : boolean=true;
  signupForm!:FormGroup;
  loginForm!:FormGroup;
    
  constructor(private formBuilder: FormBuilder ,private userservice:UserService,private route:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required]
    });
  }

  ToggleLoginSignUP() {
    return this.ToggleSwitch === true ? (this.ToggleSwitch = false) : (this.ToggleSwitch = true);
  }

  onLogin(){
    if(this.loginForm.value)
    {
      console.log(this.loginForm.value);
      let reqData={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      console.log(reqData);
      this.userservice.userLogin(reqData).subscribe((result:any)=>{
        console.log(result);
        localStorage.setItem("token",result.token);
      })
    }
    this.route.navigate(['/Home'])

  }
  onSignUp(){
    if(this.signupForm.value)
    {
      console.log(this.signupForm.value);
      let requestData={
        fullName:this.signupForm.value.fullName,
        email:this.signupForm.value.emailId,
        password:this.signupForm.value.password,
        mobileNumber:this.signupForm.value.mobileNumber
      }
      this.userservice.userRegistration(requestData).subscribe((response:any)=>{
        console.log("l",response)
      })
    }
    else
    console.log("invalid");
  }
  navigateToForgetPassword(){
    this.route.navigateByUrl('forgetpassword');
  }
}
