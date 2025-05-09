import subFooter from "../../data/subFooter.json";

export default function SubFooter1() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
      {subFooter.map((item, index) => (
        <div key={index}>
          <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
            {item.title}
          </h3>
          <ul className="text-gray-500 dark:text-gray-400">
            {item.links.map((link, i) => (
              <li key={i} className="mb-4">
                <a href={link.url} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
