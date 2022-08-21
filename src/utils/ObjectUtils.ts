export const objectMap = (obj:object, fn:Function) =>
  Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  )

  export function objMap(obj: object, func:Function) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
  }