import { Routes } from '@angular/router';
import {Authentification} from "../auth/auth-page/authentification";
import {ChatComponent} from "./chat/chat/chat.component";

export const routes: Routes = [
    {
        path: '',
        component: Authentification,
        pathMatch: 'full',
    },
    {
        path: 'lumia',
        component: ChatComponent,
    },
];
