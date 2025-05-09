import SubFooter1 from "./SubFooter1";
import SubFooter2 from "./SubFooter2";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <SubFooter1 />
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <SubFooter2 />
      </div>
    </footer>
  );
}
