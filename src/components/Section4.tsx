import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { formatPrice, nFormatter } from "~/lib/utils";
import { Button } from "./ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Avatar, AvatarImage } from "./ui/avatar";

export type ItemType = {
  image: string;
  platform: string;
  price: number;
  profile?: {
    avatar: string;
    name: string;
    followers: number;
  };
  description: string;
};

const items: ItemType[] = [
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Facebook",
    price: 49,
    description: "Travel and Lifestyle Content from @jimmy11221",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Instagram",
    price: 99,
    description: "Get inspired by Ramona Flowers on her trip around the world",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Tiktok",
    price: 150,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Alex Collins",
      followers: 120000,
    },
    description: "Alex Collins: Fashion Leader Inspiring Change",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Youtube",
    price: 500,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Ramona Flowers",
      followers: 1000000,
    },
    description: "Kaitlin's Home Renovation: DIYing with Intention",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Facebook",
    price: 780,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Ramona Flowers",
      followers: 1000000,
    },
    description: "Social Media Promotions - Grow your Followers/Engagement!",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Youtube",
    price: 99,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Matt Yong",
      followers: 300000,
    },
    description: "Generate buzz about your product on Twitter with George",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Tiktok",
    price: 550,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Alex Collins",
      followers: 120000,
    },
    description: "Create a Twitter Message with Awareness",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    platform: "Instagram",
    price: 490,
    profile: {
      avatar: "https://placehold.co/50x50?text=Image",
      name: "Ramona Flowers",
      followers: 1000000,
    },
    description: "Beauty and fashion tips by @charlottegrecgo",
  },
];

const Section4 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col justify-center gap-2">
              <span className="text-4xl font-bold">Featured Listings</span>
              <span className="text-muted-foreground">
                We have a lot of opportunities for you. Come check them!
              </span>
            </div>
            <Button variant="ghost">View All</Button>
          </div>

          <hr className="mb-4 border-dashed" />

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={32}
              slidesPerView={4}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop
              className="relative w-full"
            >
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="group col-span-1 flex flex-col gap-2">
                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl">
                      <img
                        src={item.image}
                        alt="thumbnail"
                        className="size-full object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-110"
                      />
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
                            <span className="font-medium">
                              {item.profile.name}
                            </span>
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
                </SwiperSlide>
              ))}
            </Swiper>

            <ChevronLeft className="swiper-button-prev !-left-8 !top-[40%] !size-12 !h-max rounded-full bg-transparent stroke-black stroke-1 p-2 hover:bg-white hover:shadow-[rgba(0,0,0,0.15)_-1px_11px_15px_0px]" />
            <ChevronRight className="swiper-button-next !-right-8 !top-[40%] !size-12 !h-max rounded-full bg-transparent stroke-black stroke-1 p-2 hover:bg-white hover:shadow-[rgba(0,0,0,0.15)_-1px_11px_15px_0px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
