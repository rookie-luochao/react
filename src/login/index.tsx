import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../core/store";
import { Button, Checkbox, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { flexCenterOpts } from "../core/style/utils";
import { defaultLinkPath, defaultLoginInfo, defaultUserInfo } from "./config";

interface ILogin {
  username: string;
  password: string;
  remember?: boolean;
}

export default function Login() {
  const { updateLoginInfo } = useLoginStore((state) => state);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: ILogin) => {
    if (values.username === defaultUserInfo.username && values.password === defaultUserInfo.password) {
      updateLoginInfo(defaultLoginInfo);
      navigate(defaultLinkPath);
    } else {
      message.warning("用户名或密码错误，请检查！");
    }
  };

  return (
    <div
      css={[
        {
          height: globalThis.document.documentElement.clientHeight,
          backgroundImage: "url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        },
        flexCenterOpts(),
      ]}
    >
      <Form
        name="login"
        form={form}
        style={{ width: 356 }}
        initialValues={{ username: defaultUserInfo.username, password: defaultUserInfo.password, remember: true }}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={defaultUserInfo.username} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder={defaultUserInfo.password}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a css={{ float: "right" }} href="">
            忘记密码？
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%" }}>
            登录
          </Button>
          Or <a href="">立即注册!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
