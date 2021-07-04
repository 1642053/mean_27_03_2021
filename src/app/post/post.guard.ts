import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostGuard implements CanActivate {

  constructor( private router:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // lấy giá trị localstorage
    var active = localStorage.getItem('key');
    
    if( active == 'ok' )
    {
      return true;
    }
    else
    {
      // chuyển hướng về trang chủ hoặc 
      // chuyển hướng về route nào mà mình muốn
      this.router.navigateByUrl('/');

      return false;
    }
      
  }
  
}
