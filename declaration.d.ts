type CustomElement<T, K extends string> = Partial<T & DOMAttributes<T>>
type CustomElementContainer<T, K extends string> = Partial<T & DOMAttributes<T> & { children: any }>

declare namespace JSX {
  interface IntrinsicElements {
    ['lottus-rich-text']: CustomElement,
    ['lottus-button']: CustomElement,
  }
}