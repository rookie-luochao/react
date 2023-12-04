import { flexCenterOpts } from "../../core/style/utils";

export default function Dashboard() {
  const extraHeight = 48;

  return (
    <div css={{ height: `calc(100% - ${extraHeight}px)`, paddingBottom: 24, position: "relative" }}>
      该面板功能正在研发中！
      <div css={[flexCenterOpts(), { width: "100%", height: extraHeight, position: "absolute", bottom: "-72px" }]}>
        <span id="busuanzi_container_site_pv">本站总访问量&nbsp;<span id="busuanzi_value_site_pv" />&nbsp;次</span>
      </div>
    </div>
  );
}