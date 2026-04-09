import NProgress from "nprogress";
import { type MouseEvent, forwardRef } from "react";
import { type LinkProps, Link as RouterLink } from "react-router-dom";

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { onClick, to, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    const currentFullPath = window.location.pathname + window.location.search;

    let targetHref = "";

    if (typeof to === "string") {
      targetHref = to;
    } else if (typeof to === "object") {
      const query = to.search ?? "";
      targetHref = `${to.pathname ?? ""}${query}`;
    }

    if (targetHref === currentFullPath) return;

    NProgress.start();
    onClick?.(e);
  };

  return <RouterLink {...rest} to={to} onClick={handleClick} ref={ref} />;
});

Link.displayName = "Link";

export default Link;
