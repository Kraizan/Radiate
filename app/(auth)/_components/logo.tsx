import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="rounded-full bg-white p-1">
        <Image src="/blackcat.svg" alt="Radiate" width={80} height={80} />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Radiate</p>
        <p className="text-xm text-muted-foreground">Stream your play!</p>
      </div>
    </div>
  );
};
