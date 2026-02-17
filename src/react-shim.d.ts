declare module "react" {
  export interface ReactNode {}

  export interface FormEvent<T = Element> {
    preventDefault(): void;
    currentTarget: T;
    target: EventTarget;
  }

  export interface ChangeEvent<T = Element> {
    target: T;
  }

  export interface FC<P = Record<string, never>> {
    (props: P): JSX.Element;
  }

  export const StrictMode: FC<{ children?: ReactNode }>;

  export function useState<S>(initialState: S): [S, (value: S) => void];

  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
}

declare module "react-dom/client" {
  export interface Root {
    render(children: JSX.Element): void;
  }

  export function createRoot(container: Element | DocumentFragment): Root;
}

declare namespace JSX {
  interface Element {}

  interface IntrinsicElements {
    [elemName: string]: unknown;
  }
}


declare module "react/jsx-runtime" {
  export function jsx(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export function jsxs(type: unknown, props: unknown, key?: unknown): JSX.Element;
  export const Fragment: unique symbol;
}
