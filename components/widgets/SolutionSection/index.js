import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";

const SPLIT_NUMBER = 3;

export const SolutionSection = () => {
  const getTileX = (i, horizontalSplit, verticalSplit) => {
    const currentRow = Math.floor(i / horizontalSplit) + 1;
    const tileHeight = 100 / verticalSplit;
    return tileHeight * currentRow - tileHeight;
  };

  const getTileY = (i, horizontalSplit) => {
    const currentCol = (i % horizontalSplit) + 1;
    const tileWidth = 100 / horizontalSplit;
    return (100 / horizontalSplit) * currentCol - tileWidth;
  };

  const tiles = Array.from({ length: SPLIT_NUMBER });

  return (
    <div id="solutionSection">
      <LayoutSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <div className="lg:pr-[120px]">
            <ContentSection
              vertical
              badgeContent="solutions"
              title={
                <>
                  <p className="sm:block md:hidden lg:block">
                    We assist buyers
                    <br />
                    in finding their
                    <br />
                    <span className="text-primary">dream homes.</span>
                  </p>

                  <p className="sm:hidden md:block lg:hidden">
                    We assist buyers
                    <br />
                    in finding their&nbsp;
                    <span className="text-primary">dream homes.</span>
                  </p>
                </>
              }
              buttonContent="get started free"
              content="Our agents will guide you through the entire buying process, from property"
            />
          </div>
          <div className="imageWrapper overflow-hidden relative inline-block	">
            <Image
              src="/solution.webp"
              width={0}
              height={0}
              sizes="100vw"
              alt="solution-img"
              className="mx-auto w-[70%] lg:w-[100%]"
            />

            {tiles.map((t, i) => (
              <div
                key={i}
                className="tile absolute inset-y-0 border-4 border-white "
                style={{
                  width: `${100 / 3}%`,
                  height: `${100}%`,
                  top: `${getTileX(i, 3, 1)}%`,
                  left: `${getTileY(i, 3)}%`
                }}
              ></div>
            ))}
          </div>
        </div>
      </LayoutSection>
    </div>
  );
};
