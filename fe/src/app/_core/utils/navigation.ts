export  function createNav<T>(root: string, paths: Object): {  [Property in keyof T]: string }  {
  const result:{ [key in keyof T]: string}  = {} as { [key in keyof T]: string};
  Object.keys(paths).forEach((key) => {
    result[key as keyof T] = `/${root}/${key}`;
  })
  return result;
}
