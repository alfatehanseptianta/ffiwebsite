import type { Metadata } from "next";
import type { ReactNode } from "react";
import SoeKitchenShell from "@/components/soe-unit/SoeKitchenShell";
import "./soe-unit.css";

export const metadata: Metadata = {
  title: "FFI Kitchen | SOE Unit | Future Farmers Indonesia",
  description: "Integrated FFI Kitchen dashboard for SOE Unit operations and impact showcase.",
};

export default function SoeUnitLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <SoeKitchenShell>{children}</SoeKitchenShell>;
}
