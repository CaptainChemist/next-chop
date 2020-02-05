import { MainLayout } from '../../components/layout/MainLayout';
import styled from 'styled-components';
import * as _ from 'lodash';
import Link from 'next/link';
import { Row, Col, Button } from 'antd';
import { RecipesList, queryEnum } from '../../components/RecipeList';
import { useFetchUser } from '../../utils/user';
import { Loading } from '../../components/notify/Loading';
import Router from 'next/router';

const StyledRow = styled(Row)`
  ${({ theme }) => `
    div {
      padding: ${theme['padding-small']} ${theme['padding-small']};
      display: flex;
      h1 {
          padding-left: ${theme['padding-small']};
          text-align: left;
      }
    }
    `}
`;

const Index = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const owner = _.get(user, 'sub');
  const options = owner ? { variables: { where: { owner } } } : {};

  if (isFetchUser) return <Loading />;

  if (!user) {
    Router.replace('/');
  }

  return (
    <MainLayout title="My Recipes">
      <StyledRow>
        <Col span={24}>
          <Link href="/create">
            <Button type="primary">Create</Button>
          </Link>
          <h1>My Recipes</h1>
        </Col>
      </StyledRow>
      <div>
        <RecipesList
          parentRoute="my-recipes"
          queryType={queryEnum.recipes}
          options={options}
        />
      </div>
    </MainLayout>
  );
};

export default Index;
