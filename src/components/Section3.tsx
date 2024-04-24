const items = [
  {
    icon: "https://placehold.co/50x50?text=Icon",
    title: "No Upfront Cost",
    description:
      "Search influencers for free. No subscriptions, contracts or fees.",
  },
  {
    icon: "https://placehold.co/50x50?text=Icon",
    title: "Verified Creators",
    description:
      "Every creator is verified by us. Always receive high-quality content.",
  },
  {
    icon: "https://placehold.co/50x50?text=Icon",
    title: "Live Chat",
    description:
      "DM influencers and stay in touch throughout the whole transaction.",
  },
  {
    icon: "https://placehold.co/50x50?text=Icon",
    title: "Safe Checkout",
    description:
      "Your money is held safely until you approve the creator's work.",
  },
];

const Section3 = () => {
  return (
    <section className="bg-primary py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group col-span-1 flex flex-col gap-4 text-white"
            >
              <img
                src={item.icon}
                alt="icon"
                className="size-20 rounded-full transition-all duration-200 ease-in-out group-hover:scale-110"
              />
              <span className="text-2xl font-bold">{item.title}</span>
              <p className="tracking-wide">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
