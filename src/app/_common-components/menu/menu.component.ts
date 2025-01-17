import { Component } from '@angular/core';
import logoPath from '../../../assets/img/sormas-logo.svg';

export interface RouteItem {
  link: string;
  label: string;
}

export const routesConfig: RouteItem[] = [
  { link: '', label: $localize`Dashboard` },
  { link: 'about', label: $localize`About` },
  { link: 'tasks/list', label: $localize`Tasks` },
  { link: 'cases/list', label: $localize`Cases` },
  { link: 'user-profile', label: $localize`My profile` },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  routeConfig: RouteItem[] = routesConfig;
  logo = logoPath;
}
