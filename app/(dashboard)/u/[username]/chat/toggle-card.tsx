"use client";

import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { updateStream } from "@/actions/stream";
import { useTransition } from "react";

import { Skeleton } from "@/components/ui/skeleton";

type FieldTypes = "isChatEnabled" | "isChatDelayed" | "isChatFollowersOnly";

interface ToggleCardProps {
  field: FieldTypes;
  label: string;
  value: boolean;
}

export const ToggleCard = ({
  field,
  label,
  value = false,
}: ToggleCardProps) => {
  const [isPending, startTransition] = useTransition();

  const onChange = () => {
    startTransition(() => {
      updateStream({ [field]: !value })
        .then(() => {
          toast.success("Settings updated");
        })
        .catch(() => {
          toast.error("Failed to update settings");
        });
    });
  };

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-center justify-between">
        <p className="font-semibold shrink-0">{label}</p>
        <div className="space-y-2">
          <Switch
            disabled={isPending}
            checked={value}
            onCheckedChange={onChange}
          >
            {value ? "On" : "Off"}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export const ToggleCardSkeleton = () => {
  return <Skeleton className="rounded-xl p-10 w-full" />;
};
