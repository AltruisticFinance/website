import { Inter, Roboto, Roboto_Mono } from "next/font/google";

const roboto = Roboto({ weight: '400', subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: '400', subsets: ["latin"] });

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <h1 className={`text-4xl ${robotoMono.className}`}>Treasury</h1>

            <p className={`my-4 ${roboto.className}`}>Currently our treasury is empty while we build our portfolio and acquire assets.</p>
        </main>
    )
}