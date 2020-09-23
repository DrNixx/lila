export const defined = <A>(v: A | undefined): v is A =>
  typeof v !== 'undefined';

export const notNull = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

export const isEmpty = (a: any): boolean => !a || a.length === 0;

export const notEmpty = (a: any): boolean => !isEmpty(a);

/* export const foreach = <A>(a: A | undefined, f: (a: A) => void): void => { */
/*   if (a) f(a); */
/* } */

export interface Prop<T> {
  (): T
  (v: T): T
}

// like mithril prop but with type safety
export const prop = <A>(initialValue: A): Prop<A> => {
  let value = initialValue;
  const fun = function(v: A | undefined) {
    if (defined(v)) value = v;
    return value;
  };
  return fun as Prop<A>;
}

export interface Props {}

export function extend<A extends Props> (a: A, b: A): A {
  if (b !== undefined) {
      for (var key in b) {
          if (b.hasOwnProperty(key)) {
              a[key] = b[key];
          }
      }
  }
  
  return a;
}