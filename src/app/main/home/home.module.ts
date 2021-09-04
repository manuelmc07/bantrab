// Angular
import {CommonModule, DatePipe} from '@angular/common';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Local components
import { DefaultComponent } from '../../theme/default/default.component';
import { ToastService } from '../../utils/toast.service';

// Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';

// Loader
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

// Local
import { MainComponent } from './main/main.component';

const routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ExtendedModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
    MatNativeDateModule,
    MatDividerModule,
  ],
  providers: [
    ToastService,
    MatNativeDateModule,
    MatDatepickerModule,
    DatePipe,
  ],
})
export class HomeModule { }
