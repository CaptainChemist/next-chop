import { Form, Row, Col, Button } from 'antd';
import { submitForm } from '../utils/submitForm';
import {
  GenerateInput,
  GenerateTextInput,
  GenerateDropdown,
} from './GenerateFields';

export const CreateRecipe = () => {
  const initiateCreateRecipe = () => {
    console.log('submitted Form');
    console.log(inputs);
  };

  const {
    inputs,
    handleInputChange,
    handleDropdownChange,
    handleSubmit,
  } = submitForm(
    {
      title: '',
      description: '',
      content: '',
      status: 'DRAFT',
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
      <GenerateInput
        name="description"
        value={inputs.description}
        handleInputChange={handleInputChange}
      />
      <GenerateTextInput
        name="content"
        value={inputs.content}
        handleInputChange={handleInputChange}
      />
      <Row>
        <GenerateDropdown
          name="status"
          value={inputs.status}
          handleDropdownChange={handleDropdownChange}
        />
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
