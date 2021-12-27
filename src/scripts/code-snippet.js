import sheet from './corset.js';

function copyToClipboard(code) {
  navigator.clipboard.writeText(code)
}

sheet`
.code-snippet {
  --code: data(code);
}

.code-snippet-copy {
  --copy-cb: bind(${copyToClipboard}, var(--code));
  event: click var(--copy-cb);
}
`.update(document.body);