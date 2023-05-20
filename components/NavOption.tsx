"use client";
import Link from "next/link";
import styles from "@/components/NavOption.module.css";
import { usePathname } from "next/navigation";
export default function NavOption({
  children,
  path,
  target,
}: {
  children: React.ReactNode;
  path: string;
  target?: "_blank";
}) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={
        pathname === path ? styles.selectedNavOption : styles.navOption
      }
      target={target}
    >
      {children}
    </Link>
  );
}
