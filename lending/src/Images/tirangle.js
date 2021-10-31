import React from "react";

const TriangleIcon = props => {
  const fill = props.fill ? props.fill : "white";
  console.log({ fill });
  return (
    <svg
      {...props}
      width="12"
      height="14"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6174 6.14852C11.2515 6.53906 11.2515 7.46094 10.6174 7.85149L2.27438 12.9894C1.60812 13.3997 0.749999 12.9204 0.749999 12.1379L0.75 1.86205C0.75 1.07959 1.60812 0.60026 2.27438 1.01057L10.6174 6.14852Z"
        fill={fill}
      />
    </svg>
  );
};

export default TriangleIcon;
