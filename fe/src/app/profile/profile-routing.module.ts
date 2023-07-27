import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {paths} from "./profile.navigation";
import {MainComponent} from "./components/main/main.component";
import {YourMusicComponent} from "./components/your-music/your-music.component";

const routes: Routes = [
  {
    path: paths.main,
    component: MainComponent,
  },
  {
    path: paths.yourMusic,
    component: YourMusicComponent,
  },
  {
    path: '',
    redirectTo: paths.main,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
