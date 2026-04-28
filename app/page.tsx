import ClientIntakeForm from "@/app/components/ClientIntakeForm";



export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(24,24,27,0.08),transparent_60%),radial-gradient(900px_500px_at_90%_10%,rgba(24,24,27,0.06),transparent_55%),linear-gradient(to_bottom,rgba(250,250,250,1),rgba(244,244,245,1))] dark:bg-[radial-gradient(1100px_600px_at_25%_-10%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(900px_520px_at_90%_10%,rgba(255,255,255,0.06),transparent_55%),linear-gradient(to_bottom,rgba(9,9,11,1),rgba(0,0,0,1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.08] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] dark:opacity-[0.10]" />
      </div>
   
      <main className="mx-auto  flex w-full max-w-7xl flex-1 flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <ClientIntakeForm />
      </main>
   
    </div>
  );
}
