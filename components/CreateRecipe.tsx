import { Form, Row, Col, Button } from 'antd';
import { submitForm } from '../utils/submitForm';
import { GenerateInput } from './GenerateFields';

export const CreateRecipe = () => {
  const initiateCreateRecipe = () => {
    console.log('submitted Form');
  };

  const { inputs, handleInputChange, handleSubmit } = submitForm(
    {
      title: '',
    },
    initiateCreateRecipe,
  );
  return (
    <Form onSubmit={handleSubmit}>
      <GenerateInput
        name="title"
        value={inputs.title}
        handleInputChange={handleInputChange}
      />
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
