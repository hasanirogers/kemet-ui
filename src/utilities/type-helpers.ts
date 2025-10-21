import { LitElement } from 'lit';

export type DataProps<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? never : K]: T[K];
};

export type LitElementProps<T extends LitElement> = Omit<
  DataProps<T>,
  keyof LitElement
>;

export type ReactLitProps<T extends LitElement> =
  Omit<React.HTMLAttributes<T>, 'children'> &
  Partial<LitElementProps<T>> & {
    ref?: React.Ref<T>;
    children?: React.ReactNode;
    slot?: string;
  };
