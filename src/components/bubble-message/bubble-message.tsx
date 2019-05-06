import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'bubble-message',
  styleUrl: 'bubble-message.scss',
  shadow: false
})
export class BubbleMessage {
  @Prop() user: string;
  @Prop() message: string;

  @State() time: string;
  timer: any;
  startDate;

  getTimeAgo(value: string) {
    this.removeTimer();
    const d = new Date(value);
    const now = new Date();
    const seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    const timeToUpdate = Number.isNaN(seconds)
      ? 1000
      : this.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = setTimeout(() => {
      this.time = this.getTimeAgo(this.startDate);
    }, timeToUpdate);
    const minutes = Math.round(Math.abs(seconds / 60));
    const hours = Math.round(Math.abs(minutes / 60));
    const days = Math.round(Math.abs(hours / 24));
    const months = Math.round(Math.abs(days / 30.416));
    const years = Math.round(Math.abs(days / 365));
    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return 'a few seconds ago';
    } else if (seconds <= 90) {
      return 'a minute ago';
    } else if (minutes <= 45) {
      return minutes + ' minutes ago';
    } else if (minutes <= 90) {
      return 'an hour ago';
    } else if (hours <= 22) {
      return hours + ' hours ago';
    } else if (hours <= 36) {
      return 'a day ago';
    } else if (days <= 25) {
      return days + ' days ago';
    } else if (days <= 45) {
      return 'a month ago';
    } else if (days <= 345) {
      return months + ' months ago';
    } else if (days <= 545) {
      return 'a year ago';
    } else {
      // (days > 545)
      return years + ' years ago';
    }
  }

  removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  getSecondsUntilUpdate(seconds: number) {
    const min = 60;
    const hr = min * 60;
    const day = hr * 24;
    if (seconds < min) {
      // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) {
      // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) {
      // less then a day, update every 5 mins
      return 300;
    } else {
      // update every hour
      return 3600;
    }
  }

  componentDidLoad() {
    this.time = this.getTimeAgo(this.startDate);
  }

  componentWillLoad() {
    this.startDate = Date.now();
  }

  render() {
    return (
      <div class="flex items-start mb-4 text-sm">
        <img
          src={`https://ui-avatars.com/api/?name=${this.user}&size=40`}
          class="w-10 h-10 rounded mr-3"
        />
        <div class="flex-1 overflow-hidden">
          <div>
            <span class="font-bold">{this.user}</span>
            <span class="text-grey text-xs"> {this.time}</span>
          </div>
          <p class="text-black leading-normal">{this.message}</p>
          <div class="hidden bg-grey-lighter border border-grey-light text-grey-darkest text-sm font-mono rounded p-3 mt-2 whitespace-pre overflow-scroll">
            .marquee-lightspeed {'{'} -webkit-marquee-speed: fast; {'}'}
            .marquee-lightspeeder {'{'} -webkit-marquee-speed: faster; {'}'}
          </div>
        </div>
      </div>
    );
  }
}
