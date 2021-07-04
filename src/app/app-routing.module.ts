import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// gọi ra những component
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './chat/chat.component';

// gọi ra những guard để bảo vệ component, ngăn vào route
import { PostGuard } from './post/post.guard';

const routes: Routes = [
  {
    // đường dẫn
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
    path: 'tin-tuc/:id',
    component: PostComponent,
    canActivate: [PostGuard]
  },
  {
    path: 'lien-he.html',
    component: ContactComponent
  },
  {
    path: 'login.html',
    component: LoginComponent
  },
  {
    path: 'chat',
    component: ChatComponent
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
