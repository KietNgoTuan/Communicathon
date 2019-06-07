// Importation des modules necessaires dans le premier router ( login + register + change password )

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgetpwComponent } from './forgetpw/forgetpw.component';
import { RegistreComponent } from './registre/registre.component';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuardService } from './service/auth-guard.service';
import { ErrordialogService } from './errordialog/errordialog.service';
import { HttpConfigInterceptor} from './service/httpintercept.interceptor';
import { ErrorDialogComponent } from './errordialog/errordialog.component';
import { MatDialogModule } from '@angular/material';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {FlexLayoutModule} from '@angular/flex-layout';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { CacheMapService } from './service/cache-map.service';
import { CachingInterceptor } from './Cache/caching-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistreComponent,
    ErrorDialogComponent,
    ForgetpwComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShowHidePasswordModule,
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
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [

    AuthenticationService, 
    AuthGuardService,
    ErrordialogService,
    [{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },{ provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }],
    CacheMapService,
    { provide: Cache, useClass:CacheMapService }
    
       
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
