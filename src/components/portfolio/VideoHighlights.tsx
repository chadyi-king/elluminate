import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";

const videoHighlights = [
  {
    title: "Amazing Race",
    description: "Outdoor checkpoints, challenges and team movement.",
    poster: "/images/service-thumbnails/amazing-race-tn.png",
    videoUrl: "/__l5e/assets-v1/778352aa-d8b6-4254-8c08-e3b86209a00f/amazing-race.mp4",
  },
  {
    title: "CSI-Bones",
    description: "An indoor investigation built around shared clues.",
    poster: "/images/services/csi-bones/gallery-1.jpg",
    videoUrl: "/__l5e/assets-v1/0acf8c9d-f343-4b78-a415-59aed72619c2/csi-bones.mp4",
  },
  {
    title: "Builder Cross",
    description: "Hands-on planning, construction and collaboration.",
    poster: "/images/service-thumbnails/builders-cross-tn.jpg",
    videoUrl: "/__l5e/assets-v1/907ab204-8b56-4c6b-bfd9-48f917586db7/builders-cross.mp4",
  },
  {
    title: "Monopoly Dash",
    description: "Route choices and strategy in an outdoor format.",
    poster: "/images/service-thumbnails/monopoly-dash-tn.jpg",
    videoUrl: "/__l5e/assets-v1/0199ba31-5e1b-4891-b4af-d271f59a62dc/monopoly-dash.mp4",
  },
  {
    title: "Running Man",
    description: "Facilitated station challenges with an active pace.",
    poster: "/images/service-thumbnails/running-man-tn.png",
    videoUrl: "/__l5e/assets-v1/1f7d858a-40c7-493e-ad1d-b239c73cc6fe/running-man.mp4",
  },
  {
    title: "Sotong Game",
    description: "A sequence of accessible multi-stage challenges.",
    poster: "/images/service-thumbnails/sotong-game-tn.jpg",
    videoUrl: "/__l5e/assets-v1/9ec7b422-594f-44fd-9abc-6ff7b15f0413/sotong-game.mp4",
  },
  {
    title: "Minute To Win It",
    description: "Quick competitive rounds for broad participation.",
    poster: "/images/service-thumbnails/mtwi-tn.png",
    videoUrl: "/videos/mtwi.mp4",
  },
  {
    title: "Overseas Retreat",
    description: "Team time and shared experiences beyond Singapore.",
    poster: "/images/services/overseas-retreats/gallery-2.jpg",
    videoUrl: "/videos/overseas-retreat-bintan.mp4",
  },
];

type VideoHighlight = (typeof videoHighlights)[number];

export const VideoHighlights = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoHighlight | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedVideo]);

  return (
    <section className="bg-secondary/35 py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">See the events move</p>
            <h2 className="mt-4 font-display text-3xl font-black leading-tight text-foreground sm:text-5xl">
              Watch the Elluminate showreel.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              Photos show the setup. Video shows the pace, facilitation and way people actually take part.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-foreground shadow-xl">
            <video
              className="aspect-video w-full bg-foreground object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/services/amazing-race/hero.jpg"
              aria-label="Elluminate team-building event showreel"
            >
              <source src="/videos/elluminate-showreel.mp4" type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {videoHighlights.map((video) => (
            <button
              key={video.title}
              type="button"
              onClick={() => setSelectedVideo(video)}
              className="group overflow-hidden rounded-2xl border border-border bg-background text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-blue focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-4"
              aria-label={`Play ${video.title} event video`}
            >
              <span className="relative block aspect-video overflow-hidden bg-foreground">
                <img
                  src={video.poster}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  width={640}
                  height={360}
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-foreground/30 transition group-hover:bg-foreground/18" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition group-hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </span>
              </span>
              <span className="block p-5">
                <span className="block font-display text-lg font-black text-foreground">{video.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{video.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedVideo ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedVideo.title} video`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 sm:p-8"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setSelectedVideo(null);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              key={selectedVideo.videoUrl}
              className="aspect-video w-full rounded-2xl bg-foreground object-contain shadow-2xl"
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster={selectedVideo.poster}
            >
              <source src={selectedVideo.videoUrl} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
            <p className="mt-4 font-display text-xl font-black text-background">{selectedVideo.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};
