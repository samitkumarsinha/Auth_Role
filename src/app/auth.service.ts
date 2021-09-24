import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../app/user'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: User;
  constructor(private ds: DataService, private router: Router) { 
    this.user = this.getUser(this.token)
  }
  get token(){
    return localStorage.getItem('token')
  }
  login(data: User){
    console.log(data)
    this.ds.login(data).subscribe(item => {
      console.log(item.token)
      localStorage.setItem('token', item.token)
      this.user = this.getUser(this.token)
      console.log(this.user)
      if(!this.user){
        alert("Nok")
      }else{
        this.router.navigate(['dashboard'])
      }
    })
  }
  getUser(token: any): User{
    const payload = atob(token.split('.')[1])
    let userdetail:User = JSON.parse(payload).payloaddata
    console.log(userdetail)
    return userdetail;
  }
}
