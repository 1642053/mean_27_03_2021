import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// gọi servive
import { InfoUserService } from './info-user.service';

@Injectable({
  providedIn: 'root'
})
export class InfoUserGuard implements CanActivate {

  constructor(private server: InfoUserService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // gọi local storage
      var token = localStorage.getItem('token');

      var kq=true;

      this.server
      .get_info_user( token )
      .subscribe((kq)=>{
        if(kq['result'] == 0){
          kq = false;
        }
      });

      return kq;
  }
  
}
