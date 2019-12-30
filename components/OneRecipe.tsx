import { Recipe } from '../generated/apollo-components';
import { Row, Col, List } from 'antd';
import * as _ from 'lodash';
import GraphImg from 'graphcms-image';
import styled from 'styled-components';
import { generateUnit } from '../utils/generateUnit';
import { GenerateContent } from './GenerateContent';
import { LikeButton } from './LikeButton';

const StyledOneRecipe = styled(Col)`
  ${({ theme }) => `
        margin-top: ${theme['margin-small']};
        min-height: 320px;
        border-radius: 8px;
        box-shadow: 0 0 16px ${theme['border-color']};
        border: ${theme['border-width']} solid ${theme['border-color']};

        .graph-image-outer-wrapper {
            border: 0px;
            .graphcms-image-wrapper {
                border: 0px;
                position: relative;
                float: left;
                width: 100%;
                height: 400px;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                background-size: cover;
                img {
                    text-align: center;
                    border-radius: 6px 6px 0px 0px;
                }
            }
        }

        h1,
        h2 {
            padding-top: ${theme['margin-small']};
            text-align: left;
        }
        h3 {
            text-align: left;
        }
    `}
`;

export const OneRecipe = ({ recipe }: { recipe: Recipe }) => {
  const ingredients = _.get(recipe, 'ingredients');
  return (
    <Row>
      <StyledOneRecipe
        sm={{ span: 20, offset: 2 }}
        md={{ span: 16, offset: 4 }}
        lg={{ span: 12, offset: 6 }}
      >
        <Row>
          <Col span={24}>
            <GraphImg image={recipe.images} />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h1>
              {recipe.title}
              <LikeButton userLikes={recipe.userLikes} recipeId={recipe.id} />
            </h1>
            <p>{recipe.description}</p>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <List
              header={<h3>Ingredients:</h3>}
              bordered
              dataSource={
                ingredients || [{ type: 'None added', amount: 0, unit: '' }]
              }
              renderItem={({ amount, unit, type }) => (
                <List.Item>
                  {ingredients
                    ? `${amount} ${generateUnit(unit, amount)} ${type}`
                    : `${type}`}
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <h2>Directions:</h2>
            <GenerateContent textString={recipe.content} />
          </Col>
        </Row>
      </StyledOneRecipe>
    </Row>
  );
};
