declare module "react" {
  export type Key = string | number;
  export type ReactNode = string | number | boolean | null | undefined | ReactElement | ReactNode[];

  export interface ReactElement {
    readonly type: unknown;
    readonly props: Record<string, unknown> | null;
    readonly key: Key | null;
  }

  export interface ComponentType<P = Record<string, unknown>> {
    (props: P): ReactElement | null;
  }

  export const StrictMode: ComponentType<{ children?: ReactNode }>;

  export function createElement<P = Record<string, unknown>>(
    type: string | ComponentType<P>,
    props?: (P & { children?: ReactNode }) | null,
    ...children: ReactNode[]
  ): ReactElement;
}

declare module "react-dom/client" {
  import type { ReactElement } from "react";

  export interface Root {
    render(children: ReactElement): void;
  }

  export function createRoot(container: Element | DocumentFragment): Root;
}
