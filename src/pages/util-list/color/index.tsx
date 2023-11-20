import { Button, Card, Input, Space } from "antd";
import { useState } from "react";
import { HexToRgb, RgbToHex } from "./util";
import copy from "copy-to-clipboard";

export function ColorPage() {
  const [rgbValue, setRgbValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [rgbValue2, setRgbValue2] = useState("");
  const [hexValue2, setHexValue2] = useState("");

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Card 
        title="RGB转十六进制"
        extra={
          <Button onClick={() => copy(hexValue)}>拷贝</Button>
        }
      >
        <div css={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
          <span css={{ width: 100 }}>RGB颜色值：</span>
          <Input css={{ width: 200 }} value={rgbValue || undefined} onChange={(e) => setRgbValue(e.target?.value)} placeholder="请输入RGB颜色值" />
          <Button css={{ marginLeft: 6 }} type="primary" onClick={() => setHexValue(RgbToHex(rgbValue))}>转换成十六进制</Button>
        </div>
        <div css={{ display: "flex", alignItems: "center" }}>
          {hexValue}
          <div css={{ width: 50, height: 30, backgroundColor: hexValue, marginLeft: 20, borderRadius: 6 }} />
        </div>
      </Card>
      <Card 
        title="十六进制转RGB"
        extra={
          <Button onClick={() => copy(rgbValue2)}>拷贝</Button>
        }
      >
        <div css={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
          <span css={{ width: 120 }}>十六进制颜色值：</span>
          <Input css={{ width: 200 }} value={hexValue2 || undefined} onChange={(e) => setHexValue2(e.target?.value)} placeholder="请输入十六进制颜色值" />
          <Button css={{ marginLeft: 6 }} type="primary" onClick={() => setRgbValue2(HexToRgb(hexValue2))}>转换成RGB</Button>
        </div>
        <div css={{ display: "flex", alignItems: "center" }}>
          {rgbValue2}
          <div css={{ width: 50, height: 30, backgroundColor: rgbValue2, marginLeft: 20, borderRadius: 6 }} />
        </div>
      </Card>
    </Space>
  )
}