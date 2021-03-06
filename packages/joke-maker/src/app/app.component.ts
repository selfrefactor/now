import {Component, OnInit, OnDestroy} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {interval, Observable, Subscriber} from 'rxjs'
import {delay, random} from 'rambdax'
import {takeArguments} from 'string-fn'
import {startWith, concatAll, map} from 'rxjs/operators'
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'

const URL = 'https://toteff.eu.ngrok.io/lambdas/random-bulgarian-word'
const KEY = 'joke.maker.password'

const debugMode = false
const debugWord = '1234567890azsxdcfa'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 0,
        })
      ),
      state(
        'closed',
        style({
          opacity: 1,
        })
      ),
      transition('open => closed', [animate('1.4s')]),
      transition('closed => open', [animate('1.4s')]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  interval = 12
  loading = false
  merged$: Observable<string[]>
  password = localStorage.getItem(KEY)
  words: string[] = Array(6).fill(debugMode ? debugWord : '')
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkPassword()
    this.checkInterval()
    if (debugMode) return
    const response$: Observable<any> = this.http.post(URL, {
      password: this.password,
    })
    const interval$ = interval(this.interval * 1000).pipe(startWith(0))

    this.merged$ = interval$.pipe(
      map(
        () =>
          new Observable((observer: Subscriber<string[]>) => {
            this.loading = true
            delay(600).then(() => {
              response$.subscribe(response => {
                this.loading = false
                observer.next(response)
                observer.complete()
              })
            })
          })
      ),
      concatAll()
    )

    this.merged$.subscribe(words => {
      this.words = words
    })
  }
  checkInterval() {
    const {play} = takeArguments(window.location.search)
    if (play) this.interval = play
  }
  checkPassword() {
    if (!this.password) {
      const password = window.prompt(
        'Why many, when same less words. Password?'
      )
      if(password){
        console.log(`password`, password )
        localStorage.setItem(KEY, password)
        this.password = password
      }
    }
  }
  firstClick(){
    (window as any).DD_RUM.addError(new Error(`FIRST_ERROR_${random(1, 999)}`), {[`FE_${random(1, 999)}`]: `DEO_${random(1, 999)}`},'source');
    (window as any).DD_RUM.addError(new Error(`FIRST_ERROR2_${random(1, 999)}`), undefined, `source`);
  }
  secondClick(){
    (window as any).DD_RUM.addAction(`PROPERTY_${random(1, 999)}`, {
      [`MESSAGE_${random(0,4)}`]: `MESSAGE_${random(1, 999)}`
    });
  }
  thirdClick(){
    throw new Error(`foo-${random(1, 999)}`);
  }
}
