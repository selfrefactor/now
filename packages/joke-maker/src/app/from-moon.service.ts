import {Injectable} from '@angular/core'
import {random} from 'rambdax'

@Injectable({
  providedIn: 'root',
})
export class FromMoonService {
  constructor() {}

  get(word: string) {
    return word.length + ' - ' + random(1, 10)
  }
}
