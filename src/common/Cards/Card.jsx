import UptimeIcon from "../../svg/UptimeIcon";
export default function Card({title, subtitle, children}) {
  return (
    <div>
      {children}
      <h3 className="mb-2 text-2xl font-bold dark:text-white">{title}</h3>
      <p className="font-light text-gray-500 dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}
