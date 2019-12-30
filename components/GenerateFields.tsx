import { Row, Col, Form, Input } from 'antd';

type InputType = {
  name: string;
  value: string;
  handleInputChange?: (event: any) => void;
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
