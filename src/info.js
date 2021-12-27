
export const project = 'Corset';

const CDNURL = version => `https://cdn.corset.dev/${version}/main.js`;
const CDNWASMURL = version => `https://cdn.corset.dev/${version}/main.wasm`;

export const version = '0.2.1';
export const cdnURL = CDNURL(version);
export const cdnWasmURL = CDNWASMURL(version);
export const npmPkg = 'corset';