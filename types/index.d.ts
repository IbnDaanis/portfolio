declare module "*.scss";

declare module "*.png";
declare module "*.jpg";
declare module "*.json";
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "hover-effect";
