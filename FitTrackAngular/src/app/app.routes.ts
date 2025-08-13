import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { ParticipantComponent } from './participant/participant.component';
import { TrainerComponent } from './trainer/trainer.component';
import { SubscriptionComponent } from './participant/subscription/subscription.component';

export const routes: Routes = [
    {path: '', component:LoginComponent, pathMatch:"full"},
    {path: 'register', component:RegisterComponent},
    {path: 'admin',component:AdminComponent},
    {path: 'participant',component:ParticipantComponent},
    {path: 'trainer', component:TrainerComponent},
    {path: 'subscription',component:SubscriptionComponent}
    ];
