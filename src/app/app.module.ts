import { HttpRequestService } from './http-request.service';
import { ContactService } from './contact.service';
import { UserDataService } from './user-data.service';
import { RouterModule } from '@angular/router';
import { PostsService } from './posts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostComponent } from './post/post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { TimeFormatterPipe } from './time-formatter.pipe';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { WeatherFormatterPipe } from './weather-formatter.pipe';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostComponent,
    HomePageComponent,
    PageNotFoundComponent,
    UserPageComponent,
    ContactUsPageComponent,
    TimeFormatterPipe,
    WeatherComponent,
    WeatherFormatterPipe,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path:'',component:HomePageComponent},
        {path:'user',component:UserPageComponent},
        {path:'contactUs',component:ContactUsPageComponent},
        {path:'weather',component:WeatherComponent},
        {path:'**',component:PageNotFoundComponent},
      ]),
    ],
  providers: [
    PostsService,
    UserDataService,
    ContactService,
    HttpRequestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
