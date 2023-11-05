function classNames(baseClass: string, add?: Array<string> | string): string {
  const res = [];
  res.push(baseClass);
  if (Array.isArray(add)) {
    res.push(...add);
  } else if (add) {
    res.push(add);
  }
  return res.join(' ');
}

export default classNames;
