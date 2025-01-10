"use client";

import { Button } from "@/components/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

//TODO: FIX THE SCALE NOT CHANGING ON ACTIVE CLICK

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      className="absolute left-10 top-10 z-50 flex size-10 items-center justify-center rounded border border-accent-3 bg-accent-2"
      onClick={() => router.back()}
    >
      <ArrowLeft />
    </Button>
  );
}
