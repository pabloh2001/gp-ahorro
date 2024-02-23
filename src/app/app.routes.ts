import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'app',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'grupos',
                title: 'Grupos',
                loadComponent: () => import('./dashboard/pages/groups/groups.component'),
            },
            {
                path: 'calendario',
                title: 'Calendario',
                loadComponent: () => import('./dashboard/pages/calendar/calendar.component'),
            },
            {
                path: '',
                redirectTo: 'grupos',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full'
    }
];
