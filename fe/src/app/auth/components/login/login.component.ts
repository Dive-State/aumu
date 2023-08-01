import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../models/login.model";
import {ILogin} from "../../interfaces/ILogin";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {take, takeUntil} from "rxjs";
import {BaseComponent} from "../../../_core/components/base/base.component";
import {appNav} from "../../../app.navigation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  hide = true;

  appNav = appNav;
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
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
          this.router.navigateByUrl(appNav.profileNav.main);
        })
    }
  }
}
