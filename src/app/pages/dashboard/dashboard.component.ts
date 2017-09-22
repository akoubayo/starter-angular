import { Component, OnInit } from '@angular/core';

import { User }              from './../../services/user/user'
import { UserService }       from './../../services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public profil:User;

    constructor(private user_service:UserService) {

    }

    ngOnInit() {
        this.profil = this.user_service.getUser();
    }

    public setUser = (_profil:any) => {
        this.user_service.setUser(_profil);
    }

}
