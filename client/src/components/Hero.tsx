import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  height?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
  height = "min-h-[600px]",
}: HeroProps) {
  return (
    <div className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          data-testid="text-hero-title"
        >
          {title}
        </h1>
        <p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          {subtitle}
        </p>

        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button
                  size="lg"
                  className="rounded-full px-8"
                  data-testid="button-hero-primary"
                >
                  {primaryCTA.text}
                </Button>
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                  data-testid="button-hero-secondary"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
