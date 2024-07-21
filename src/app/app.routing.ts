import { RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ComputingComponent } from './pages/computing/computing.component';
import { ComputerComponent } from './pages/computer/computer.component';
import { MethodsComponent } from './pages/methods/methods.component';
import { HotbedComponent } from './pages/hotbed/hotbed.component';

//Paginas Informatica
import { IntroductionCourseComponent } from './classes/computer/introduction-course/introduction-course.component';
import { IntroductionPythonComponent } from './classes/computer/introduction-python/introduction-python.component';
import { OperatorsVariablesComponent } from './classes/computer/operators-variables/operators-variables.component';

//Paginas Computacion
import { IntroductionCourseComputingComponent } from './classes/computing/introduction-course-computing/introduction-course-computing.component';

const appRoutes = [ { path: "", component: HomeComponent },
  { path: "inicio", component: HomeComponent },
  {path: "computacion-numerica", component: ComputingComponent},
  {path: "informatica", component: ComputerComponent},
  {path: "metodos-numericos", component: MethodsComponent},
  {path: "semillero-electron", component: HotbedComponent},
  //Paginas Informatica
  {path: "informatica/00-introduccion-curso", component: IntroductionCourseComponent},
  {path: "informatica/01-introduccion-python", component: IntroductionPythonComponent},
  {path: "informatica/01-operadores-variables", component: OperatorsVariablesComponent},
  //Paginas Computacion
  {path: "computacion-numerica/00-introduccion-curso", component: IntroductionCourseComputingComponent},
];

export const routing = RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' });
