import gql from 'graphql-tag';

export const deleteAssetGraphQL = gql`
  mutation deleteAssetGraphQL($where: AssetWhereUniqueInput!) {
    deleteAsset(where: $where) {
      id
    }
  }
`;
