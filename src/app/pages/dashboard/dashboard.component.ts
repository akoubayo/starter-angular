import { Component, OnInit } from '@angular/core';

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

    constructor() { }

    ngOnInit() {
    }

}
