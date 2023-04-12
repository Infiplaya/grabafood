export default function DetailsSkeleton() {
  return (
    <div
      role="status"
      className="w-full animate-pulse rounded border border-neutral-200 p-4 shadow dark:border-neutral-700"
    >
      <div className="mb-4 h-6 w-48 rounded-full bg-neutral-200  dark:bg-neutral-700 lg:mx-80"></div>
      <div className="mx-auto mb-4 flex h-96 max-w-xl items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700"></div>
      <div className="mb-2.5 h-4 w-96 rounded-full bg-neutral-200 dark:bg-neutral-700 lg:mx-80"></div>
      <div className="mb-2.5 h-4 w-96 rounded-full bg-neutral-200 dark:bg-neutral-700 lg:mx-80"></div>
      <div className="mb-2.5 h-4 w-96 rounded-full bg-neutral-200 dark:bg-neutral-700 lg:mx-80"></div>
      <div className="mb-2.5 h-4 w-96 rounded-full bg-neutral-200 dark:bg-neutral-700 lg:mx-80"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
