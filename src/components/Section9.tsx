import { Button } from "./ui/button";

const items = [
  {
    image: "https://placehold.co/200x200?text=Image",
    date: "Influencer / 25 May 2023",
    title: "Influencer Is a Real Job. It's Time to Act Like It and own it",
    content:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the…",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    date: "Influencer / 25 May 2023",
    title: "How Brands Can Break Barriers and Empower Creators",
    content:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the…",
  },
  {
    image: "https://placehold.co/200x200?text=Image",
    date: "Influencer / 25 May 2023",
    title: "90% of Social Media Influencers Are Active on Instagram",
    content:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the…",
  },
];

const Section9 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col justify-center gap-2">
              <span className="text-4xl font-bold">Latest news</span>
              <span className="text-muted-foreground">
                We have a lot of opportunities for you. Come check them!
              </span>
            </div>
            <Button variant="ghost">View All</Button>
          </div>
          <hr className="mb-4 border-dashed" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.title}
                className="group col-span-1 flex flex-col rounded-3xl shadow-[rgba(149,157,165,.2)_0_8px_24px]"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt="thumbnail"
                    className="size-full object-cover object-center transition-all duration-200 ease-in-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6">
                  <span className="text-sm font-semibold uppercase text-primary">
                    {item.date}
                  </span>
                  <span className="text-xl font-bold hover:text-primary">
                    {item.title}
                  </span>
                  <p className="line-clamp-2 text-muted-foreground">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
