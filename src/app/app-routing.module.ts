import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMembersComponent } from './components/family-members/family-members.component';
import { PatientComponent } from './components/patient/patient.component';
import { ShowMembersComponent } from './components/show-members/show-members.component';
import { ShowpatientComponent } from './components/showpatient/showpatient.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'gardian', component: FamilyMembersComponent },
  { path: 'showPatient', component: ShowpatientComponent },
  { path: 'showMember', component: ShowMembersComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
