'use client';

import { useEffect, useState, type PropsWithChildren, type PropsWithoutRef } from "react";
import { ReactLitProps } from "../utilities/type-helpers";

import KemetButtonClass from '../elements/button';
import KemetIconBootstrapClass from '../elements/icon-bootstrap';

type KemetButtonProps = PropsWithChildren<React.HTMLAttributes<HTMLElement> & ReactLitProps<KemetButtonClass>>;
type KemetIconBootstrapProps = PropsWithoutRef<React.HTMLAttributes<HTMLElement> & ReactLitProps<KemetIconBootstrapClass>>;

export const KemetButton = ({ children, ...props }: KemetButtonProps) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    import('../elements/button').then(() => { setReady(true); });
  }, []);

  if (!ready) return null;

  return (
    <kemet-button {...props}>
      {children}
    </kemet-button>
  );
}

export const KemetIconBootstrap = ({ ...props }: KemetIconBootstrapProps) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    import('../elements/icon-bootstrap').then(() => { setReady(true); });
  }, []);

  if (!ready) return null;

  return (
    <kemet-icon-bootstrap {...props}></kemet-icon-bootstrap>
  );
}

