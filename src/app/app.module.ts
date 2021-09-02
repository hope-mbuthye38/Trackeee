import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackeeComponent } from './trackee/trackee.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { TrackeeysDirective } from './trackeeys.directive';
import { DategeneratePipe } from './dategenerate.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { TrackleeDirective } from './tracklee.directive';
import { RepositoryComponent } from './repository/repository.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackeeComponent,
    LandingComponent,
    ProfileComponent,
    TrackeeysDirective,
    DategeneratePipe,
    NavbarComponent,
    AboutComponent,
    TrackleeDirective,
    RepositoryComponent
 ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
