"use client";

import NextLink from "next/link";
import NProgress from "nprogress";
import { ComponentProps, MouseEvent, forwardRef } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { onClick, href, ...rest } = props;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") {
      return;
    }

    const pathname = window.location.pathname;
    const searchParams = window.location.search;

    const currentFullPath = `${pathname}${searchParams}`;

    let targetHref: string;

    if (typeof href === "string") {
      targetHref = href;
    } else if (typeof href === "object") {
      const query = href.query
        ? "?" +
          Object.entries(href.query)
            .map(([key, value]) => `${key}=${value}`)
            .join("&")
        : "";

      targetHref = `${href.pathname ?? ""}${query}`;
    } else {
      targetHref = "";
    }

    if (targetHref === currentFullPath) return;

    NProgress.start();
    onClick?.(e);
  };

  return <NextLink {...rest} href={href} onClick={handleClick} ref={ref} />;
});

Link.displayName = "Link";

export default Link;
