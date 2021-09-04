// Angular
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local modules
import { AuthModule } from './main/auth/auth.module';
import { ThemeModule } from './theme/theme.module';

// Loader
// tslint:disable-next-line:import-spacing
import { NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {POSITION, SPINNER, PB_DIRECTION } from 'ngx-ui-loader';

// Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Toast service
import { ToastService } from './utils/toast.service';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  fgsColor: '#FFFFFF',
  fgsPosition: POSITION.centerCenter,
  fgsSize: 50,
  fgsType: SPINNER.foldingCube,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
  pbColor: '#FFFFFF',
  logoPosition: 'top-center',
};

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./main/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ThemeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ],
      },
      defaultLanguage: 'es',
    }),
  ],
  providers: [
    ToastService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
