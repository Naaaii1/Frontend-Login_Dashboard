import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path:"login",
    loadChildren:() => import("./modules/login/login.module").then(m=>m.LoginModule)
  },
  {
    path:"dashboard",
    loadChildren:() => import("./modules/dash-board/dash-board.module").then(m=>m.DashBoardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
