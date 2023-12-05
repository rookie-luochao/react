import { useState } from "react";
import { Button, Input } from "antd";
import { flexCenterOpts } from "../../core/style/utils";
import JsonView from 'react-json-view'
import { Dictionary } from "../../core/router/utils";
import { dsc } from "../../core/style/defaultStyleConfig";
import SourceCodeUrlComp from "../../core/github";

export function JsonHome() {
  const [value, setValue] = useState("");
  const [formatValue, setFormatValue] = useState({} as Dictionary<any>);

  function format(value: string) {
    try {
      setFormatValue(JSON.parse(value || "{}"))
    } catch (e) {
      console.log("error: ", e);
    }
  }

  return (
    <div>
      <div css={{ marginBottom: 16 }}>
        <Input.TextArea rows={20} value={value} onChange={(e) => setValue(e.target?.value)} />
      </div>
      <div css={[flexCenterOpts(), { marginBottom: 16, "& > * + *": { marginLeft: 8 } }]}>
        <Button 
          type="primary"
          onClick={() => {
            format(value);
          }}
        >
          格式化
        </Button>
        <SourceCodeUrlComp />
      </div>
      <div css={{ backgroundColor: dsc.color.bg, padding: 8 }}>
        <JsonView src={formatValue} />
      </div>
    </div>
  )
}