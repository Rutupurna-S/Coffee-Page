import Image from "next/image";

type CoffeeType = {
  key: number;
  title: string;
  image: string;
  price: string;
  description: string;
};

interface PropsType {
  item: CoffeeType;
}

export default function CoffeeCard({ item }: PropsType) {
  return (
    <div className="h-[330px] group [perspective:1000px]">
      <div
        className="h-full relative transition-all duration-500 
        [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]"
      >
        <div
          className="absolute inset-0 rounded-xl overflow-hidden 
          shadow-lg [backface-visibility:hidden]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-5 inset-x-0 text-center px-4">
            <h2 className="text-white text-2xl font-bold drop-shadow-md">
              {item.title}
            </h2>
            <p className="text-white text-lg font-semibold drop-shadow-md">
              {item.price}
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-[#2b1b12] text-white p-6 
          rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] 
          flex flex-col items-center justify-center gap-4"
        >
          <h2 className="text-3xl font-bold">{item.title}</h2>

          <p className="text-center text-sm opacity-90">{item.description}</p>

          <p className="text-xl font-semibold bg-white text-black px-4 py-1 rounded">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}
