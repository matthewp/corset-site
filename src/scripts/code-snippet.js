import sheet, { mount } from './corset.js';

class CodeSnippet {
  hidden = true;

  constructor(props, { wrap }) {
    this.hide = wrap(this.hide);
  }

  copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  transitionEnd() {
    setTimeout(this.hide, 500);
  }

  bind() {
    return sheet`
      .code-snippet {
        --code: data(code);
      }

      .code-snippet-copy {
        --copy-cb: bind(${this.copyToClipboard}, var(--code));
        event[click]: var(--copy-cb);
      }

      .code-snippet-copied-notification {
        event[transitionend]: ${this.transitionEnd};
        attr[aria-hidden]: ${this.hidden};
      }
    `;
  }
}

customElements.define('code-snippet', class extends HTMLElement {
  connectedCallback() {
    mount(this, CodeSnippet);
  }
});