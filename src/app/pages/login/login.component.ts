

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public login = {
        email:'',
        passowrd:''
    }

    constructor() { }

    ngOnInit() {
    }

    public onSubmit = () => {
        console.log(this.login)
    }

}
