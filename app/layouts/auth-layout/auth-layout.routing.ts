import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import {SelectCoacComponent} from '../../pages/select-coac/select-coac.component';
import {SelectNutrComponent} from '../../pages/select-nutr/select-nutr.component';
import {PayComponent} from '../../pages/pay/pay.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'selectCoaches',       component: SelectCoacComponent },
    { path: 'selectNutritionniste',       component: SelectNutrComponent },
    { path: 'BeFitPay',       component: PayComponent }
];
