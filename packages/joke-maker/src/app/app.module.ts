import {HttpClientModule} from '@angular/common/http'
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppComponent} from './app.component'
import {CellComponent, GridComponent, SubGridComponent} from 'grid-fn'

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    SubGridComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
