import service1 from "../../data/service1.json";
import SubService from "./SubService";

export default function Service1() {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Sub Service 1 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <SubService data={service1[0]} />
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="./src/assets/features/feature-1.png"
              alt="dashboard feature image"
            />
          </div>

          {/* Sub Service 2 */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="./src/assets/features/feature-2.png"
              alt="feature image 2"
            />
            <SubService data={service1[1]} />
          </div>
        </div>
      </section>
    </>
  );
}
