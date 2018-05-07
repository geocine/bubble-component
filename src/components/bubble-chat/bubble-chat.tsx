import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bubble-chat',
  styleUrl: 'bubble-chat.scss',
  shadow: true
})
export class BubbleChat {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
