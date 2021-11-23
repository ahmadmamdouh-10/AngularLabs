import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { UserAuthGuard } from './guards/user-auth.guard';

const routes:Routes=[
  {path: '', redirectTo: 'User/ViewProfile', pathMatch: 'full'},
  {path: 'Viewprofile', component: ViewProfileComponent, canActivate: [UserAuthGuard]},
  {path: 'Editprofile', component: EditProfileComponent, canActivate: [UserAuthGuard]},
  {path: 'Login', component: LoginComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
