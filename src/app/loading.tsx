"use client";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-7.25 items-center">
            <div className="absolute left-0 top-0 h-7.25 w-2.75 rounded-bl-[9px] rounded-br-[9px] rounded-tl-[3px] bg-[#c5ff00]" />
            <div className="absolute bottom-0 left-2.25 h-5 w-5 rounded-r-[15px] rounded-tl-lg rounded-br-[15px] bg-[#c5ff00]" />
            <div className="absolute bottom-1.75 left-3.25 h-2 w-2 rounded-full bg-white" />
          </div>

          <span className="text-[25px] font-bold tracking-[-1.3px] text-[#252525]">
            ByteSpace
          </span>
        </div>
        <div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-[#eeeeee]">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-[#c5ff00]" />
        </div>
      
        <div className="mt-8 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#c5ff00]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#c5ff00] [animation-delay:150ms]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#c5ff00] [animation-delay:300ms]" />
        </div>
      </div>
    </main>
  );
}