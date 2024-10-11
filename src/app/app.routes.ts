import { Routes } from '@angular/router';
import { CandidaturePageComponent } from './pages/candidature-page/candidature-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';

export const routes: Routes = [
    {
        path : "candidature",
        component : CandidaturePageComponent
    },
    {
        path : "",
        redirectTo : "candidature",
        pathMatch : "full"
    },
    {
        path : "form",
        component : FormPageComponent
    }
];
