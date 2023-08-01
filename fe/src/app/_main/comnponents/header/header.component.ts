import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {appNav} from "../../../app.navigation";
import {BaseComponent} from "../../../_core/components/base/base.component";
import {takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  extends BaseComponent {
  appNav = appNav;
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {
    super()
  }

  logoutAction(): void {
    this.authService.logout().pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.router.navigateByUrl(appNav.authNav.login);
    })
  }
}
