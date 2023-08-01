import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IRegister} from "../../interfaces/IRegister";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {BaseComponent} from "../../../_core/components/base/base.component";
import {takeUntil} from "rxjs";
import {authNav} from "../../auth.navigation";
import {appNav} from "../../../app.navigation";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent extends BaseComponent {
  hidePassword = true;
  hideRepeatPassword = true;

  appNav = appNav;
  signinForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this.signinForm = new FormGroup<IRegister>({
      username: new FormControl<string | null>(''),
      email: new FormControl<string | null>('', Validators.required),
      password: new FormControl<string | null>('',  Validators.required),
      repeat_password: new FormControl<string | null>('', Validators.required)
    })
  }

  signInAction() {
    if (this.signinForm.valid) {
      this.authService.register(this.signinForm.value).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.router.navigateByUrl(appNav.authNav.login);
      })
    }
  }
}
