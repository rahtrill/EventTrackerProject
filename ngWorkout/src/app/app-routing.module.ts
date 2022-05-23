import { CalculateComponent } from './components/calculate/calculate.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UpdateComponent } from './components/update/update.component';
import { CreateComponent } from './components/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "create", component: CreateComponent},
  {path: "update/:id", component: UpdateComponent},
  {path: "statistics", component: StatisticsComponent},
  {path: "calculate", component: CalculateComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
