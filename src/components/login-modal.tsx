"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "./ui/dialog";

export default function LoginModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleRouter = () => router.back();
  return (
    <Dialog defaultOpen open={true} onOpenChange={handleRouter}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
