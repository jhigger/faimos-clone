import { Button } from "./ui/button";

const Section8 = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24">
      <img
        src="https://placehold.co/200x200?text=Image"
        alt="background"
        className="absolute -z-10 h-full w-full object-cover object-center"
      />
      <div className="absolute -z-10 h-full w-full bg-black/20" />
      <div className="container grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
        <div className="col-span-full flex flex-col items-center justify-center gap-4 text-white">
          <span className="text-4xl font-bold">We care about your opinion</span>
          <span>We have a lot of opportunities for you. Come check them!</span>
        </div>

        <div className="col-span-1 flex flex-col gap-4 rounded bg-white p-8">
          <div className="flex gap-4">
            <img
              src="https://placehold.co/50x50?text=Icon"
              alt="icon"
              className="size-16 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold">Martin Culich</span>
              <span className="text-sm text-muted-foreground">
                Digital Marketer
              </span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring.
          </p>
        </div>

        <div className="col-span-1 flex flex-col gap-4 rounded bg-white p-8">
          <div className="flex gap-4">
            <img
              src="https://placehold.co/50x50?text=Icon"
              alt="icon"
              className="size-16 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold">Narin Doe</span>
              <span className="text-sm text-muted-foreground">
                Digital Marketer
              </span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touchpoints for offshoring.
          </p>
        </div>

        <div className="col-span-full flex items-center justify-center">
          <Button size="lg">View More</Button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
