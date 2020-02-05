import { Recipe } from '../generated/apollo-components';
import styled from 'styled-components';
import GraphImg from 'graphcms-image';
import { Col } from 'antd';
import Link from 'next/link';
import EllipsisText from 'react-ellipsis-text';
import { LikeButton } from './LikeButton';

const StyledRecipe = styled(Col)`
  ${({ theme }) => `
        padding: 0px ${theme['padding-small']};
        .card {
            cursor: pointer;
            margin-bottom: ${theme['margin-small']};
            height: 340px;
            border-radius: 8px;
            box-shadow: 0 0 16px ${theme['border-color']};
            border: ${theme['border-width']} solid ${theme['border-color']};
        }
        .graphcms-image-outer-wrapper{
            border: 0px;
            .graphcms-image-wrapper {
                border: 0px;
                position: relative;
                float: left;
                width: 100%;
                height: 200px;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                background-size: cover;
                img{
                    text-align: center;
                    border-radius: 6px 6px 0px 0px;
                }
            }
        }

        p{
            padding: 0px ${theme['padding-small']};
        }
        h3 {
            padding: 0px ${theme['padding-small']};
            line-height: 1.5em;
        }


    `}
`;

export const RecipeListItem = ({
  recipe,
  parentRoute,
}: {
  recipe: Recipe;
  parentRoute: string;
}) => {
  const { title, description, images, userLikes, id } = recipe;
  return (
    <StyledRecipe
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      <div className="card">
        <Link href={`/${parentRoute}/${id}`}>
          <div>{images ? <GraphImg image={images} /> : null}</div>
        </Link>
        <h3>
          {title}
          <LikeButton userLikes={userLikes} recipeId={id} />
        </h3>
        <p>
          <EllipsisText text={description} length={110} />
        </p>
      </div>
    </StyledRecipe>
  );
};
