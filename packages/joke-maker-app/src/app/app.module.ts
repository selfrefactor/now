import {HttpClientModule} from '@angular/common/http'
import {NgModule} from '@angular/core'
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
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
