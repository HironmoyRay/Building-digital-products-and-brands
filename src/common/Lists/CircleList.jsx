import CircleIcon from "../../svg/CircleIcon";
export default function CircleList({ feature }) {
  return (
    <li className="flex space-x-3">
      <CircleIcon />
      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
        {feature}
      </span>
    </li>
  );
}
