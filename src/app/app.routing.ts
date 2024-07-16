import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const appRoutes = [ { path: "", component: HomeComponent }];

export const routing = RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' });
