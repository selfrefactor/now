import {random} from 'rambdax'
import {Component, OnInit, OnChanges} from '@angular/core'
import {FromMoonService} from '../from-moon.service'

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit, OnChanges {
  name = 'foo'
  bar = 'baz'
  unsolvedPairs = ['foo', 'bar', 'baz']
  isImportant: boolean
  itsFromMoon: string
  itsFromBar: number
  myUnless: boolean
  constructor(private fromMoon: FromMoonService) {}

  ngOnInit() {
    this.isImportant = !!random(0, 1)
    this.itsFromMoon = this.fromMoon.get('will do more')
  }
  ngOnChanges() {
    // console.log(a)
  }
  fooMethod() {
    console.log('fooMethod')
  }
  onSpecialKeyPress() {
    console.log('onSpecialKeyPress')
  }

  receiveFromBar(x) {
    this.itsFromBar = x
  }
}
