import { Injectable } from '@angular/core';
import { User }       from './user';

@Injectable()
export class UserService {

    private user:User;

    constructor() {
        this.user = new User(); // Initialisation de notre User
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
        this.user = user;
    }
}
