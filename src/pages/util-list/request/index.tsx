import { Button, Card, Spin } from "antd";
import { CodeMarkDown } from "../../ui-list/markdown/Comp";
import { useQuery } from "@tanstack/react-query";
import { HelloGet } from "../../../api/hello";
import { useState } from "react";
import { sample } from "lodash-es";

export function RequestPage() {
  const getRequestDemo = `
  ~~~js
    // HelloGet是一个基于axios的promise请求
    export async function HelloGet(
      // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
      params: Api.HelloGetParams,
      options?: { [key: string]: any },
    ) {
      return request<Api.HelloResp>('/gin-demo-server/api/v1/hello', {
        method: 'GET',
        params: {
          ...params,
        },
        ...(options || {}),
      });
    }

    // 自动调用接口获取数据
    const { data, isLoading } = useQuery({
      queryKey: ["hello", name],
      queryFn: () => {
        return HelloGet({ name: name });
      },
    });

    // dom
    <Spin spinning={isLoading}>
      {data?.data}
    </Spin>
  ~~~
  `;
  const names = ["张三", "李四", "王五", "赵六", "孙七", "刘八"];
  const [name, setName] = useState(names[0]);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["hello", name],
    queryFn: () => {
      return HelloGet({ name: name });
    },
  });

  const postRequestDemo = `
  ~~~js
    export async function HelloPost(body: Api.HelloPostParam, options?: { [key: string]: any }) {
      return request<Api.HelloResp>('/gin-demo-server/api/v1/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
      });
    }

    // 提交编辑数据
    const { mutate, isLoading } = useMutation({
      mutationFn: HelloPost,
      onSuccess(data) {
        setName(data?.data || "");
      },
      onError() {
        // 清除queryKey为hello的接口数据缓存，自动重新获取接口数据
        queryClient.invalidateQueries({ queryKey: ['hello'] });
      }
    })

    mutate({ name: "lisi" });
  ~~~
  `;

  const requestDemo = `
  ~~~js
    // 自动调用接口获取数据
    const { data, isLoading } = useQuery({
      queryKey: ["hello", name],
      queryFn: () => {
        return HelloGet({ name: name });
      },
    });

    // 提交编辑数据
    const { mutate, isLoading } = useMutation({
      mutationFn: HelloPost,
      onSuccess(data) {
        setName(data?.data || "");
      },
      onError() {
        // 清除queryKey为hello的接口数据缓存，自动重新获取接口数据
        queryClient.invalidateQueries({ queryKey: ['hello'] });
      }
    })

    mutate({ name: "lisi" });
  ~~~
  `;

  return (
    <div css={{ "& > * + *": { marginTop: 12 } }}>
      <Card title="获取数据" bordered={false}>
        <CodeMarkDown dataSource={getRequestDemo} />
        <div css={{ display: "flex", margin: "1em 0em", "& > * + *": { marginLeft: "1em" } }}>
          <Button type="primary" onClick={() => refetch()}>
            重新获取
          </Button>
          <Button onClick={() => setName(sample(names) || names[0])}>变换请求</Button>
        </div>
        <Spin spinning={isLoading}>
          <div>接口返回数据：{data?.data}</div>
        </Spin>
      </Card>
      <Card title="更新数据" bordered={false}>
        <CodeMarkDown dataSource={postRequestDemo} />
      </Card>
      <Card title="接口联动" bordered={false}>
        <CodeMarkDown dataSource={requestDemo} />
      </Card>
    </div>
  );
}
