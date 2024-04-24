import { Heart } from "lucide-react";
import { formatPrice, nFormatter } from "~/lib/utils";
import { type ItemType } from "./Section4";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

const items: ItemType[] = [
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Facebook",
    price: 100,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Alex Collins",
      followers: 120000,
    },
    description:
      "Alex, 10th Fittest Man on Earth, pursuing his dreams with determination",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Tiktok",
    price: 200,
    description: "I am a lifestyle and travel photographer & filmmaker.",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Instagram",
    price: 150,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Alex Collins",
      followers: 120000,
    },
    description:
      "Welcome to the inspiring world of Isacc. Here to motivate you to be brave",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Pinterest",
    price: 250,
    description: "Original TikTok from @katsu33p35 with voiceover",
  },
];

const Section6 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col justify-center gap-2">
              <span className="text-4xl font-bold">Our Most Popular</span>
              <span className="text-muted-foreground">
                We have a lot of opportunities for you. Come check them!
              </span>
            </div>
            <Button variant="ghost">View All</Button>
          </div>

          <hr className="mb-4 border-dashed" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div key={i} className="group col-span-1 flex flex-col gap-2">
                <div className="relative flex aspect-[9/11] items-center justify-center overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt="thumbnail"
                    className="size-full object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-110"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="group/button absolute right-4 top-4 hidden size-8 items-center justify-center rounded-full bg-white hover:bg-white group-hover:flex"
                  >
                    <Heart
                      size={16}
                      className="stroke-red-500 stroke-[2.5] group-hover/button:stroke-black"
                    />
                  </Button>
                  {item.profile && (
                    <div className="absolute bottom-4 flex w-[90%] gap-3 rounded-[2rem] bg-white/50 px-4 py-3 backdrop-blur">
                      <Avatar className="size-12 overflow-hidden rounded-full transition-all duration-200 ease-in-out group-hover:scale-110">
                        <AvatarImage
                          src={item.profile.avatar}
                          alt="avatar"
                          className="size-full object-cover object-center"
                        />
                      </Avatar>
                      <div className="flex flex-col justify-center">
                        <span className="font-medium">{item.profile.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {nFormatter(item.profile.followers)} Followers
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase text-primary">
                    {item.platform}
                  </span>
                  <span className="text-lg font-bold">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <span className="font-medium">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
