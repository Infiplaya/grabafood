import Image from "next/image";
import { Searchbar } from "../Searchbar";

export default function Hero() {
  return (
    <section className="mt-24 grid-cols-2 place-items-center px-6 lg:mx-auto lg:mt-0 lg:grid lg:max-w-7xl lg:gap-20">
      <div className="lg:mb-24">
        <h1 className="text-4xl font-bold tracking-tight [text-wrap:balance] lg:text-6xl">
          Having problems figuring out{" "}
          <span className="lg:text-orange-500">what to eat?</span>
        </h1>
        <h2 className="mt-3 text-2xl font-bold tracking-tight">
          No worries. Just search.
        </h2>
        <Searchbar />
      </div>
      <Image
        priority={true}
        src="/hero.webp"
        alt="food img"
        width={600}
        height={800}
        decoding="async"
        className="hidden h-2/3 rounded-lg object-cover shadow-lg lg:block"
      />
    </section>
  );
}
