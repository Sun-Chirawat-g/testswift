import { Card, Col, Row, Select } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import React, { useState } from "react";
import Link from "next/link";
import { Value } from "sass";

// const [Lng,setLng] = useState(null)

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => (
  <>
   <Row justify={"space-between"}>
      <Col >
       
      </Col>

      <Col >
        <Row >
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

    <div id="main">
      <Row gutter={16}>
        <Col span={8}>
          <Link href="/layout">
            <Card title="Test 1" bordered={false}>
              Layout & Style
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Card title="Test 2" bordered={false}>
            Connect API
          </Card>
        </Col>
        <Col span={8}>
         <Link href='/from'>
          <Card title="Test 3" bordered={false}>
            From & Table
          </Card>
          </Link>
        </Col>
      </Row>
    </div>
  </>
);

export default App;
