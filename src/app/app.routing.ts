import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent} from './about/about.component';
import { HomeComponent} from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent }   from './add-project/add-project.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'add-project',
    component: AddProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
