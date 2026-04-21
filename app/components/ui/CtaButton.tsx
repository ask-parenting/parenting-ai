"use client";

import { AnchorHTMLAttributes } from "react";

interface CtaButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  onClick,
  ...rest
}: CtaButtonProps) {
  const classes = [
    "dji-btn",
    variant === "primary" ? "dji-btn-primary" : "dji-btn-secondary",
    fullWidth ? "dji-btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    if (typeof onClick === "function") {
      onClick(event);
    }

    if (typeof window === "undefined") return;

    const gtag = (window as Window & {
      gtag?: (...args: unknown[]) => void;
    }).gtag;

    if (typeof gtag === "function") {
      gtag("event", "whatsapp_cta_click", {
        link_url: href,
      });
    }
  };

  return (
    <a
      {...rest}
      href={href}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Start on WhatsApp (opens in a new tab)"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
