export default function TickList({ feature, children }) {
  return (
    <li className="flex items-center space-x-3">
      {children}
      <span>
        {feature.highlight ? (
          <>
            {feature.text}{" "}
            <span className="font-semibold">{feature.highlight}</span>
          </>
        ) : (
          feature.text
        )}
      </span>
    </li>
  );
}
