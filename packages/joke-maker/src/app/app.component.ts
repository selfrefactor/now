import { range } from 'rambdax'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'joke-maker'
  words: string[] = range(0,6).map(String)
  ngOnInit(){
    console.log(this.words)
  }
}
