import { relative as urlRelative } from './url-relative';

function link(absolutePath, Astro) {
  let requestURL = Astro.request.url;
  let url = new URL(absolutePath, requestURL);
  console.log("WHAT", urlRelative)
  let relPath = urlRelative(requestURL, url);
  return relPath;
}

const createLink = a => link.bind(null, a);

export const GettingStarted = createLink('/getting-started/');
export const Docs = createLink('/docs/');