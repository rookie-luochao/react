import { Button, Empty, Input, message } from "antd";
import { useState } from "react";
import { flexCenterOpts } from "../../core/style/utils";
import { DiffComp } from "./Comp";
import { Dictionary } from "../../core/router/utils";
import { isEmpty } from "lodash-es";
import { dsc } from "../../core/style/defaultStyleConfig";
import SourceCodeUrlComp from "../../core/github";

export function DiffPage() {
  const [oldValueStr, setOldValueStr] = useState("");
  const [oldValue, setOldValue] = useState({} as Dictionary<any>);
  const [newValueStr, setNewValueStr] = useState("");
  const [newValue, setNewValue] = useState({} as Dictionary<any>);

  function submit() {
    if (!oldValueStr || !newValueStr) {
      message.warning("请填写对比的数据！");
      return;
    }

    try {
      setOldValue(JSON.parse(oldValueStr));
      setNewValue(JSON.parse(newValueStr));
    } catch (e) {
      console.log('error: ', e);
      message.warning("请检查数据格式正确性！");
    }
  }

  console.log('value', oldValue)

  return (
    <div>
      <div css={{ display: "flex" }}>
        <div css={{ width: "50%", marginRight: 6 }}>
          <Input.TextArea
            placeholder="请输入旧数据"
            rows={20}
            value={oldValueStr}
            onChange={(e) => setOldValueStr(e.target?.value)}
          />
        </div>
        <div css={{ width: "50%", marginLeft: 6 }}>
          <Input.TextArea
            placeholder="请输入新数据"
            rows={20}
            value={newValueStr}
            onChange={(e) => setNewValueStr(e.target?.value)}
          />
        </div>
      </div>
      <div css={[flexCenterOpts(), { height: 60, "& > * + *": { marginLeft: 8 } }]}>
        <Button 
          type="primary"
          onClick={submit}
        >
          对比
        </Button>
        <Button
          onClick={() => {
            setOldValueStr("");
            setOldValue({});
            setNewValueStr("");
            setNewValue({});
          }}
        >
          清空
        </Button>
        <SourceCodeUrlComp notIndexFile />
      </div>
      <div css={{ backgroundColor: dsc.color.bg, minHeight: 100, borderRadius: 6, padding: 12 }}>
        {!isEmpty(oldValue) && !isEmpty(newValue) ? (
          <DiffComp oldData={oldValue} newData={newValue} />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无对比结果" />
         )}
      </div>
    </div>
  )
}