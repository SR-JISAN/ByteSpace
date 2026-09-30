import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-white px-6 py-16">
      
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c5ff00]/10 blur-3xl" />

        <div className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-[#c5ff00]" />
        <div className="absolute right-[12%] top-[30%] h-2 w-2 rounded-full bg-[#c5ff00]" />
        <div className="absolute bottom-[20%] left-[18%] h-2 w-2 rounded-full bg-[#c5ff00]" />
      </div>

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center">
        {/* 404 */}
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-[clamp(8rem,30vw,18rem)] font-black leading-none text-[#c5ff00]/20 blur-sm"
          >
            404
          </span>

          <h1 className="text-[clamp(8rem,30vw,18rem)] font-black leading-none tracking-[-0.08em] text-[#252525]">
            404
          </h1>
        </div>

       
        <div className="mt-2">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-[#dcdcdc] bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#c5ff00]" />
            <span className="text-xs font-medium text-[#444]">
              Page not found
            </span>
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-[#252525] sm:text-3xl">
            Looks like you&apos;re lost.
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#666] sm:text-[15px]">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved. Let&apos;s get you back to ByteSpace.
          </p>

       
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#c5ff00] px-7 text-sm font-semibold text-[#171717] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b9f000] hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
