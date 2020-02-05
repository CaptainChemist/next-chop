import * as React from 'react';
import * as _ from 'lodash';
import { Row, Col, Button, Table, Input, Dropdown } from 'antd';
import { MenuList } from './MenuList';

type IngredientsProps = {
  names?: string[];
  values?: [{ amount: string; unit: string; type: string }];
  handleAddIngredient: (event: any) => void;
  handleDeleteIngredient: (event: any) => void;
  handleInputChange: (event: any) => void;
  handleDropdownChange: (event: any) => void;
};

const units = ['-', 'ounce', 'lb', 'cup', 'tb', 'tsp', 'g', 'kg'];

export const GenerateIngredients = ({
  names,
  values,
  handleAddIngredient,
  handleDeleteIngredient,
  handleInputChange,
  handleDropdownChange,
}: IngredientsProps) => {
  const columns = _.concat(
    names.map(name => ({
      title: `${name}`,
      key: `${name}`,
      render: (ingredient, _record, index: number) => {
        return name === 'unit' ? (
          <Dropdown
            overlay={
              <MenuList
                iterableList={units}
                name={`ingredients[${index}].${name}`}
                handleDropdownChange={handleDropdownChange}
              />
            }
            placement="bottomLeft"
          >
            <Button>{ingredient[name]}</Button>
          </Dropdown>
        ) : (
          <Input
            value={ingredient[name]}
            placeholder={`${name}`}
            name={`ingredients[${index}].${name}`}
            onChange={handleInputChange}
          />
        );
      },
    })),
    [
      {
        title: 'delete',
        key: 'delete',
        render: (_ingredient, _record, index: number) => (
          <Button
            onClick={handleDeleteIngredient}
            type="danger"
            shape="circle"
            size="small"
            name={`${index}`}
          >
            -
          </Button>
        ),
      },
    ],
  );

  return (
    <React.Fragment>
      <Row>
        <Col span={12} offset={6}>
          <p>
            <Button
              onClick={handleAddIngredient}
              type="primary"
              shape="circle"
              size="small"
            >
              +
            </Button>
            ingredients:
          </p>
        </Col>
      </Row>
      {values.length > 0 ? (
        <Row>
          <Col span={12} offset={6}>
            <Table
              dataSource={values}
              columns={columns}
              pagination={{ pageSize: 25 }}
            />
          </Col>
        </Row>
      ) : null}
    </React.Fragment>
  );
};
