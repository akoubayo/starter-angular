import { Injectable } from '@angular/core';
import { User }       from './user';
import { Observable } from 'rxjs/Observable';
import { Subject }             from 'rxjs/Subject';

@Injectable()
export class UserService {

  private user:User; // Déclaration d'un user classique.
  private user_observable:Subject<User> = new Subject<any>(); // Déclaration d'un observable user

  constructor() {
      this.user = new User();
      this.user_observable.next(this.user);
  }

  public getUser = ():User => {
      console.log('==================')
      console.log(this.user);
      console.log('==================')
      return this.user;
  }

  public getUserObservable = ():Observable<User> => {
      return this.user_observable.asObservable();
  }

  public setUser = (user:User) => {
      this.user = user;
      this.user_observable.next(this.user);
  }

}
