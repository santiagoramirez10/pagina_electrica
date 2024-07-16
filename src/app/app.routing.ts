import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ComputingComponent } from './pages/computing/computing.component';
import { ComputerComponent } from './pages/computer/computer.component';
import { MethodsComponent } from './pages/methods/methods.component';
import { HotbedComponent } from './pages/hotbed/hotbed.component';

const appRoutes = [ { path: "", component: HomeComponent },
  { path: "inicio", component: HomeComponent },
  {path: "computacion-numerica", component: ComputingComponent},
  {path: "informatica", component: ComputerComponent},
  {path: "metodos-numericos", component: MethodsComponent},
  {path: "semillero-electron", component: HotbedComponent}
];

export const routing = RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' });
