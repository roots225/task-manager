/// <reference types="vite/client" />

declare module "react/jsx-runtime";
declare module "react-dom/client";
declare module "react";
declare module "react-router-dom";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
