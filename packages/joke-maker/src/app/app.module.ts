import {APP_BASE_HREF} from '@angular/common'
import {HttpClientModule} from '@angular/common/http'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {FooComponent} from './foo/foo.component'
import {WordsComponent} from './words/words.component'
import {BarComponent} from './bar/bar.component'
import {FooPipe} from './foo.pipe'
import {RoughDemoComponent} from './rough-demo/rough-demo.component'
import {MatSliderModule} from '@angular/material/slider'

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    FooComponent,
    BarComponent,
    FooPipe,
    RoughDemoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  // providers: [],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
