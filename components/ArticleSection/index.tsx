import Image from "next/image";
import Link from "next/link";

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "The Origin of Coffee",
      desc: "Discover how coffee was first discovered in Ethiopia.",
      img: "/images/coffee-article1.png",
      link: "#",
    },
    {
      id: 2,
      title: "Types of Coffee Beans",
      desc: "Arabica vs Robusta - understand the real differences.",
      img: "/images/coffee-article2.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "How Coffee is Roasted",
      desc: "Learn how flavors change based on roast level.",
      img: "/images/coffee-article3.jpg",
      link: "#",
    },
  ];

  return (
    <section id="article" className="py-20 scroll-mt-20 bg-[#FAF3E3] px-6">
      <h2 className="text-center text-4xl font-bold text-[#4B2E12] mb-12">
        Coffee Articles
      </h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((item) => (
          <div
            key={item.id}
            className="relative h-[420px] rounded-xl overflow-hidden shadow-md group"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-all duration-500"
            />
            <div
              className="
                absolute inset-0 
                bg-gradient-to-b from-transparent to-black/70
                /* On Mobile: Always visible (opacity-100) */
                /* On Laptop (lg): Hidden until hover (lg:opacity-0) */
                opacity-100 lg:opacity-0 group-hover:opacity-100 
                transition-all duration-500
              "
            ></div>
            <div
              className="
                absolute bottom-6 inset-x-0 
                px-5 text-white text-center
                translate-y-0 opacity-100
                lg:translate-y-10 lg:opacity-0
                group-hover:translate-y-0 group-hover:opacity-100
                transition-all duration-500
              "
            >
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-3">{item.desc}</p>
              <div className="w-20 h-[2px] bg-[#6F4E37] mx-auto mb-3"></div>
              <Link href={item.link || "#"}>
                <button className="px-4 py-2 bg-[#6F4E37] text-white font-semibold rounded-md hover:bg-[#5a3f2d] transition-all">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
