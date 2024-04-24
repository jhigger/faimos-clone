import { Button } from "./ui/button";

const brands = [
  "https://placehold.co/200x200?text=Logo",
  "https://placehold.co/200x200?text=Logo",
  "https://placehold.co/200x200?text=Logo",
  "https://placehold.co/200x200?text=Logo",
  "https://placehold.co/200x200?text=Logo",
];

const platforms = [
  {
    name: "Tiktok",
    image: "https://placehold.co/200x200?text=Image",
  },
  {
    name: "Youtube",
    image: "https://placehold.co/200x200?text=Image",
  },
  {
    name: "Pinterest",
    image: "https://placehold.co/200x200?text=Image",
  },
  {
    name: "Facebook",
    image: "https://placehold.co/200x200?text=Image",
  },
  {
    name: "Instagram",
    image: "https://placehold.co/200x200?text=Image",
  },
];

const Section1 = () => {
  return (
    <section className="py-24">
      <div className="container space-y-32">
        <div className="-mt-40 w-full rounded-full border border-gray-200 bg-white px-14 py-8 text-2xl font-bold shadow-[0_10px_10px_-10px_rgb(33,35,38,0.1)]">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span>You are in </span>
              <span className="text-secondary">Good Company:</span>
            </div>
            <div className="flex items-center justify-center gap-10">
              {brands.map((brand, i) => (
                <div key={i} className="aspect-video overflow-hidden rounded">
                  <img
                    src={brand}
                    alt="brand"
                    className="size-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col justify-center gap-2">
              <span className="text-4xl font-bold">Check by Platform</span>
              <span className="text-muted-foreground">
                We have a lot of opportunities for you. Come check them!
              </span>
            </div>
            <Button variant="ghost">View All</Button>
          </div>
          <hr className="mb-4 border-dashed" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group relative col-span-1 aspect-[16/10] overflow-hidden rounded-3xl transition-all duration-200 ease-in-out hover:scale-110"
              >
                <img
                  src={platform.image}
                  alt="thumbnail"
                  className="absolute size-full object-cover object-center"
                />
                <div className="absolute size-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:via-gray-500"></div>
                <span className="absolute bottom-3 w-full text-center text-lg font-bold text-white">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
