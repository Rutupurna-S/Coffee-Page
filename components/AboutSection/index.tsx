import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 bg-[#FAF3E3]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Image
          src="/images/about-coffee.jpg"
          alt="About Coffee"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-xl shadow-lg w-full h-auto"
        />
        <div>
          <h2 className="text-4xl font-bold text-[#4B2E12] mb-4">
            About Our Coffee
          </h2>
          <p className="text-[#8d6a47] leading-relaxed text-lg mb-4">
            We believe every cup of coffee tells a story. From handpicked beans
            to expert roasting, our passion is to craft the perfect blend of
            aroma, flavor, and warmth.
          </p>
          <p className="text-[#8d6a47] leading-relaxed text-lg mb-6">
            Whether you&apos;re looking for a refreshing morning brew or a cozy
            evening latte, our café brings you the finest taste with premium
            ingredients.
          </p>
          <a
            href="https://www.aboutcoffee.org/origins/what-is-coffee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-[#6F4E37] text-white rounded-lg hover:bg-[#5a3f2d] transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
