import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// routing
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Page404Component } from './page404/page404.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ChatComponent } from './chat/chat.component';

// Gọi thư viện để sử dụng api
import { HttpClientModule } from '@angular/common/http';

// boostrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Gọi form lấy dữ liệu và kiểm tra dữ liệu bên ngoài .html
import { FormsModule } from '@angular/forms';

// Gọi form lấy dữ liệu và kiểm tra dữ liệu bên trong file .ts
import { ReactiveFormsModule } from '@angular/forms';

// Gọi thư viện phân trang
import { NgxPaginationModule } from 'ngx-pagination';

// Gọi thư viện socket.io
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    PostComponent,
    CategoryComponent,
    ProductComponent,
    ContactComponent,
    SidebarComponent,
    Page404Component,
    LoginComponent,
    SearchComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    // routing
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    // import FormsModule
    FormsModule,
    // boostrap
    NgbModule,
    // font-awesome
    FontAwesomeModule,
    // ReactiveFormsModule
    ReactiveFormsModule,
    // NgxPaginationModule
    NgxPaginationModule,
    // Gọi socket
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
