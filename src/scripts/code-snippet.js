import sheet, { mount } from './corset.js';

class CodeSnippet {
  get hidden() {
    return this.stores?.get('app')?.get('hidden') ?? true;
  }

  constructor(_props, { rebind, stores }) {
    this.rebind = rebind;
    this.stores = stores;
  }

  copyToClipboard() {
    let code = this.stores.get('app')?.get('code');
    navigator.clipboard.writeText(code);
    this.stores.get('app').set('hidden', false);
  }

  transitionEnd() {
    setTimeout(() => {
      this.stores.get('app').set('hidden', true);
    }, 500);
  }

  bind() {
    return sheet`
      .code-snippet {
        store-root: app;
        store-set: app code data(code);
      }

      .code-snippet-copy {
        event: click ${this.copyToClipboard};
      }

      .code-snippet-copied-notification {
        event: transitionend ${this.transitionEnd};
        attr: aria-hidden ${this.hidden};
      }
    `;
  }
}

customElements.define('code-snippet', class extends HTMLElement {
  connectedCallback() {
    mount(this, CodeSnippet);
  }
});