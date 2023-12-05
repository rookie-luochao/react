import { Card } from "antd";
import { CodeMarkDown } from "./Comp";
import SourceCodeUrlComp from "../../../core/github";

export function MarkdownCodePage() {
  const markdown = `
  ~~~js
    console.log('It works!')

    function demo() {
      console.log('this is demo func!')
    }
  ~~~
  `;

  return (
    <Card
      title="基于markdown语法的代码块展示器"
      extra={
        <SourceCodeUrlComp />
      }
    >
      <CodeMarkDown dataSource={markdown} />
    </Card>
  );
}
