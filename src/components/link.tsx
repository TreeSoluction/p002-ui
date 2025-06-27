"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import { ComponentProps, MouseEvent, forwardRef } from "react";

type LinkProps = ComponentProps<typeof NextLink>;

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { onClick, href, ...rest } = props;
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    let targetHref: string;

    if (typeof href === "string") {
      targetHref = href;
    } else if (typeof href === "object") {
      targetHref = href.pathname || "";
    } else {
      targetHref = "";
    }

    if (targetHref === pathname) return;

    NProgress.start();
    onClick?.(e);
  };

  return <NextLink {...rest} href={href} onClick={handleClick} ref={ref} />;
});

Link.displayName = "Link";

export default Link;
