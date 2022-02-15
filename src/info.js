import { createRequire } from 'module';
const _require = createRequire(import.meta.url);

export const project = 'Corset';
export const year = new Date().getFullYear();

const CDNURL = version => `https://cdn.corset.dev/${version}/main.js`;
const CDNWASMURL = version => `https://cdn.corset.dev/${version}/main.wasm`;

export const version = '0.5.0';
export const cdnURL = CDNURL(version);
export const cdnWasmURL = CDNWASMURL(version);
export const npmPkg = 'corset';

// Generator
const astroPkg = _require('astro/package.json');
export const generator = `Astro ${astroPkg.version}`;