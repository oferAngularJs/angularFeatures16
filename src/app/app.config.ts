import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {AddingVegetableModalComponent} from './views/adding-vegetable-modal/adding-vegetable-modal.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideHttpClient() ,
              importProvidersFrom(FormsModule),
              provideRouter(routes),
              AddingVegetableModalComponent
  ]
};
