
export const project = 'Corset';

const CDNURL = version => `https://cdn.corset.dev/${version}/main.js`;

export const version = '0.2.0';
export const cdnURL = CDNURL(version);
export const npmPkg = 'corset';