import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Translate
import { TranslateService } from '@ngx-translate/core';

// @ts-ignore
import defaultAvatar from '../../../assets/img/default-logo.png';
import { ToastService } from '../../utils/toast.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  useLang = 'es';

  constructor(
    private router: Router,
    private translate: TranslateService,
    private toastService: ToastService,
  ) {
    this.useLang = 'es';
    this.translate.setDefaultLang(translate.getDefaultLang());
  }

  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (lang != null) {
      this.useLang = lang;
      this.translate.use(this.useLang);
    }
  }

  logout(): void {
    this.router.navigate(['/auth/login']);
  }

  changeLang(lang: any): void {
    this.translate.use(lang);
    this.useLang = lang;
    localStorage.removeItem('lang');
    localStorage.setItem('lang', lang);
  }

}
