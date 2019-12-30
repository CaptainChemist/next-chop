import { Form, Row, Col, Button } from 'antd';
import { submitForm } from '../utils/submitForm';

export const CreateRecipe = () => {
  const initiateCreateRecipe = () => {
    console.log('submitted Form');
  };

  const { inputs, handleSubmit } = submitForm({}, initiateCreateRecipe);
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col span={16} />
        <Col span={4}>
          <Form.Item label="Create Recipe">
            <Button type="primary" htmlType="submit">
              Create Recipe
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
