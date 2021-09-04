// Angular
import { CommonModule } from '@angular/common';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Local components
import { LoginComponent } from './login/login.component';

// Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastService } from '../../utils/toast.service';
import { TranslateModule } from '@ngx-translate/core';

const routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ExtendedModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    MatCardModule,
    NgxUiLoaderModule,
    MatOptionModule,
    MatSelectModule,
  ],
  providers: [
    ToastService,
  ],
})
export class AuthModule { }
