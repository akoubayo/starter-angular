import { ModuleWithProviders }    from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { DashboardComponent }     from './dashboard.component';
import { UpdateComponent }        from './update/update.component';


const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'update',
                component:UpdateComponent
            },
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
