import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Panel() {
  const { data: session } = useSession();
  const [clicked, setClicked] = useState(false);

  if (session) {
    return (
      <>
        <main className="flex h-screen flex-col items-center justify-center space-y-10 bg-gray-200">
          <div className="w-1/2 font-mono text-xl md:text-3xl">
            <p>
              Not much there, but in the feature hopefully we will add some
              features.
            </p>
            <p>In the meantime feel free to throw some confetti.</p>
          </div>
          <button
            className="self-center rounded-full bg-orange-500 p-5 text-xl md:text-3xl"
            onClick={() => setClicked(!clicked)}
          >
            GET ME A CONFETTI!
          </button>
        </main>
        {clicked && <p>Poof</p>}
      </>
    );
  }
}
