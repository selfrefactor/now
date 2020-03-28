import { Component, OnInit } from '@angular/core'
import { interval, Observable } from 'rxjs'
import { mergeMap, startWith, switchMap } from 'rxjs/operators'
import { FetchWordsService } from '../fetch-words.service'

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})

export class WordsComponent implements OnInit {
  words = []
  fetchWords$: Observable<string>
  constructor(private fetchWords: FetchWordsService) { }

  ngOnInit() {
    this.fetchWords$ = Observable.create(function(observer) {
      this.fetchWords.simple().subscribe(words => {
        observer.next(words)
        observer.complete()
      })
    })
    // this.afterInit()
    this.afterInitx()
  }

  afterInitx() {
    const interval$ = interval(3000)
    const sk$ = () => new Observable<string[]>(observer => {
      this.fetchWords.simple().subscribe(words => {
        observer.next(words)
        observer.complete()
      })
    })

    const result = interval$.pipe(startWith(1),mergeMap(sk$))
    result.subscribe(words => this.words = words)
  }

  afterInit(){
    const interval$ = interval(6000)
    const united$ = interval$.pipe(
      startWith(1),
      switchMap(() => new Observable(observer => {
        this.fetchWords.simple().subscribe(words => {
          observer.next(words)
          observer.complete()
        })
      })),
    )

    united$.subscribe((words: string[]) => {
      this.words = words
    })
  }
}
