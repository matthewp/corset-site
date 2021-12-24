
export const project = 'Corset';

const CDNURL = version => `https://cdn.corset.dev/${version}/dsl.js`;

export const version = '0.1.4';
export const cdnURL = CDNURL(version);
export const npmPkg = 'corset';