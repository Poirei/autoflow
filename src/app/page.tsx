import NavBar from "@/components/navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampComponent } from "@/components/ui/lamp";
import { clients, products } from "@/lib/constants";
import { CheckIcon, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <NavBar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]" />
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center flex-col">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automated workflows; simplified.
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="md:mt-[18rem] mt-[-100px]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section className="min-h-[350px] flex w-full justify-center p-2 sm:p-10 items-center">
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-26rem]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ={50}
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what Autoflow is capable of. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 rounded-xl dark:text-white text-xs font-normal hover:border-b-2 hover:border-neutral-500 flex items-center"
                >
                  <span>Try now</span>
                  <ChevronRight strokeWidth={1} />
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 bg-black dark:bg-white rounded-xl dark:text-black text-white text-xs font-bold"
                >
                  Get started now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-[#e2cbff] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ={50}
              >
                Pro
                <h2 className="text-6xl">$29</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what Autoflow is capable of. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 rounded-xl dark:text-white text-xs font-normal hover:border-b-2 hover:border-neutral-500 flex items-center"
                >
                  <span>Try now</span>
                  <ChevronRight strokeWidth={1} />
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 bg-black dark:bg-white rounded-xl dark:text-black text-white text-xs font-bold"
                >
                  Get started now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                className="text-xl font-bold text-neutral-600 dark:text-white"
                translateZ={50}
              >
                Unlimited
                <h2 className="text-6xl">$99</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what Autoflow is capable of. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 rounded-xl dark:text-white text-xs font-normal hover:border-b-2 hover:border-neutral-500 flex items-center"
                >
                  <span>Try now</span>
                  <ChevronRight strokeWidth={1} />
                </CardItem>
                <CardItem
                  translateZ={20}
                  as={"button"}
                  className="px-4 py-2 bg-black dark:bg-white rounded-xl dark:text-black text-white text-xs font-bold"
                >
                  Get started now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
