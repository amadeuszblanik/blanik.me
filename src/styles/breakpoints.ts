/* eslint-disable no-magic-numbers */
export enum Breakpoints {
  Mobile = "Mobile",
  MobileXl = "MobileXl",
  Tablet = "Tablet",
  Desktop = "Desktop",
}

const breakpoints: { [key in Breakpoints]: string | 0 } = {
  [Breakpoints.Mobile]: 0,
  [Breakpoints.MobileXl]: "420px",
  [Breakpoints.Tablet]: "720px",
  [Breakpoints.Desktop]: "990px",
};

export default breakpoints;
