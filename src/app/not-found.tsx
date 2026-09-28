import Link from "next/link";


export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-16 bg_blue hero-grid ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      />

      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">
        <div className="relative">
          <h1 className="tech-grid text_lime font-bold text-[450px]">404</h1>

          <h2 className="
           mt-6 text-balance text-2xl font-semibold text-foreground sm:text-3xl">
            This Page You are looking for doesn't exist
          </h2>
        </div>

        {/* <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back on track.
        </p> */}

        {/* <NotFoundActions /> */}

        <p className="mt-10 text-sm text-muted-foreground">
          Need help?{" "}
          <Link
            href="/"
            className="font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            Return home
          </Link>
        </p>
      </div>
    </main>
  );
}
