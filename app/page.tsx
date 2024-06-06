import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: '400', subsets: ["latin"] });

interface FAQItem {
  title: string,
  children: any
}

const FAQSection = ({ title, children }: FAQItem) => {
  return (
    <div className="intro max-w-[75vw] mt-0 m-8 text-center">
      <h1 className={`${robotoMono.className} text-2xl mb-4`}>{title}</h1>
      <p className={`${roboto.className} text-xl`}>
        {children}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">

      {/* INTRO */}

      <div className="intro text-2xl max-w-[75vw] m-32 text-center">
        <p className={`${roboto.className}`}>
          A new era of business, where those who invest or work with us earn a slice of the pie, profits that aren&apos;t reinvested may then be distributed to owners on a regular basis.
        </p>
      </div>

      {/* FAQ */}
      <h1 className="text-4xl mb-8">FAQs</h1>

      <FAQSection title="Why invest with us?">
        Crypto is a very dangerous technology, there are good actors and and bad actors everywhere. Altruistic Finance is set up to be a non-domiciled business that shares all profits earned with it&apos;s investors, developers and anyone else otherwise involved with the business.
      </FAQSection>

      <FAQSection title="How is your portfolio structured?">
        Primarily our assets are held in <span className="text-orange-400">Liquidity Pools</span> spanning multiple blockchains and assets, this helps us mitigate single blockchain or asset risk, allowing us to provide growth and distributions for our investors. Although some assets may temporarily go down, over time the crypto space does tend to trend upwards. If you would like more information you can visit the <Link href='/treasury'>treasury page</Link>.
      </FAQSection>

      <FAQSection title="Do I have to pay taxes?">
        Whether you have to pay any taxes on the income you receive depends entirely on your country of origin/domicile, we cannot provide advice on this aspect, if you are unsure you should contact a local tax advisor for support.
      </FAQSection>

    </main>
  );
}
