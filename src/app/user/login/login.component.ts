import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { User } from '../../user'
import { Router} from '@angular/router'
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  constructor(private fb: FormBuilder, private ds:DataService, private router:Router, private auth: AuthService) {
    this.loginform = this.fb.group({
      username: ['',Validators.required],
      password : ['',Validators.required]

    })
   }

  ngOnInit(): void {
  }
  login(data: User){
    // console.log(data)
    // this.ds.login(data).subscribe(item => {
    //   console.log(item.token)
    //   localStorage.setItem('token', item.token)
    //   this.router.navigate(['dashboard'])
    // })
    this.auth.login(data)
  }

}
