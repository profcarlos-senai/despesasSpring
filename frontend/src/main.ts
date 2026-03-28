import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers ?? []), // mantém outros providers
    provideHttpClient(withFetch()), // habilita HttpClient com Fetch API
  ],
}).catch((err) => console.error(err));
