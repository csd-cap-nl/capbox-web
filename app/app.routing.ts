import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from './dashboard/dashboard.component';
import { UsersComponent }      from './users/users.component';
import { UserDetailComponent }      from './user-detail/user-detail.component';

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'detail/:id',
        component: UserDetailComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);