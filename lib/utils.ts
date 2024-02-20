export const prefixWith = (prefix: string) => (name: string) =>
  `${prefix}-${name}`;

export const prefixResource = prefixWith('aws-streamlit')


