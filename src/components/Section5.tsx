const Section5 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24">
      <img
        src="https://placehold.co/200x200?text=Video"
        alt="background"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute -z-10 h-full w-full bg-black/20" />
      <div className="container flex h-[450px] flex-col items-center justify-center">
        <span className="max-w-3xl text-center text-5xl font-bold leading-normal text-white">
          Connecting brands with digital stars that takes you far.
        </span>
      </div>
    </section>
  );
};

export default Section5;
