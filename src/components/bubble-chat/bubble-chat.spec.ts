import { TestWindow } from '@stencil/core/testing';
import { BubbleChat } from './bubble-chat';

describe('bubble-chat', () => {
  let window: TestWindow;

  it('should build', () => {
    expect(new BubbleChat()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BubbleChat],
        html: '<bubble-chat></bubble-chat>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a first name', async () => {
      element.first = 'Peter';
      await window.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    it('should work with a last name', async () => {
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    });

    it('should work with both a first and a last name', async () => {
      element.first = 'Peter'
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    });
  });
});