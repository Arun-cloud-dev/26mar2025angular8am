import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component:AdminComponent,
    },
    {
        path: 'home',
        component:HomeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'aboutus',
        component: AboutusComponent,
    }
];
