import {
  Component,
  Element,
  Event,
  Prop,
  EventEmitter,
  Watch,
  h
} from '@stencil/core';

@Component({
  tag: 'bubble-input',
  styleUrl: 'bubble-input.scss',
  shadow: false
})
export class BubbleInput {
  @Element() el: HTMLElement;
  @Prop() placeholder: string = 'Message';
  @Prop({ mutable: true }) value: string;
  @Event() valueChange: EventEmitter;
  @Event() valueSubmit: EventEmitter;

  // propagate value change from model to view
  @Watch('value')
  valueChanged() {
    const inputEl = this.el.querySelector('input');
    // only update if model and view differ
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  // propagate value change from view to model
  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    this.value = val;
    this.valueChange.emit(this.value);
  }

  inputSubmitted(ev: any) {
    if (ev.which == 13) {
      this.valueSubmit.emit(this.value);
    }
  }

  render() {
    return (
      <div class="flex rounded-lg border-2 border-grey overflow-hidden">
        <span class="text-3xl text-grey border-r-2 border-grey p-2">
          <svg
            class="fill-current h-6 w-6 block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" />
          </svg>
        </span>
        <input
          type="text"
          class="w-full px-4"
          placeholder={this.placeholder}
          value={this.value}
          onInput={this.inputChanged.bind(this)}
          onKeyDown={this.inputSubmitted.bind(this)}
        />
      </div>
    );
  }
}
