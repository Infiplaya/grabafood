

export default function CardSkeleton() {
  return (
    <div
      role="status"
      className="max-w-sm animate-pulse rounded border border-neutral-200 p-4 shadow dark:border-neutral-700 md:p-6"
    >
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700"></div>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
