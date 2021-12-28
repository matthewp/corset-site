import sheet, { mount } from './corset.js';

function CodeSnippet(code, state) {
  const { hidden = true } = state;

  function copyToClipboard() {
    navigator.clipboard.writeText(code);
    state.hidden = false;

    setTimeout(() => { state.hidden = true; }, 1000);
  }

  return sheet`
    .code-snippet-copy {
      --copy-cb: ${copyToClipboard};
      event: click var(--copy-cb);
    }

    .code-snippet-copied-notification {
      attr: "aria-hidden" ${hidden};
    }
  `;
}

for(const el of document.querySelectorAll('.code-snippet')) {
  mount(el, CodeSnippet.bind(null, el.dataset.code));
}