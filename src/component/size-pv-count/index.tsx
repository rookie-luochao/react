import { flexCenterOpts } from "../../core/style/utils";
import { dsc } from "../../core/style/defaultStyleConfig";

export const sitePvCountCompHeight = 48;

export function SitePvCountComp() {
  return  (
    <div css={[flexCenterOpts, { width: "100%", height: sitePvCountCompHeight, position: "absolute", bottom: "0px", backgroundColor: dsc.color.bg }]}>
      <span id="busuanzi_container_site_pv">本站总访问量&nbsp;<span id="busuanzi_value_site_pv" />&nbsp;次</span>
    </div>
  )
}