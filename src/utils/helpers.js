export function isValidName(name) {
  console.log(/^\s*$/.test(name));
  return /^\s*$/.test(name);
}

export function numberFormat(number) {
  return new Intl.NumberFormat("en-GB").format(number);
}
