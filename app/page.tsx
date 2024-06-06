import { Inter, Roboto, Roboto_Mono } from "next/font/google";
const roboto = Roboto({ weight: '400', subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: '400', subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">

      <div className="flex flex-col items-center">
        <h2 className={`text-4xl  mb-8 ${robotoMono.className}`}>Altruistic Finance</h2>

        <div className="intro max-w-[800px] text-center">
          <p className={`${roboto.className}`}>
            A new era of business, where those who invest or work with us earn a slice of the pie, profits that aren't reinvested may then be distributed to owners on a regular basis.
          </p>
        </div>
      </div>

      

    </main>
  );
}
