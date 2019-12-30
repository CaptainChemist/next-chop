import { Row, Col, Form, Input, Dropdown, Button } from 'antd';
import { MenuList } from './MenuList';

type InputType = {
  name: string;
  value: string;
  handleInputChange?: (event: any) => void;
  handleDropdownChange?: (event: any) => void;
};

export const GenerateInput = ({
  name,
  value,
  handleInputChange,
}: InputType) => (
  <Row>
    <Col span={12} offset={6}>
      <Form.Item label={`${name}`}>
        <Input
          placeholder={`${name}`}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
        />
      </Form.Item>
    </Col>
  </Row>
);

export const GenerateTextInput = ({
  name,
  value,
  handleInputChange,
}: InputType) => (
  <Row>
    <Col span={12} offset={6}>
      <Form.Item label={`${name}`}>
        <Input.TextArea
          placeholder={`${name}`}
          name={`${name}`}
          value={value}
          onChange={handleInputChange}
        />
      </Form.Item>
    </Col>
  </Row>
);

const status = ['DRAFT', 'PUBLISHED', 'ARCHIVED'];

export const GenerateDropdown = ({
  name,
  value,
  handleDropdownChange,
}: InputType) => (
  <Col span={4} offset={6}>
    <Form.Item label={`${name}`}>
      <Dropdown
        overlay={
          <MenuList
            iterableList={status}
            name={name}
            handleDropdownChange={handleDropdownChange}
          />
        }
        placement="bottomLeft"
      >
        <Button>{value}</Button>
      </Dropdown>
    </Form.Item>
  </Col>
);
