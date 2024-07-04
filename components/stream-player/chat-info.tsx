import { useMemo } from "react";
import { Info } from "lucide-react";
import { Hint } from "../hint";

interface ChatInfoProps {
  isFollowersOnly: boolean;
  isDelayed: boolean;
}

export const ChatInfo = ({ isFollowersOnly, isDelayed }: ChatInfoProps) => {
  const hint = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "This chat is for followers only";
    }
    if (isFollowersOnly && isDelayed) {
      return "Messages are delayed by 3 seconds";
    }

    if (isDelayed && isFollowersOnly) {
      return "Messages are delayed by 3 seconds and this chat is for followers only";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);

  const label = useMemo(() => {
    if (isFollowersOnly && !isDelayed) {
      return "Followers only";
    }
    if (isFollowersOnly && isDelayed) {
      return "Slow mode";
    }

    if (isDelayed && isFollowersOnly) {
      return "Followers only and slow mode";
    }

    return "";
  }, [isDelayed, isFollowersOnly]);

  if (!isDelayed && !isFollowersOnly) return null;

  return (
    <div className="p-2 text-muted-foreground bg-white/5 border boder-white/10 w-full rounded-t-md flex items-center gap-x-2">
      <Hint label={label}>
        <Info className="h-4 w-4" />
      </Hint>
      <p className="text-xs font-semibold">{label}</p>
    </div>
  );
};
