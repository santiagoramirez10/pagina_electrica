import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ComputingComponent } from './pages/computing/computing.component';
import { MethodsComponent } from './pages/methods/methods.component';
import { HotbedComponent } from './pages/hotbed/hotbed.component';
import { ComputerComponent } from './pages/computer/computer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ComputingComponent,
    MethodsComponent,
    HotbedComponent,
    ComputerComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
