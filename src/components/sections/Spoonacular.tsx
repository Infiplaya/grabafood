import Image from "next/image";
import Link from "next/link";

export function Spoonacular() {
  return (
    <section className="bg-neutral-800 py-32 text-neutral-100">
      <div className="flex items-center justify-center gap-8 px-6">
        <h3 className="max-w-sm text-2xl tracking-tight  lg:text-4xl">
          Powered by{" "}
          <Link
            className="block text-green-500 underline-offset-8 hover:underline"
            href="https://spoonacular.com/food-api"
          >
            Spoonacular API
          </Link>
        </h3>
        <Image
          src="spoonacular-logo-b.svg"
          alt="spoonacular"
          width={250}
          height={250}
          className="w-28"
        />
      </div>
    </section>
  );
}
