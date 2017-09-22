import { Injectable } from '@angular/core';
import { User }       from './user';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {

    private user:User;
    public user_subject:Subject<any> = new Subject();

    constructor() {
        this.user = new User(); // Initialisation de notre User
        this.getObservableUser().subscribe(res => {
            this.user = res;
        })
    }

    // Renvoie l'adresse de l'objet User
    public getUser = ():User => {
        return this.user; // C'est la référence vers l'objet user qui est renvoyer
    }

  // Renvoie une copie de l'objet User
    public getUserByCopy = ():User => {
        let user_copy:User = new User();
        for(let key in this.user) {
          user_copy[key] = this.user[key];
        }
        return user_copy;
    }

    public setUser = (user) => {
        //this.user = user;
        this.setObersableUser(user);
    }

    public setObersableUser(user: User) {
        this.user_subject.next(user);
    }


    public getObservableUser(): Observable<User> {
        return this.user_subject.asObservable();
    }
}
