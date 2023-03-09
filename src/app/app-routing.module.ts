import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './shared/layout/simple-layout/simple-layout.component';
const routes: Routes = [
  {
    path: '', redirectTo:'/dashboard', pathMatch:'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  }, 
  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    {
      path: 'user-role-permission',
      loadChildren: () => import('./components/pages/user-role-permission/user-role-permission.module').then(m => m.UserRolePermissionModule)
    },
    {
      path: 'user-role-master',
      loadChildren: () => import('./components/pages/user-role-master/user-role-master.module').then(m => m.UserRoleMasterModule )
    },

    {
      path: 'transfer',
      loadChildren: () => import('./components/pages/transfer/transfer.module').then(m => m.TransferModule )
    },

    {
      path: 'report',
      loadChildren: () => import('./components/pages/report/report.module').then(m => m.ReportModule )
    },

    {
      path: 'ChangePassword',
      loadChildren: () => import('./components/pages/change-password/change-password.module').then(m => m.ChangePasswordModule )
    },

    {
      path: 'Logout',
      loadChildren: () => import('./components/pages/logout/logout.module').then(m => m.LogoutModule )
    },

    {
      path: 'Profile', 
      loadChildren: () => import('./components/pages/profile/profile.module').then(m => m.ProfileModule)
    },
    
    ]
  },
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
