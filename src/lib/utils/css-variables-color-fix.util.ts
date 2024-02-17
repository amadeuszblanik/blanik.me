import { toRgb } from "bme-utils";

const util = (hex: string): string => {
  const rgb = toRgb(hex);

  return `${rgb?.r}, ${rgb?.g}, ${rgb?.b}`;
};

export default util;
