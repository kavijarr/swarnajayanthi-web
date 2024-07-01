import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TechnologySectionComponent } from './pages/technology-section/technology-section.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "technology",
    component: TechnologySectionComponent
  }
];
