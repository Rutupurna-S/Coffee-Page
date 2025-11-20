import Link from "next/link";
import Bouncer from "../Bouncer";

export default function HeroSection() {
  return (
    <section className="h-screen w-full bg-[url('/images/hero-coffee.jpg')] bg-fixed bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center gap-4 text-center px-4">
        <p className="text-sm font-semibold uppercase text-white tracking-wider">
          Taste the perfect blend of aroma & flavour
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Freshly Brewed Coffee
        </h1>
        <p className="text-sm font-semibold uppercase text-white leading-relaxed">
          Bhubaneswar, Odisha
          <br />
          India
        </p>
        <Link href="/#menu">
          <button className="mt-6 px-8 py-3 bg-[#6F4E37] rounded-xl text-white font-medium hover:bg-[#5c3f2c] transition">
            Explore Menu
          </button>
        </Link>
        <Bouncer />
      </div>
    </section>
  );
}
