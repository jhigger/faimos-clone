const steps = [
  {
    icon: "https://placehold.co/200x200?text=Icon",
    title: "Create Account",
    description:
      "Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.",
  },
  {
    icon: "https://placehold.co/200x200?text=Icon",
    title: "Complete Profile",
    description:
      "Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.",
  },
  {
    icon: "https://placehold.co/200x200?text=Icon",
    title: "Find Brand",
    description:
      "Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.",
  },
  {
    icon: "https://placehold.co/200x200?text=Icon",
    title: "Collaborate",
    description:
      "Vivamus vel fringilla est. Fusce fermentum, quam a aliquet semper, eros sapien ullamcorpe.",
  },
];

const Section2 = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-1 lg:grid-cols-2">
          <div className="col-span-1 space-y-10">
            <div className="flex flex-col justify-center gap-2">
              <span className="text-4xl font-bold">How it works</span>
              <span className="text-muted-foreground">
                We have a lot of opportunities for you. Come check them!
              </span>
            </div>
            <div className="grid w-full grid-cols-2 gap-6">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="group col-span-1 flex flex-col gap-4 rounded-3xl bg-secondary/10 p-8 first:bg-primary/10 last:bg-primary/10"
                >
                  <div className="size-20 rotate-6 rounded-xl bg-white p-3 shadow group-first:-rotate-6 group-last:-rotate-6">
                    <img
                      src={step.icon}
                      alt="icon"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <span className="text-3xl font-bold">{step.title}</span>
                  <p className="text-lg text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 justify-self-end">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://placehold.co/650x675?text=Image"
                alt="illustration"
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
