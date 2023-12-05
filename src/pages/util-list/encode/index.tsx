import { Button, Input, Select, message } from "antd";
import { includes, map, pick } from "lodash-es";
import { useMemo, useState } from "react";
import { flexCenterOpts } from "../../../core/style/utils";
import SourceCodeUrlComp from "../../../core/github";

export function URLEncodePage() {
  enum ActionType {
    decodeURI = "decodeURI",
    decodeURIComponent = "decodeURIComponent",
    encodeURI = "encodeURI",
    encodeURIComponent = "encodeURIComponent",
  }
  const decodeEnum = pick(ActionType, [ActionType.decodeURI, ActionType.decodeURIComponent]);
  const [value, setValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [actionType, setActionType] = useState(ActionType.decodeURIComponent);
  const isDecodeEnum = includes(decodeEnum, actionType);
  const placeholder = `请输入${isDecodeEnum ? "解码" : "编码"}字符串`;

  const actionTypeOptions = useMemo(() => {
    return map(ActionType, item => ({
      label: item,
      value: item,
    }));
  }, []);

  const submit = () => {
    if (!value) {
      return message.warning(placeholder);
    }

    switch (actionType) {
      case ActionType.decodeURI:
        setTargetValue(decodeURI(value));
        break;
      case ActionType.decodeURIComponent:
        setTargetValue(decodeURIComponent(value));
        break;
      case ActionType.encodeURI:
        setTargetValue(encodeURI(value));
        break;
      case ActionType.encodeURIComponent:
        setTargetValue(encodeURIComponent(value));
        break;
      default:
        console.log(`无效的${isDecodeEnum ? "解码" : "编码"}方式，请检查！`);
    }
  }

  return (
    <div>
      <div css={{ marginBottom: 16 }}>
        <Input.TextArea placeholder={placeholder} rows={13} value={value} onChange={(e) => setValue(e.target?.value)} />
      </div>
      <div css={[flexCenterOpts(), { marginBottom: 16, "& > * + *": { marginLeft: 8 } }]}>
        <Select
          style={{ width: 200 }}
          value={actionType}
          options={actionTypeOptions}
          onSelect={(value) => {
            setActionType(value);
            setTargetValue("");
          }}
        />
        <Button
          type="primary"
          onClick={submit}
        >
          确定
        </Button>
        <Button 
          onClick={() => {
            setValue("");
            setTargetValue("");
          }}
        >
          清空
        </Button>
        <SourceCodeUrlComp />
      </div>
      <div>
        <Input.TextArea rows={13} value={targetValue} />
      </div>
    </div>
  )
}