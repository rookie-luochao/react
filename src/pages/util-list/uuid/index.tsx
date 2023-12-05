import { Button, Card, Space } from "antd";
import { useState } from "react";
import { v1, v4 } from "uuid";
import copy from "copy-to-clipboard";
import SourceCodeUrlComp from "../../../core/github";

export function UUIDPage() {
  const [v1UUID, setV1UUID] = useState("");
  const [v4UUID, setV4UUID] = useState("");

  return (
    <Space direction="vertical" style={{ display: 'flex' }}>
      <Card 
        title="v1 uuid生成器"
        extra={
          <>
            <Button type="primary" onClick={() => setV1UUID(v1())} style={{ marginRight: 6 }}>生成</Button>
            <Button onClick={() => copy(v1UUID)}>拷贝</Button>
            <SourceCodeUrlComp />
          </>
        }
      >
        {v1UUID}
      </Card>
      <Card 
        title="v4 uuid生成器"
        extra={
          <>
            <Button type="primary" onClick={() => setV4UUID(v4())} style={{ marginRight: 6 }}>生成</Button>
            <Button onClick={() => copy(v4UUID)}>拷贝</Button>
            <SourceCodeUrlComp />
          </>
        }
      >
        {v4UUID}
      </Card>
    </Space>
  )
}