import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core'
import {interval, Observable} from 'rxjs'
import {take, publish, refCount, startWith} from 'rxjs/operators'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit, OnDestroy {
  @Input() sk: string
  @Output() sdEmitter = new EventEmitter<number>()

  obs$: Observable<number>
  constructor() {}

  ngOnInit(): void {
    this.obs$ = interval(1500).pipe(startWith(1), take(10))
    this.obs$.subscribe(x => {
      this.sdEmitter.emit(x)
    })
  }
  ngOnDestroy(): void {
    console.log('destroyed')
    // this.obs$.unsubscribe()
  }
}
