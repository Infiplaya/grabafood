import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${inter.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
