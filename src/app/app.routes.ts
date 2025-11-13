import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { SignIn } from './pages/sign-in/sign-in';
import { Register } from './pages/register/register';
import { PanelPersonal } from './pages/panel-personal/panel-personal';
import { Alojamienmto } from './pages/alojamienmto/alojamienmto';
import { Resultados } from './pages/resultados/resultados';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'login', component: SignIn },
	{ path: 'register', component: Register },
	{ path: 'panel', component: PanelPersonal },
	{ path: 'alojamiento', component: Alojamienmto },
	{ path: 'resultados', component: Resultados },
	// add more routes as needed
];
