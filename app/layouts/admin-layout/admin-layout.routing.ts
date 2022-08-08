import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { CoachesComponent } from '../../pages/icons/icons.component';
import { NutritionistComponent } from '../../pages/maps/maps.component';
import { AcceuilComponent } from '../../pages/user-profile/user-profile.component';
import { CoursesComponent } from '../../pages/tables/tables.component';
import {OneCourseComponent} from '../../pages/one-course/one-course.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'acceuil',   component: AcceuilComponent },
    { path: 'courses',         component: CoursesComponent },
    { path: 'OneCourse',         component: OneCourseComponent },
    { path: 'coaches',          component: CoachesComponent },
    { path: 'nutritionist',           component: NutritionistComponent }
];
