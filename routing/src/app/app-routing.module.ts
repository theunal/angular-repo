import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Err404Component } from './components/err404/err404.component';
import { HomeComponent } from './components/home/home.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  {
    path: 'user', component: UserComponent, children: [
      { path: ':id', component: UserUpdateComponent }
    ]
  },
  { path: '**', redirectTo: '' } // eğer hiçbir url'ye ulaşılmazsa home'a gider

  // eğer url'ye ulaşılmazsa not-found'a gider
  // { path: 'not-found', component: Err404Component }, 
  // { path: '**', redirectTo: 'not-found' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
