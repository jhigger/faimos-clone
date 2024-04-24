import { Button } from "./ui/button";

const Section7 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="col-span-1 flex h-64 gap-8 rounded-2xl bg-gradient-to-r from-primary/60 to-primary p-8 transition-all duration-200 ease-in-out hover:-translate-y-2">
            <div className="relative size-full w-2/3 [&>img]:shadow-lg [&>img]:drop-shadow-lg">
              <img
                src="https://placehold.co/200x200?text=Image"
                alt="illustration"
                className="absolute -left-4 -top-12 size-28 rounded-full object-cover object-center"
              />
              <img
                src="https://placehold.co/200x200?text=Image"
                alt="illustration"
                className="absolute left-24 top-[calc(50%-3.5rem)] size-28 rounded-full object-cover object-center"
              />
              <img
                src="https://placehold.co/200x200?text=Image"
                alt="illustration"
                className="absolute -bottom-12 -left-4 size-28 rounded-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 flex w-full flex-col justify-center gap-4">
              <div className="w-max rounded-lg bg-white bg-opacity-15 px-3 py-1 text-sm text-white drop-shadow-xl">
                Find Brands
              </div>
              <span className="text-2xl font-bold text-white">
                They could be looking for someone like you.
              </span>
              <Button className="w-max bg-white text-sm text-black hover:text-white">
                Check Now
              </Button>
            </div>
          </div>

          <div className="col-span-1 flex h-64 gap-8 rounded-2xl bg-gradient-to-r from-secondary/60 to-secondary p-8 transition-all duration-200 ease-in-out hover:-translate-y-2">
            <div className="relative size-full w-2/3 [&>img]:shadow-lg [&>img]:drop-shadow-lg">
              <img
                src="https://placehold.co/200x200?text=Image"
                alt="illustration"
                className="absolute -left-7 -top-12 size-48 rounded-full object-cover object-center"
              />
              <img
                src="https://placehold.co/200x200?text=Image"
                alt="illustration"
                className="absolute -bottom-12 left-20 size-36 rounded-full object-cover object-center"
              />
            </div>

            <div className="col-span-2 flex w-full flex-col justify-center gap-4">
              <div className="w-max rounded-lg bg-white bg-opacity-15 px-3 py-1 text-sm text-white drop-shadow-xl">
                Find Influencers
              </div>
              <span className="text-2xl font-bold text-white">
                Manage your creators and campaigns in Platform
              </span>
              <Button className="w-max bg-white text-sm text-black hover:text-white">
                Check Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
