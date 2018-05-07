/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface BubbleChat {
      'first': string;
      'last': string;
    }
  }

  interface HTMLBubbleChatElement extends StencilComponents.BubbleChat, HTMLStencilElement {}

  var HTMLBubbleChatElement: {
    prototype: HTMLBubbleChatElement;
    new (): HTMLBubbleChatElement;
  };
  interface HTMLElementTagNameMap {
    'bubble-chat': HTMLBubbleChatElement;
  }
  interface ElementTagNameMap {
    'bubble-chat': HTMLBubbleChatElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bubble-chat': JSXElements.BubbleChatAttributes;
    }
  }
  namespace JSXElements {
    export interface BubbleChatAttributes extends HTMLAttributes {
      'first'?: string;
      'last'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
