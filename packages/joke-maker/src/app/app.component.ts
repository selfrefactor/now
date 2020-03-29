import {Component, OnInit, OnDestroy} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { interval, Observable } from 'rxjs'
import { startWith, concatAll, map } from 'rxjs/operators';
const URL = 'https://toteff.eu.ngrok.io/lambdas/random-bulgarian-word'
const KEY = 'joke.maker.password'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'joke-maker'
  interval = 12
  merged$: Observable<string[]>
  password = localStorage.getItem(KEY)
  words: string[] = Array(6).fill('')
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.checkPassword()
    const response$: Observable<any> = this.http.post(URL, {password: this.password})
    const interval$ = interval(this.interval * 1000).pipe(startWith(0));
    this.merged$ = interval$.pipe(
      map(() => response$),
      concatAll()
    )

    this.merged$.subscribe(words => {
      this.words = words
    })
  }
  checkPassword() {
    if (!this.password) {
      const password = window.prompt(
        'Why many, when can less words. Password?'
      )
      localStorage.setItem(KEY, password)
      this.password = password
    }
  }
}
