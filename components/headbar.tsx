"use client";

import { Box } from "theme-ui";
import siteConfig from "../site.config";

export function StatusTag() {
  return (
    <Box sx={{ p: 3, color: "muted", fontSize: "body" }}>
      Cameron Kleiman is{" "}
      {siteConfig.upTo[Math.floor(Math.random() * siteConfig.upTo.length)]}
    </Box>
  );
}
