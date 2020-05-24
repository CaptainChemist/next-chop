import gql from 'graphql-tag';

export const deleteAssetGraphQL = gql`
  mutation($where: AssetWhereUniqueInput!) {
    deleteAsset(where: $where) {
      id
    }
  }
`;
