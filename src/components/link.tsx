"use client";

import NextLink from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { ComponentProps, MouseEvent, forwardRef } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { onClick, href, ...rest } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentFullPath = `${pathname}${searchParams.toString() ? "?" + searchParams.toString() : ""}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    let targetHref: string;

    if (typeof href === "string") {
      targetHref = href;
    } else if (typeof href === "object") {
      // reconstruir a URL com pathname + query
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
