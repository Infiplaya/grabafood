import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { AddReview } from "./AddReview";
import { Button } from "./ui/Button";

export function ReviewDialog({ recipeId }: { recipeId: number }) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant={"outline"}
          size={"sm"}
          className="mt-3 w-full lg:w-2/3"
        >
          New Review
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/25" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-6 shadow-md focus:outline-none">
          <Dialog.Title className="mb-3 text-2xl font-semibold text-neutral-800">
            Add new Review
          </Dialog.Title>
          {session ? (
            <AddReview recipeId={recipeId} closeDialog={() => setOpen(false)} />
          ) : (
            <>
              <Button onClick={() => void signIn('google')}>Sign In</Button>
              <p className="mt-2">To add new review!</p>
            </>
          )}
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
