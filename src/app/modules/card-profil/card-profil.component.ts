import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-profil',
  templateUrl: './card-profil.component.html',
  styleUrls: ['./card-profil.component.css']
})
export class CardProfilComponent implements OnInit {

    @Input() profil:any = {};

    constructor() {
        this.profil.first_name = "";
        this.profil.last_name  = "";
        this.profil.title      = "";
        this.profil.bullet     = 0;
    }

    ngOnInit() {
    }

}
