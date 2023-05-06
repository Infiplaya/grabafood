import React, { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";

export function ProgressBar({ rating }: { rating: number }) {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(rating), 500);
    return () => clearTimeout(timer);
  }, [rating]);

  return (
    <Progress.Root
      className="relative h-[15px] w-full overflow-hidden rounded-full border border-neutral-400 bg-neutral-300 lg:w-[350px]"
      style={{
        // Fix overflow clipping in Safari
        // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
        transform: "translateZ(0)",
      }}
      value={progress}
    >
      <Progress.Indicator
        className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] h-full w-full bg-neutral-50 transition-transform duration-[660ms]"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}
