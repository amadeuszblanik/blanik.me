import breakpoints, { Breakpoints } from "@/styles/breakpoints";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "bme-utils";

const useHook = (breakpointToCheck: Breakpoints): boolean => {
  const [passed, setPassed] = useState<boolean>(false);

  const checkBreakpoint = useCallback(() => {
    const { innerWidth: windowWidth } = window;
    const breakpointToCheckValue = Number(breakpoints[breakpointToCheck].toString().replace("px", ""));

    setPassed(windowWidth >= breakpointToCheckValue);
  }, [setPassed, breakpointToCheck]);

  useEffect(() => {
    checkBreakpoint();

    window.addEventListener("resize", debounce(checkBreakpoint));

    return () => window.removeEventListener("resize", debounce(checkBreakpoint));
  }, [checkBreakpoint]);

  return passed;
};

export default useHook;
