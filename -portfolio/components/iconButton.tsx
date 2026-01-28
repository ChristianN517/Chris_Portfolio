"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type IconButtonProps = {
  src: string;
  label: string;
  href: string;
  style?: React.CSSProperties;
};

export default function IconButton({ src, label, href, style }: IconButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      style={style}
      className="icon-button"
    >
      <Image
        src={src}
        alt={label}
        width={240}
        height={240}
        draggable={false}
        priority
      />
       <span className="icon-label">{label}</span>
    </button>
  );
}
