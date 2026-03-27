import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // ← Importar as rotas daqui

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),           // habilita o router
    provideHttpClient(withFetch())  // habilita HttpClient com fetch
  ]
}).catch(err => console.error(err));
