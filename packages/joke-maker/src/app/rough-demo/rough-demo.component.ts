import roughjs from 'roughjs/bin/rough'
import 'wired-elements'
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core'
import { foo }from '../helpers/foo'

@Component({
  selector: 'app-rough-demo',
  templateUrl: './rough-demo.component.html',
  styleUrls: ['./rough-demo.component.scss'],
})
export class RoughDemoComponent implements OnInit {
  items: string[]
  constructor() {}

  ngOnInit(): void {
    this.items = ['a', 'b', 'c']
  }

  trackByFn(x, i) {
    // console.log({x,i})
  }
  name = 'Angular'
  @ViewChild('roughEl', {static: false}) roughEl: ElementRef

  ngAfterViewInit() {
    const rc = roughjs.canvas(this.roughEl.nativeElement)
    rc.rectangle(10, 10, 200, 200)
    foo(2)
  }
  static foo(x){
    console.log(x+1)
  }
}
