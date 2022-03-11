import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { PlanStockageComponent } from './Stockage/plan-stockage/plan-stockage.component';
import { ConfigService } from './Services/config-service.service';
import { SaisirCargoDataComponent } from './Stockage/saisir-cargo-data/saisir-cargo-data.component';
import { SaisirPlanStockageComponent } from './Stockage/saisir-plan-stockage/saisir-plan-stockage.component';
import { PlanificationNavireComponent } from './Stockage/planification-navire/planification-navire.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { PlanStockageListComponent } from './Stockage/plan-stockage-list/plan-stockage-list.component';
import { ShiftManagementComponent } from './Annexes/Shift/shift-management/shift-management.component';
import { DechargementListComponent } from './Dechargement/dechargement-list/dechargement-list.component';
import { DebutDechargementComponent } from './Dechargement/debut-dechargement/debut-dechargement.component';
import { CommencerDechargementComponent } from './Dechargement/commencer-dechargement/commencer-dechargement.component';
import { CargoEvenementComponent } from './Dechargement/cargo-evenement/cargo-evenement.component';
import { FinDechargementComponent } from './Dechargement/fin-dechargement/fin-dechargement.component';
import { CargoArretComponent } from './Dechargement/cargo-arret/cargo-arret.component';
import { ValidationDechargementComponent } from './Dechargement/validation-dechargement/validation-dechargement.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { DechargementVerificationComponent } from './Dechargement/dechargement-verification/dechargement-verification.component';
import { QuantitesTransfereesComponent } from './Transfert/quantites-transferees/quantites-transferees.component';
import { SaisieNiveauxSilosComponent } from './Transfert/saisie-niveaux-silos/saisie-niveaux-silos.component';
import { SuiviQuantitesTransfereesComponent } from './Transfert/suivi-quantites-transferees/suivi-quantites-transferees.component';
import { ProgrammeHebdomadaireComponent } from './Transfert/programme-hebdomadaire/programme-hebdomadaire.component';
import { DateFormatPipePipe } from './pipes/date-format-pipe.pipe';

const appRoutes: Routes = [
  { path: '**', redirectTo: 'dashboard/acceuil' },
  { 
    path: 'plan-stockage',
    component: PlanStockageComponent,
  },
  { 
    path: 'plan-stockage-list',
    component: PlanStockageListComponent,
  },
  { 
    path: 'annexe-shift',
    component: ShiftManagementComponent,
  },
  { 
    path: 'decharement-list',
    component: DechargementListComponent,
  },
  { 
    path: 'transfert-quantite',
    component: QuantitesTransfereesComponent,
  },
  {
    path: 'saisie-niveaux-silos',
    component: SaisieNiveauxSilosComponent,
  },
  {
    path: 'suivi-transfert-quantite',
    component: SuiviQuantitesTransfereesComponent,
  },
  {
    path: 'programme-hebdomadaire',
    component: ProgrammeHebdomadaireComponent,
  }
  
];

export const configFactory = (configService: ConfigService) => {
  return () => configService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    PlanStockageComponent,
    SaisirCargoDataComponent,
    SaisirPlanStockageComponent,
    PlanificationNavireComponent,
    PlanStockageListComponent,
    ShiftManagementComponent,
    DechargementListComponent,
    DebutDechargementComponent,
    CommencerDechargementComponent,
    CargoEvenementComponent,
    FinDechargementComponent,
    CargoArretComponent,
    ValidationDechargementComponent,
    DechargementVerificationComponent,
    QuantitesTransfereesComponent,
    SaisieNiveauxSilosComponent,
    SuiviQuantitesTransfereesComponent,
    ProgrammeHebdomadaireComponent,
    DateFormatPipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    MatTableModule,
    FontAwesomeModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTooltipModule,
    MatStepperModule,
    MatExpansionModule,
    GuiGridModule,
    MaterialFileInputModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [ConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
