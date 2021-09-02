import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
// {path:'trackery', component:LandingComponent },
{path:'landing', component:LandingComponent },
{path:'user', component:ProfileComponent },
{path:'profile', component:ProfileComponent },
{path:'about', component:AboutComponent },
{path:'trackee',component:RepositoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
