// Angular
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Translate
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

// Local
import { Router } from '@angular/router';
import { ToastService } from '../../../utils/toast.service';

// Loader
import { NgxUiLoaderService } from 'ngx-ui-loader';

// Constants
import { Constants } from '../../../utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Reactive form
  // @ts-ignore
  loginForm: FormGroup;
  useLang: string | null = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private loader: NgxUiLoaderService,
    private router: Router,
    private toast: ToastService,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang(translate.getDefaultLang());
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.setDefaultLang(event.lang);
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.useLang = localStorage.getItem('lang');
    if (this.useLang != null) {
      this.translate.use(this.useLang);
    }
  }

  login(): void {
    this.loader.start();
    if (this.loginForm.controls.email.value === Constants.USER_LOGIN
    && this.loginForm.controls.password.value === Constants.PASSWORD_LOGIN) {
      this.router.navigate(['/home/home/main']);
    } else {
      this.toast.showToast(Constants.TOAST_TYPE_ERROR, this.translate.instant('MESSAGES.INVALID_CREDENTIALS'));
      this.loader.stop();
    }
  }

  changeLang(lang: any): void {
    this.translate.use(lang);
    localStorage.removeItem('lang');
    localStorage.setItem('lang', lang);
  }
}
