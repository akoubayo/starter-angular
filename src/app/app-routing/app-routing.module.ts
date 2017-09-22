import { NgModule }                                from '@angular/core';
import { CommonModule }                            from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppModule }                               from '../app.module';
import { LoginComponent }                          from './../pages/login/login.component';
import { FormsModule, ReactiveFormsModule }        from '@angular/forms';

const appRoutes: Routes = [
    {
      path: '',
      component: LoginComponent,
    },
    {
      path: 'dashboard',
      loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
    }
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true,
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: PreloadAllModules, // To enable preloading of all lazy loaded modules
      }
    ),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ],
  providers: []
})

export class AppRoutingModule { }
