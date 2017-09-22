import { Component, OnInit }                         from '@angular/core';
import { Router, ActivatedRoute, Params }            from '@angular/router';

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

    constructor(public router: Router) { }

    ngOnInit() {
    }

    public onSubmit = () => {
        console.log(this.login)
        this.router.navigate(['/dashboard']);
    }

}
