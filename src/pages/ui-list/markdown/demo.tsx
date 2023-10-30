import { CodeMarkDown } from ".";

export function MarkdownCodeDemo() {
  const markdown = `
  ~~~js
    console.log('It works!')
  ~~~
  `;

  return <CodeMarkDown dataSource={markdown} />;
}
