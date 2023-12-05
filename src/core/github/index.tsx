import { Button } from "antd";
import { capitalize } from "lodash-es";
import { useLocation } from "react-router-dom";

/*
  path: 仓库文件夹路径
  notIndex: 默认根据路由path匹配src/pages下面模块的index.tsx文件，非index.tsx文件则根据路由path匹配文件
*/
export default function SourceCodeUrlComp({ path, notIndexFile }: { path?: string; notIndexFile?: boolean; }) {
  const location = useLocation();
  const githubProjectUrl = "https://github.com/rookie-luochao/react/blob/master/";
  const pathname = location.pathname;
  let url = "";

  if (path) {
    url = `${githubProjectUrl}${pathname}`;
  } else if (notIndexFile) {
    const paths = pathname.split("/");
    url = `${githubProjectUrl}src/pages/${paths.slice(2, paths.length - 1).join("/")}/${capitalize(paths[paths.length - 1])}.tsx`;
  } else {
    const path = pathname.split("/").slice(2).join("/");
    url = `${githubProjectUrl}src/pages/${path}${path.endsWith("/") ? "" : "/"}index.tsx`;
  }

  return (
    <Button
      type="link"
      onClick={() => {
        globalThis.open(url);
      }}
    >
      查看源码
    </Button>
  )
}