import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILogin} from "../../interfaces/ILogin";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {takeUntil} from "rxjs";
import {BaseComponent} from "../../../_core/components/base/base.component";
import {appNav} from "../../../app.navigation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection:ChangeDetectionStrategy.Default,
})
export class LoginComponent extends BaseComponent implements OnInit {
  hide = true;

  appNav = appNav;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdf: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = new FormGroup<ILogin>({
      email: new FormControl<string>('', Validators.required),
      password: new FormControl<string>('',  Validators.required)
    })
  }

  loginAction() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
        .pipe(takeUntil(this.destroy$))
        .subscribe((result) => {
            const todo = result;
            this.cdf.markForCheck();
            this.cdf.detectChanges();
          // this.router.navigateByUrl(appNav.profileNav.main);
        })
    }
  }
}
