import { subjects } from "@/subjects/subjects";
import BoneComponent from "./stepsComponents/boneComponent";
import PathSteps from "../../public/pathSteps";
import PathVertical from "../../public/pathVertical";

export default function Steps() {
  return (
    <>
      <div className="w-full h-full overflow-auto flex items-center bg-[#42424299] backdrop-blur-3xl justify-center fixed  will-change-transform  top-0 left-0 z-20 gap-5">
        <div className="xl:flex hidden">
          <PathSteps />
        </div>
        <div className="h-full w-full absolute xl:flex hidden">
          {subjects.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == 0
                    ? "absolute 2xl:left-[18vw] 2xl:top-[32vh] xl:left-[4vw] xl:top-[32vh] lg:left-[2vw] lg:top-[32vh] md:left-[2vw] md:top-[32vh] sm:left-[2vw] sm:top-[32vh] z-50"
                    : index == 1
                    ? "absolute 2xl:left-[25vw] 2xl:top-[70vh] xl:left-[18vw] xl:top-[70vh] lg:left-[16vw] lg:top-[70vh] md:left-[14vw] md:top-[63vh] sm:left-[12vw] sm:top-[63vh] z-40"
                    : index == 2
                    ? "absolute 2xl:left-[43vw] 2xl:top-[24vh] xl:left-[40vw] xl:top-[24vh] lg:left-[38vw] lg:top-[24vh] md:left-[36vw] md:top-[28vh] sm:left-[36vw] sm:top-[28vh] z-30"
                    : index == 3
                    ? "absolute 2xl:left-[58vw] 2xl:top-[54vh] xl:left-[63vw] xl:top-[54vh] lg:left-[64vw] lg:top-[56vh] md:left-[64vw] md:top-[66vh] sm:left-[64vw] sm:top-[66vh] z-20"
                    : "absolute 2xl:left-[72vw] 2xl:top-[12vh] xl:left-[78vw] xl:top-[11vh] lg:left-[84vw] lg:top-[11vh] md:left-[68vw] md:top-[18vh] sm:left-[68vw] sm:top-[18vh] z-10"
                }
              >
                <BoneComponent text={item.title} slug={item.slug} />
              </div>
            );
          })}
        </div>
        <div className="h-full w-full absolute xl:hidden flex flex-col overflow-auto pt-10 pb-10">
          {subjects.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <BoneComponent text={item.title} slug={item.slug} />
                {index != subjects.length-1 ?
                <PathVertical/>:""
                }
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
