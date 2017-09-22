import { Component, OnInit } from '@angular/core';

import { UserService }       from './../../services/user/user.service';
import { Subject }           from 'rxjs/Subject';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public profil:any = {
        first_name:   "Damien",
        last_name:    "Altman",
        title:        "Dévellopeur chez Tilkee",
        bullet:        2
    }

    constructor(private userService:UserService) {

    }

    ngOnInit() {
        // console.log("here");
        // this.userService.getUserObservable().subscribe(res => {
        //     console.log('dans le res')
        //     console.log(res)
        //     this.profil = res;
        // },
        // err => {
        //     console.log('Dans error')
        //     console.log(err)
        // })
        this.profil = this.userService.getUser()
    }

    public setUser = () => {
        console.log('here')
        //this.userService.setUser(this.profil);
    }

}
