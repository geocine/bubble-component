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


declare global {

  namespace StencilComponents {
    interface BubbleInput {
      'placeholder': string;
    }
  }

  interface HTMLBubbleInputElement extends StencilComponents.BubbleInput, HTMLStencilElement {}

  var HTMLBubbleInputElement: {
    prototype: HTMLBubbleInputElement;
    new (): HTMLBubbleInputElement;
  };
  interface HTMLElementTagNameMap {
    'bubble-input': HTMLBubbleInputElement;
  }
  interface ElementTagNameMap {
    'bubble-input': HTMLBubbleInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bubble-input': JSXElements.BubbleInputAttributes;
    }
  }
  namespace JSXElements {
    export interface BubbleInputAttributes extends HTMLAttributes {
      'placeholder'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BubbleMessage {
      'message': string;
      'time': string;
      'user': string;
    }
  }

  interface HTMLBubbleMessageElement extends StencilComponents.BubbleMessage, HTMLStencilElement {}

  var HTMLBubbleMessageElement: {
    prototype: HTMLBubbleMessageElement;
    new (): HTMLBubbleMessageElement;
  };
  interface HTMLElementTagNameMap {
    'bubble-message': HTMLBubbleMessageElement;
  }
  interface ElementTagNameMap {
    'bubble-message': HTMLBubbleMessageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bubble-message': JSXElements.BubbleMessageAttributes;
    }
  }
  namespace JSXElements {
    export interface BubbleMessageAttributes extends HTMLAttributes {
      'message'?: string;
      'time'?: string;
      'user'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface BubbleUser {
      'online': boolean;
      'user': string;
    }
  }

  interface HTMLBubbleUserElement extends StencilComponents.BubbleUser, HTMLStencilElement {}

  var HTMLBubbleUserElement: {
    prototype: HTMLBubbleUserElement;
    new (): HTMLBubbleUserElement;
  };
  interface HTMLElementTagNameMap {
    'bubble-user': HTMLBubbleUserElement;
  }
  interface ElementTagNameMap {
    'bubble-user': HTMLBubbleUserElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bubble-user': JSXElements.BubbleUserAttributes;
    }
  }
  namespace JSXElements {
    export interface BubbleUserAttributes extends HTMLAttributes {
      'online'?: boolean;
      'user'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
