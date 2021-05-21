import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { DeletePostComponent } from './views/delete-post/delete-post.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { ErrorrouteComponent } from './views/errorroute/errorroute.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { NewPostComponent } from './views/new-post/new-post.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthguardService]
  },
  {
    path:"newPost",
    component:NewPostComponent,
    canActivate: [AuthguardService]
  },
  {
    path:"editPost",
    component:EditPostComponent,
    canActivate:[AuthguardService]
  }, 
  {
    path:"deletePost",
    component:DeletePostComponent,
    canActivate:[AuthguardService]
  },
  {
    path:"**",
    component:ErrorrouteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
