import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// DevExtreme
import { DxMenuModule } from 'devextreme-angular';
import { StartComponent } from './MainContentArea/start/start.component';
import { CameraComponent } from './MainContentArea/camera/camera.component';
import { PositionComponent } from './MainContentArea/position/position.component';

const appRoutes: Routes = [
  { path: 'start', component: StartComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'position', component: PositionComponent },
  { path: '**', component: StartComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent,
    CameraComponent,
    PositionComponent
  ],
  imports: [
    BrowserModule,
    DxMenuModule,
    RouterModule.forRoot(
      appRoutes,
//      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
