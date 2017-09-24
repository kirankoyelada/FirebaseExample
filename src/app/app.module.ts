import { ImageService } from './image.service';
import { LocationService } from './location.service';
import { HomeService } from './home.service';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { DepartmentComponent } from './department/department.component';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { EmployeeService } from './employee.service';
import { DepartmentService } from './department.service';
import { ImageDispalyComponent } from './image-dispaly/image-dispaly.component';
import { StringSplitPipe } from './string-split.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,EmployeeComponent,DepartmentComponent,LocationComponent, ImageDispalyComponent, StringSplitPipe
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      { path: '', redirectTo: '/ImageDisplay', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'dept', component: DepartmentComponent },
      { path: 'Location', component: LocationComponent },
      {path:'ImageDisplay',component:ImageDispalyComponent}
    ])
  ],
  providers: [EmployeeService,DepartmentService,HomeService,AngularFireDatabase,LocationService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
