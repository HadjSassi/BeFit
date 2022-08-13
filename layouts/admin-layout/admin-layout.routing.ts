import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CoachesComponent } from '../../pages/icons/icons.component';
import { NutritionistComponent } from '../../pages/maps/maps.component';
import { AcceuilComponent } from '../../pages/user-profile/user-profile.component';
import { CoursesComponent } from '../../pages/tables/tables.component';
import {OneCourseComponent} from '../../pages/one-course/one-course.component';
import {AuthentificationGuard} from '../../services/authentification.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',canActivate: [AuthentificationGuard]   ,   component: DashboardComponent },
    { path: 'acceuil',   component: AcceuilComponent },
    { path: 'courses',         component: CoursesComponent },
    { path: 'OneCourse',  canActivate: [AuthentificationGuard]   ,       component: OneCourseComponent },
    { path: 'coaches',  canActivate: [AuthentificationGuard]   ,        component: CoachesComponent },
    { path: 'nutritionist',  canActivate: [AuthentificationGuard]   ,         component: NutritionistComponent }
];
