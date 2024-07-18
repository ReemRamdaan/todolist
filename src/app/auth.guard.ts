import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class authGuard implements CanActivate{
  constructor(private _Router:Router){}
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      if(localStorage.getItem('tokenToDoList')!==null){
        return true;
      }else
      {
        this._Router.navigate(['/login'])
        return false;
      }
    }
}
