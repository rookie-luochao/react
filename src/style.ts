import { CSSObject } from "@emotion/react";
import { flexOpts } from "./core/style/utils";

export const horizontalCenterStyle: CSSObject = flexOpts({ justifyContent: "center" });
export const horizontalSpaceBetweenStyle: CSSObject = flexOpts({ justifyContent: "space-between" });
export const verticalCenterStyle: CSSObject = flexOpts({ alignItems: "center" });

export const basicCenterLayoutStyle: CSSObject = {
  width: 1200,
  margin: "0 auto",
};

export const basicWrapStyle: CSSObject = {
  backgroundColor: "#fafafa",
  minHeight: globalThis.document.body.offsetHeight,
};

export const tagBasicStyle: CSSObject = {
  display: "inline-block",
  padding: "4px 6px",
  borderRadius: 2,
  marginRight: 6,
};

export const defaultTagStyle: CSSObject = {
  backgroundColor: "#fafafa",
  color: "rgba(0,0,0,.65)",
  border: "1px solid #d9d9d9",
};
