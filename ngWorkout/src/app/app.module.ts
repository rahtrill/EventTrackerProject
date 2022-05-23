import { WorkoutService } from './services/workout.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CalculateComponent } from './components/calculate/calculate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    NavbarComponent,
    FilterPipe,
    FilterDatePipe,
    StatisticsComponent,
    NotFoundComponent,
    CalculateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    WorkoutService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
