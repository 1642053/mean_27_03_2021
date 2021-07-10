import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// gọi component
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InfoUserComponent } from './info-user/info-user.component';

// gọi guard
import { InfoUserGuard } from './info-user/info-user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'danh-muc/:id',
    component: CategoryComponent
  },
  {
    path: 'san-pham/:id',
    component: ProductComponent
  },
  {
    path: 'lien-he.html',
    component: ContactComponent
  },
  {
    path: 'dang-nhap.html',
    component: LoginComponent
  },
  {
    path: 'thong-tin-thanh-vien.html',
    component: InfoUserComponent,
    canActivate: [InfoUserGuard]
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
