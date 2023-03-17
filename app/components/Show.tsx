import { ReactNode } from "react";

interface Props {
  when: boolean;
  fallback?: ReactNode;
  children: ReactNode;
}

/** Component that renders children depending on boolean. */
export const Show = ({ when, fallback, children }: Props) => {
  if (!when) return <>{fallback}</> || null;

  return <>{children}</>;
};
