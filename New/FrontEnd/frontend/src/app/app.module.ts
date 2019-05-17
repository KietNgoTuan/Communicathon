import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardIDService } from './service/card-id.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './card-id/list/list.component';
import { EditComponent } from './card-id/edit/edit.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ErrordialogService } from './errordialog/errordialog.service';
import { HttpConfigInterceptor} from './service/httpintercept.interceptor';
import { ErrorDialogComponent } from './errordialog/errordialog.component';
import { MatDialogModule } from '@angular/material';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatOptionModule, 
  MatSelectModule, 
  MatIconModule, 
  MatButtonModule, 
  MatCardModule, 
  MatTableModule, 
  MatDividerModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule  } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListeComponent } from './liens/liste/liste.component';
import { NewComponent } from './liens/new/new.component';
import { HomeIconesComponent } from './home/home-icones/home-icones.component';
import { IconeHomeService } from './service/icone-home.service' ;

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'cardID/edit', component: EditComponent },
  { path: 'cardID/list', component: ListComponent },
  { path: 'liens/liste', component: ListeComponent },
  { path: 'liens/new', component: NewComponent}

];  


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    ProfileComponent,
    LoginComponent,
    RegistreComponent,
    HomeComponent,
    ListeComponent,
    NewComponent,
    ErrorDialogComponent,
    HomeIconesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ShowHidePasswordModule,
    //AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [
    CardIDService,
    AuthenticationService, 
    AuthGuardService,
    ErrordialogService,
    IconeHomeService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
       
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
