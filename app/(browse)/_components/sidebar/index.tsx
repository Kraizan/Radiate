import { getRecommened } from "@/lib/recommended-service";
import { Recommened, RecommenedSkeleton } from "./recommened";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
  const recommened = await getRecommened();

  return (
    <Wrapper>
      <Toggle />
      <div className="space-y-4 pt-4 lg:pt-0">
        <Recommened data={recommened} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex-flex-col w-[70px] lg:w-60 h-full bg-background border-r border-secondary z-50">
      <ToggleSkeleton />
      <RecommenedSkeleton />
    </aside>
  );
};
