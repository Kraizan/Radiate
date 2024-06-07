"use client";
import { useSidebar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { ToggleSkeleton } from "./toggle";
import { RecommenedSkeleton } from "./recommened";
import { useIsClient } from "usehooks-ts";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  if (isClient === false)
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-secondary z-50">
        <ToggleSkeleton />
        <RecommenedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-secondary z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
