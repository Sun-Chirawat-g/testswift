import React from "react";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Typography,
} from "antd";
import type { FormInstance } from "antd/es/form";

const { Option } = Select;

const { Title } = Typography;

const { RangePicker } = DatePicker;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};

const App: React.FC = () => {
  const formRef = React.useRef<FormInstance>(null);

  const onGenderChange = (value: string) => {
    switch (value) {
      case "mr":
        break;
      case "female":
        break;
      case "other":
        break;
      default:
        break;
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const onFill = () => {
    formRef.current?.setFieldsValue({ note: "Hello world!", gender: "male" });
  };

  return (
    <>
      <Row justify={"space-between"}>
        <Col>
          <Title>Layout & Style</Title>
        </Col>

        <Col>
          <Row>
            <Space wrap>
              <Select
                defaultValue="EN"
                style={{ width: 70 }}
                onChange={handleChange}
                options={[
                  { value: "en", label: "EN" },
                  { value: "th", label: "ไทย" },
                ]}
              />
            </Space>
          </Row>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Form
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{
            maxWidth: 2000,
            borderStyle: "solid",
            borderRadius: 8,
            padding: 8,
          }}
        >
          <Space size={"middle"}>
            <Form.Item
              name="Mr/Ms/Mrs"
              label="Mr/Ms/Mrs"
              rules={[{ required: true, message: "please fill blank" }]}
            >
              <Select
                placeholder="Select"
                onChange={onGenderChange}
                allowClear
                style={{ marginInline: 20 }}
              >
                <Option value="mr">Mr</Option>
                <Option value="ms">Ms</Option>
                <Option value="mrs">Mrs</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="First name"
              label="First name"
              rules={[
                { required: true, message: "Please input your First name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Last name"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Space>
          <Row>
            <Space>
              <Form.Item label="DatePicker" rules={[{ required: true }]}>
                <DatePicker />
              </Form.Item>
              <Form.Item
                name="region"
                label="region"
                rules={[{ required: true }]}
              >
                <Select
                placeholder="Select"
                onChange={onGenderChange}
                allowClear
                style={{ paddingLeft: 30 }}
              >
                <Option value="budda">budda</Option>
                <Option value="christ">christ</Option>
                <Option value="isalam">isalam</Option>
              </Select>
              </Form.Item>
            </Space>
          </Row>

              <Row>

              </Row>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
};

export default App;
