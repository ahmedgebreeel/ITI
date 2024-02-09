import { Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { StudentsComponent } from './components/students/students.component';
import { DetailsComponent } from './components/details/details.component';
import { AddComponent } from './components/add/add.component';
import { UpdateComponent } from './components/update/update.component';

export const routes: Routes = [
    {path:"", component: StudentsComponent},
    {path:"students", component: StudentsComponent},
    {path:"students/:id", component: DetailsComponent},
    {path:"add", component: AddComponent},
    {path:"update/:id", component: UpdateComponent},



    

    
];
