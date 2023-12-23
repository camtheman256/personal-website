/** @jsxImportSource theme-ui */
import { darken, lighten } from "@theme-ui/color";
import { Box } from "@theme-ui/components";
import { useThemeUI } from "@theme-ui/core";
import { useState } from "react";

export default function SlideTip({ children, title }) {
  const [state, setState] = useState({
    showTip: false,
  });

  const { colorMode } = useThemeUI();

  const tipTheme = "primary";

  return (
    <span
      onClick={() => setState({ showTip: !state.showTip })}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          display: "inline",
          backgroundColor: tipTheme,
          color: "background",
          p: "1px 3px",
          borderRadius: state.showTip ? "2px 0px 0px 2px" : "2px",
        }}
      >
        {children}
      </Box>
      {state.showTip && (
        <Box
          sx={{
            display: "inline",
            backgroundColor:
              colorMode == "light"
                ? darken(tipTheme, 0.1)
                : lighten(tipTheme, 0.1),
            color: "background",
            p: "1px 3px",
            borderRadius: "0px 2px 2px 0px",
          }}
        >
          {title}
        </Box>
      )}
    </span>
  );
}
