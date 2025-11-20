import MenuCard from "./MenuCard";

const menuItems = [
  {
    key: 1,
    title: "Espresso",
    image: "/images/espresso.jpg",
    price: "$4",
    description: "Rich and bold shot of pure coffee goodness.",
  },
  {
    key: 2,
    title: "Cappuccino",
    image: "/images/cappuccino.jpg",
    price: "$6",
    description: "Smooth blend of espresso, steamed milk & foam.",
  },
  {
    key: 3,
    title: "Latte",
    image: "/images/latte.jpg",
    price: "$6",
    description: "Creamy milk coffee with a mild espresso taste.",
  },
  {
    key: 4,
    title: "Mocha",
    image: "/images/mocha.jpg",
    price: "$7",
    description: "Espresso mixed with chocolate and steamed milk.",
  },
  {
    key: 5,
    title: "Americano",
    image: "/images/americano.jpg",
    price: "$5",
    description: "Espresso diluted with hot water, strong & smooth.",
  },
  {
    key: 6,
    title: "Macchiato",
    image: "/images/macchiato.jpg",
    price: "$5",
    description: "Espresso topped with a small dollop of foam.",
  },
];

export default function MenuSection() {
  return (
    <section
      className="w-full py-20 bg-fixed bg-center bg-cover bg-no-repeat relative scroll-mt-24"
      style={{ backgroundImage: "url('/images/menu-bg.jpg')" }}
      id="menu"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/60 z-0"></div>
      <div className="relative max-w-6xl mx-auto px-5 z-10">
        <h2 className="text-4xl font-bold text-center mb-14 tracking-wide text-white">
          Our Coffee Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <MenuCard key={item.key} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
