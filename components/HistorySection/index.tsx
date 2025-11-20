import Image from "next/image";

export default function History() {
  return (
    <section
      id="history"
      className="bg-[#A9C0A6] py-16 flex justify-center scroll-mt-24"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-8">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#4B2E12]">
            Our Coffee History
          </h2>
          <p className="text-lg mb-6 text-[#4B2E12] opacity-80 leading-relaxed">
            Coffee&apos;s journey began centuries ago, crossing continents and
            cultures before filling our cups in Bhubaneswar. Honoring traditions
            from the first Ethiopian beans to today&apos;s specialty roasts, our
            story celebrates the warmth and community of café life.
          </p>
          <p className="text-base mb-8 text-[#4B2E12] opacity-70 leading-relaxed">
            From legendary brews to innovative blends, each sip connects you to
            a rich heritage-one that inspires us to bring you unforgettable
            flavor and experience every day.
          </p>
          <a
            href="https://www.aboutcoffee.org/origins/history-of-coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-[#4B2E12] text-[#A9C0A6] 
              font-semibold px-6 py-3 rounded-lg shadow 
              hover:bg-[#6b4c2f] transition-all
            "
          >
            Discover More
          </a>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <div className="rounded-xl shadow-lg overflow-hidden w-full md:w-[450px]">
            <Image
              src="/images/history-coffee.jpg"
              alt="Steaming coffee cup and beans"
              width={450}
              height={300}
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
