/* eslint-disable react/prop-types */
import clsx from "clsx";

const Typography = ({ children, tag, variant, reverse, customClasses }) => {
  const Component = tag || "p";

  const className = clsx({
    "text-ui-noir-corbeau bg-ui-blanc-tourterelle": variant === "noir-corbeau" && !reverse,
    "text-blanc-plume bg-ui-vert-naturaliste": variant === "noir-corbeau" && reverse,
    "text-ui-vert-naturaliste bg-blanc-tourterelle": variant === "vert-naturaliste",
    "font-poppins text-lg text-ui-vert-naturaliste": tag === "h3",
    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};

export default Typography;
