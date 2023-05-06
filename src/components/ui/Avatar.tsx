import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import type { Session } from "next-auth";

export function UserAvatar({ user }: { user: Session["user"] }) {
  return (
    <div className="flex gap-5">
      <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full align-middle">
        {user.image && user.name && (
          <Avatar.Image
            className="h-full w-full rounded-[inherit] object-cover"
            src={user.image}
            alt={user.name}
          />
        )}
        <Avatar.Fallback
          className="leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium text-orange-500"
          delayMs={600}
        >
          {user.name}
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
