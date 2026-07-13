const eventMoments = [
  {
    title: "Briefing the room",
    copy: "Clear instructions give every team a confident place to start.",
    image: "/images/services/csi-bones/gallery-2.jpg",
    alt: "A facilitator briefing teams for an indoor activity",
  },
  {
    title: "Working it out together",
    copy: "The strongest moments happen while teams test ideas and adjust.",
    image: "/images/services/builder-cross/gallery-3.jpg",
    alt: "Participants collaborating on a team construction challenge",
  },
  {
    title: "Energy across the route",
    copy: "Outdoor formats create natural movement between each challenge.",
    image: "/images/services/amazing-race/gallery-4.jpg",
    alt: "Participants moving between outdoor team-building challenges",
  },
  {
    title: "Time away as a team",
    copy: "Retreats create room for shared experiences beyond the usual workday.",
    image: "/images/services/overseas-retreats/gallery-3.jpg",
    alt: "A company group sharing an experience during an overseas retreat",
  },
  {
    title: "Simple challenges, full participation",
    copy: "Short rounds make it easier for different personalities to join in.",
    image: "/images/services/minute-to-win-it/gallery-4.jpg",
    alt: "A participant completing a short team-building station challenge",
  },
  {
    title: "The team at the centre",
    copy: "The activity is the structure. The people and their interactions are the point.",
    image: "/images/services/running-man/gallery-4.jpg",
    alt: "A group taking part in a facilitated team activity",
  },
];

export const BehindTheScenes = () => {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">More than the hero shot</p>
          <h2 className="mt-4 font-display text-3xl font-black leading-tight text-foreground sm:text-5xl">
            The moments around the activity matter too.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Good event design makes the briefing, participation, pacing and shared finish feel like one coherent experience.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[15rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {eventMoments.map((moment, index) => (
            <figure
              key={moment.title}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 || index === 5 ? "lg:col-span-2" : ""
              } ${index === 1 || index === 4 ? "lg:row-span-2 lg:min-h-[31rem]" : ""}`}
            >
              <img
                src={moment.image}
                alt={moment.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                width={1200}
                height={900}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="font-display text-xl font-black text-background">{moment.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-background/78">{moment.copy}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
