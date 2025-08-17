import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const registerLink = "https://unstop.com/p/dyp-ventura-2025-entrepreneurship-development-cell-dypcoe-1542359";
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-48">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                VENTURA 2025
              </h1>
              <p className="text-xl font-semibold md:text-2xl font-headline">
                Pitch. Network. Innovate.
              </p>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:mx-0">
                Join us for a 2-day nationwide startup pitching event. Present your vision, connect with investors, and launch your venture.
              </p>
              <p className="font-bold text-lg text-foreground">September 15-16, 2025</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href={registerLink} target="_blank">Register Now</Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
             <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50"></div>
                <Image src="/logo.png" alt="Ventura Logo" width={400} height={400} className="relative drop-shadow-2xl dark:invert" priority style={{ height: 'auto' }} />
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
