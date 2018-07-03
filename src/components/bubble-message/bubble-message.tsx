import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bubble-message',
  styleUrl: 'bubble-message.scss',
  shadow: false
})
export class BubbleMessage {

  @Prop() user: string;
  @Prop() time: string;
  @Prop() message: string;

  render() {
    return (
      <div class="flex items-start mb-4 text-sm">
        <img src={`https://ui-avatars.com/api/?name=${this.user}&size=40`} class="w-10 h-10 rounded mr-3" />
        <div class="flex-1 overflow-hidden">
          <div>
            <span class="font-bold">{this.user}</span>
            <span class="text-grey text-xs"> {this.time}</span>
          </div>
          <p class="text-black leading-normal">{this.message}</p>
          <div class="hidden bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">.marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
                  .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}</div>
        </div>
      </div>
    );
  }
}
