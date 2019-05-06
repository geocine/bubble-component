import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'bubble-user',
  styleUrl: 'bubble-user.scss',
  shadow: false
})
export class BubbleUser {
  @Prop() user: string;
  @Prop() online: boolean;
  @Prop() id: string;

  render() {
    let circle;
    if (this.online) {
      circle = (
        <svg class="h-2 w-2 fill-current text-green mr-2" viewBox="0 0 20 20">
          <circle cx={10} cy={10} r={10} />
        </svg>
      );
    } else {
      circle = (
        <svg
          class="h-2 w-2 stroke-current text-white mr-2 opacity-50"
          viewBox="0 0 22 22"
        >
          <circle cx={11} cy={11} r={9} fill="none" strokeWidth={3} />
        </svg>
      );
    }
    return (
      <div class="flex items-center mb-3 px-4">
        {circle}
        <span class={'text-white ' + (this.online ? '' : 'opacity-75')}>
          {this.user}
        </span>
      </div>
    );
  }
}
