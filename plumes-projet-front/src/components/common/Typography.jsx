/* eslint-disable react/prop-types */
import clsx from "clsx";

const Typography = ({ children, tag, variant, reverse, customClasses }) => {
  const Component = tag || "p";

  const className = clsx({
    "text-noir-corbeau bg-blanc-plume": variant === "noir-corbeau" && !reverse,
    "text-blanc-plume bg-noir-corbeau": variant === "noir-corbeau" && reverse,

    "text-vert-naturaliste": variant === "vert-naturaliste",
    
    "text-bleu-ciel bg-vert-naturaliste": variant === "bleu-ciel" && !reverse,
    "text-vert-naturaliste bg-bleu-ciel": variant === "bleu-ciel" && reverse,

    "text-blanc-tourterelle": variant === "blanc-tourterelle",
    "text-blanc-plume bg-vert-naturaliste": variant === "blanc-plume",
    
    
    
    "font-poppins text-lg text-blanc-plume": tag === "h3",
    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};

export default Typography;
