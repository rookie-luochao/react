import appConfig from "../../config";

export interface IConfig {
  appName: string;
  baseURL: string;
  version?: string;
  env?: string;
}

export function getConfig(): IConfig {
  const mateEnv = import.meta.env;
  const processEnv = process?.env;
  const defaultAppConfig = {
    appName: mateEnv?.appName || processEnv?.appName || "",
    version: mateEnv?.version || processEnv?.version || "",
    env: mateEnv?.env || processEnv?.env || "",
    baseURL: mateEnv?.baseURL || processEnv?.baseURL || "",
  };
  console.log("metaEnv", mateEnv);
  console.log("processEnv", processEnv);

  // 本地开发环境直接从根目录config文件读取, ci环境直接从mate标签读取, 通过容器环境变量写入html的mate标签
  // mate标签name为：app_config, content格式为：appName=webapp,baseURL=https://api.com
  if (mateEnv.DEV) {
    return appConfig;
  } else {
    const appConfigStr = getMeta("app_config");

    if (!appConfigStr) return defaultAppConfig;

    return parseEnvVar(appConfigStr);
  }
}

function getMeta(metaName: string) {
  const metas = document.getElementsByTagName("meta");

  for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") === metaName) {
      return metas[i].getAttribute("content");
    }
  }

  return "";
}

function parseEnvVar(envVarURL: string) {
  const arrs = envVarURL.split(",");

  return arrs.reduce((pre, item) => {
    const keyValues = item.split("=");

    return {
      ...pre,
      [keyValues[0]]: keyValues[1],
    };
  }, {} as IConfig);
}
