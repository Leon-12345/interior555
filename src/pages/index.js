import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import ProfilePic from "@/../public/images/profile/sand.jpg";
import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>555 Interior</title>
        <meta name="description" content="Interior 555" />
      </Head>
      <TransitionEffect />
      <main className="text-2xl flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div
            className="flex items-center justify-between w-full lg:flex-col bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/profile/sand.jpg)",
              sizes:
                "(max-width:1920px) 100vw, (max-width:1920px) 100vw, 100vw",
            }}
          >
            <div className="w-full h-96 flex flex-col justify-center items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Luxury Made Simple"
                className="text-center xl:!text-6xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl "
              />
              <p className="my-4 text-base font-medium text-center">
                Nature Inspirations. Being inexplicably drawn to design that
                stays gracefully relevant despite durée, we are convinced that
                there is luxury in simplicity.
              </p>
            </div>
          </div>

          <div className="flex pt-24 items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt="background"
                className="w-full h-auto lg:hidden md:!inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Luxury Made Simple"
                className="pl-8 text-left xl:!text-3xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl "
              />
              <p className="pl-8 my-4 text-base font-medium">
                Nature Inspirations. Being inexplicably drawn to design that
                stays gracefully relevant despite durée, we are convinced that
                there is luxury in simplicity.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
