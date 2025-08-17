import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  const mapUrl = "https://maps.app.goo.gl/LZoxW5cjLQ2FXeQz6";

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Find Us Here
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The event will be held at the vibrant campus of DY Patil College of Engineering, Akurdi.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-xl">
            <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
                <Image
                    src="/img.png"
                    width={1200}
                    height={600}
                    alt="Map of DYPCOE, Akurdi"
                    data-ai-hint="map screenshot"
                    className="aspect-video w-full object-cover"
                />
            </Link>
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
            <p className="text-lg font-medium">
                DY Patil College of Engineering, D. Y. Patil Educational Complex, Sector 29, Nigdi Pradhikaran, Akurdi, Pune, Maharashtra 411044
            </p>
            <Button size="lg" asChild className="mt-4">
                <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                </Link>
            </Button>
        </div>
      </div>
    </section>
  )
}
