import sheet, { mount } from './corset.js';

function CodeSnippet(state) {
  const { hidden = true } = state;

  function copyToClipboard(code) {
    navigator.clipboard.writeText(code);
    state.hidden = false;
  }

  function transitionEnd() {
    setTimeout(() => { state.hidden = true; }, 500);
  }

  return sheet`
    .code-snippet {
      --code: data(code);
    }

    .code-snippet-copy {
      --copy-cb: bind(${copyToClipboard}, var(--code));
      event: click var(--copy-cb);
    }

    .code-snippet-copied-notification {
      event: transitionend ${transitionEnd};
      attr: "aria-hidden" ${hidden};
    }
  `;
}

customElements.define('code-snippet', class extends HTMLElement {
  connectedCallback() {
    mount(this, CodeSnippet);
  }
});