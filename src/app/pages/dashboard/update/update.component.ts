import { Component, OnInit }               from '@angular/core';
import { User }                            from './../../../services/user/user'
import { UserService }                     from './../../../services/user/user.service'
import { Router, ActivatedRoute, Params }  from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    private profil:User;

    constructor(private _user_service:UserService, private router:Router) {
    }

    ngOnInit() {
        this.profil = this._user_service.getUserByCopy();
    }

    public setUser = (_profil:any) => {
        this._user_service.setUser(_profil);
        this.router.navigate(['/dashboard']);
    }
}
