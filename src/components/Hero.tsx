import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-400 to-white">
      <div className="container grid w-full grid-cols-1 place-items-stretch justify-items-stretch gap-10 py-24 lg:grid-cols-2">
        <div className="z-10 col-span-1 flex flex-col justify-center gap-8">
          <h1 className="text-5xl font-bold leading-normal">
            Find and hire the perfect Influencer for the Job
          </h1>
          <p>
            Our marketplace offers a wide range of features designed to make the
            collaboration process efficient and effective. Influencers can
            showcase their unique talents.
          </p>
          <Button
            className="w-max bg-white text-black hover:text-white"
            size="lg"
          >
            Discover Now
          </Button>
        </div>

        <img
          src="https://placehold.co/650x675?text=Image"
          alt="hero"
          className="col-span-1 h-full w-full rounded-xl"
        />
      </div>
    </section>
  );
};

export default Hero;
