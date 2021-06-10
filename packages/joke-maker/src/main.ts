import {enableProdMode} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app/app.module'
import {environment} from './environments/environment'
import '@datadog/browser-rum/bundle/datadog-rum'


(window as any).DD_RUM.init({
  applicationId: '6078e663-ceb5-4592-b56c-9a822d115354',
  clientToken: 'pubaca657a4150d2be0e7baf914e5836830',
  site: 'datadoghq.eu',
  service:'foo',
  version: '1.0.0',
  forwardErrorsToLogs: true,
  env:'dev',
  sampleRate: 100,
  trackInteractions: true
});
if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
