/* eslint-disable react/prop-types */
import clsx from "clsx";

const Typography = ({ children, tag, variant = "primary", customClasses }) => {
  const Component = tag || "p";

  const className = clsx({
    "text-noir-corbeau": variant === "noir-corbeau",
    "text-vert-naturaliste": variant === "vert-naturaliste",
    "text-bleu-ciel": variant === "bleu-ciel",
    "text-blanc-tourterelle": variant === "blanc-tourterelle",
    "text-blanc-plume": variant === "blanc-plume",
    "text-h1": tag === "h1",
    "text-h2-medium": tag === "h2",
    "text-h3": tag === "h3",
    "text-h4": tag === "h4",
    "text-body": tag === "body",
    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};

export default Typography;
