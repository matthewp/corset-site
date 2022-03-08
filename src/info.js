import { createRequire } from 'module';
const _require = createRequire(import.meta.url);

export const project = 'Corset';
export const year = new Date().getFullYear();

const CDNURL = major => `https://cdn.corset.dev/${major}`;
const CDNURL_EXACT = version => `https://cdn.corset.dev/${version}/main.js`;
const CDNWASMURL = version => `https://cdn.corset.dev/${version}/main.wasm`;

export const major = 'v1';
export const version = '1.0.0';
export const cdnURL = CDNURL(major);
export const cdnURLExact = CDNURL_EXACT(version);
export const cdnWasmURL = CDNWASMURL(version);
export const npmPkg = 'corset';

// Generator
const astroPkg = _require('astro/package.json');
export const generator = `Astro ${astroPkg.version}`;