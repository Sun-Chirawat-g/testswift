import React from "react";
import { Typography, Divider, Col, Row, Select } from "antd";
import { Button, Space } from "antd";

const { Title } = Typography;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Layout: React.FC = () => (
  <>
    <Row justify={"space-between"}>
      <Col >
        <Title>Layout & Style</Title>
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
   

    <div id="center">
      <Space wrap>
        <Button id="Button" size="large">
          <div id="left-triangle"></div>
          <div id="span"> Move left</div>
        </Button>
        <Button id="Button" size="large">
          <Row>
            <div id="up-triangle"></div> <div id="down-triangle"></div>
          </Row>

          <div id="span"> Move position</div>
        </Button>
        <Button id="Button" size="large">
          <div id="right-triangle"></div>
          <div id="span"> Move right</div>
        </Button>
      </Space>
      <Divider />

      <Space wrap>
        <Button id="Button" size="large">
          <div id="left-triangle"></div>
          
        </Button>
        <Button id="Button" size="large">
          <Row>
            <div id="up-triangle"></div> <div id="down-triangle"></div>
          </Row>

          
        </Button>
        <Button id="Button" size="large">
          <div id="right-triangle"></div>
         
        </Button>
      </Space>
    </div>
  </>
);

export default Layout;
