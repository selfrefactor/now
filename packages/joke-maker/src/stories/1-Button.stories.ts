import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import {moduleMetadata} from '@storybook/angular'
import {RoughDemoComponent} from '../app/rough-demo/rough-demo.component'
import {AppModule} from '../app/app.module'
import {RouterModule} from '@angular/router'

export default {
  title: 'Task',
  // component: RoughDemoComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AppModule,
        RouterModule.forRoot([{ path: 'iframe.html', component: RoughDemoComponent }]),
      ],
    }),
  ],
}

export const Text = () => ({
  component: RoughDemoComponent,
  props: {
    text: 'Hello Bautton',
  },
})

/*
  export const Emoji = () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  })
  
  Emoji.story = {
    parameters: {notes: 'My notes on a button with emojis'},
  }
  
  export const WithSomeEmojiAndAction = () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
      onClick: action('This was clicked OMG'),
    },
  })
  
  WithSomeEmojiAndAction.story = {
    name: 'with some emoji and action',
    parameters: {notes: 'My notes on a button with emojis'},
  }
  
  export const ButtonWithLinkToAnotherStory = () => ({
    component: Button,
    props: {
      text: 'Go to Welcome Story',
      onClick: linkTo('Welcome'),
    },
  })
  
  ButtonWithLinkToAnotherStory.story = {
    name: 'button with link to another story',
  }
  
*/