import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  // {path: '', component: RoughDemoComponent},
  // {path: 'words', component: WordsComponent},
  // {path: 'foo', component: FooComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
