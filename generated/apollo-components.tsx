export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
  /** Raw JSON value */
  Json: any,
  /** 
 * The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
 */
  Long: any,
};

export type AggregateAsset = {
   __typename?: 'AggregateAsset',
  count: Scalars['Int'],
};

export type AggregateRecipe = {
   __typename?: 'AggregateRecipe',
  count: Scalars['Int'],
};

export type AggregateUserLike = {
   __typename?: 'AggregateUserLike',
  count: Scalars['Int'],
};

export type Asset = Node & {
   __typename?: 'Asset',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe?: Maybe<Array<Recipe>>,
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'],
};


export type AssetImagesRecipeArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
};

/** A connection to a list of items. */
export type AssetConnection = {
   __typename?: 'AssetConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<AssetEdge>>,
  aggregate: AggregateAsset,
};

export type AssetCreateInput = {
  status?: Maybe<Status>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe?: Maybe<RecipeCreateManyWithoutImagesInput>,
};

export type AssetCreateOneWithoutImagesRecipeInput = {
  upload?: Maybe<AssetUploadWithoutImagesRecipeInput>,
  create?: Maybe<AssetCreateWithoutImagesRecipeInput>,
  connect?: Maybe<AssetWhereUniqueInput>,
};

export type AssetCreateWithoutImagesRecipeInput = {
  status?: Maybe<Status>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type AssetEdge = {
   __typename?: 'AssetEdge',
  /** The item at the end of the edge. */
  node: Asset,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum AssetOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC'
}

export type AssetPreviousValues = {
   __typename?: 'AssetPreviousValues',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetSubscriptionPayload = {
   __typename?: 'AssetSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Asset>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<AssetPreviousValues>,
};

export type AssetSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<AssetWhereInput>,
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>,
  document?: Maybe<DocumentTransformationInput>,
  /** Pass `true` if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>,
};

export type AssetUpdateInput = {
  status?: Maybe<Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe?: Maybe<RecipeUpdateManyWithoutImagesInput>,
};

export type AssetUpdateManyMutationInput = {
  status?: Maybe<Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetUpdateOneWithoutImagesRecipeInput = {
  create?: Maybe<AssetCreateWithoutImagesRecipeInput>,
  connect?: Maybe<AssetWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<AssetUpdateWithoutImagesRecipeDataInput>,
  upsert?: Maybe<AssetUpsertWithoutImagesRecipeInput>,
};

export type AssetUpdateWithoutImagesRecipeDataInput = {
  status?: Maybe<Status>,
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetUploadInput = {
  url: Scalars['String'],
  status?: Maybe<Status>,
  imagesRecipe?: Maybe<RecipeCreateManyWithoutImagesInput>,
};

export type AssetUploadWithoutImagesRecipeInput = {
  url: Scalars['String'],
  status?: Maybe<Status>,
};

export type AssetUpsertWithoutImagesRecipeInput = {
  update: AssetUpdateWithoutImagesRecipeDataInput,
  create: AssetCreateWithoutImagesRecipeInput,
};

export type AssetWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>,
  status?: Maybe<Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  handle?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  handle_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  handle_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  handle_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  handle_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  handle_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  handle_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  handle_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  handle_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  handle_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  handle_not_ends_with?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  fileName_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  fileName_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  fileName_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  fileName_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  fileName_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  fileName_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  fileName_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  fileName_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  fileName_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  fileName_not_ends_with?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  height_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  height_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  height_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  height_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  height_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  height_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  height_gte?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  width_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  width_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  width_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  width_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  width_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  width_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  width_gte?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  /** All values that are not equal to given value. */
  size_not?: Maybe<Scalars['Float']>,
  /** All values that are contained in given list. */
  size_in?: Maybe<Array<Scalars['Float']>>,
  /** All values that are not contained in given list. */
  size_not_in?: Maybe<Array<Scalars['Float']>>,
  /** All values less than the given value. */
  size_lt?: Maybe<Scalars['Float']>,
  /** All values less than or equal the given value. */
  size_lte?: Maybe<Scalars['Float']>,
  /** All values greater than the given value. */
  size_gt?: Maybe<Scalars['Float']>,
  /** All values greater than or equal the given value. */
  size_gte?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  mimeType_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  mimeType_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  mimeType_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  mimeType_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  mimeType_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  mimeType_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  mimeType_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  mimeType_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  mimeType_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  mimeType_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  mimeType_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  imagesRecipe_every?: Maybe<RecipeWhereInput>,
  imagesRecipe_some?: Maybe<RecipeWhereInput>,
  imagesRecipe_none?: Maybe<RecipeWhereInput>,
};

export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  handle?: Maybe<Scalars['String']>,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};


export enum DocumentFileTypes {
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Png = 'png',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Docx = 'docx',
  Html = 'html',
  Pdf = 'pdf',
  Doc = 'doc',
  Xlsx = 'xlsx',
  Xls = 'xls',
  Pptx = 'pptx',
  Ppt = 'ppt'
}

export type DocumentOutputInput = {
  /** 
 * Transforms a document into a desired file type.
   * See this matrix for format support:
   * 
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
 */
  format?: Maybe<DocumentFileTypes>,
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: Maybe<DocumentOutputInput>,
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** 
 * Resizes the image to fit the specified parameters exactly by removing any
   * parts of the image that don't fit within the boundaries.
 */
  Crop = 'crop',
  /** 
 * Resizes the image to fit the specified parameters exactly by scaling the image
   * to the desired size. The aspect ratio of the image is not respected and the
   * image can be distorted using this method.
 */
  Scale = 'scale',
  /** 
 * Resizes the image to fit within the parameters, but as opposed to 'fit:clip'
   * will not scale the image if the image is smaller than the output size.
 */
  Max = 'max'
}

export type ImageResizeInput = {
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: Maybe<Scalars['Int']>,
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: Maybe<Scalars['Int']>,
  /** The default value for the fit parameter is fit:clip. */
  fit?: Maybe<ImageFit>,
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: Maybe<ImageResizeInput>,
};


export enum Locale {
  En = 'EN'
}


export type Mutation = {
   __typename?: 'Mutation',
  createAsset: Asset,
  uploadAsset: Asset,
  createRecipe: Recipe,
  createUserLike: UserLike,
  updateAsset?: Maybe<Asset>,
  updateRecipe?: Maybe<Recipe>,
  updateUserLike?: Maybe<UserLike>,
  deleteAsset?: Maybe<Asset>,
  deleteRecipe?: Maybe<Recipe>,
  deleteUserLike?: Maybe<UserLike>,
  upsertAsset: Asset,
  upsertRecipe: Recipe,
  upsertUserLike: UserLike,
  updateManyAssets: BatchPayload,
  updateManyRecipes: BatchPayload,
  updateManyUserLikes: BatchPayload,
  deleteManyAssets: BatchPayload,
  deleteManyRecipes: BatchPayload,
  deleteManyUserLikes: BatchPayload,
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput
};


export type MutationUploadAssetArgs = {
  data: AssetUploadInput
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput
};


export type MutationCreateUserLikeArgs = {
  data: UserLikeCreateInput
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput,
  where: AssetWhereUniqueInput
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput,
  where: RecipeWhereUniqueInput
};


export type MutationUpdateUserLikeArgs = {
  data: UserLikeUpdateInput,
  where: UserLikeWhereUniqueInput
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
};


export type MutationDeleteRecipeArgs = {
  where: RecipeWhereUniqueInput
};


export type MutationDeleteUserLikeArgs = {
  where: UserLikeWhereUniqueInput
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput,
  create: AssetCreateInput,
  update: AssetUpdateInput
};


export type MutationUpsertRecipeArgs = {
  where: RecipeWhereUniqueInput,
  create: RecipeCreateInput,
  update: RecipeUpdateInput
};


export type MutationUpsertUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  create: UserLikeCreateInput,
  update: UserLikeUpdateInput
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyMutationInput,
  where?: Maybe<AssetWhereInput>
};


export type MutationUpdateManyRecipesArgs = {
  data: RecipeUpdateManyMutationInput,
  where?: Maybe<RecipeWhereInput>
};


export type MutationUpdateManyUserLikesArgs = {
  data: UserLikeUpdateManyMutationInput,
  where?: Maybe<UserLikeWhereInput>
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetWhereInput>
};


export type MutationDeleteManyRecipesArgs = {
  where?: Maybe<RecipeWhereInput>
};


export type MutationDeleteManyUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'],
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'],
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>,
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  assets: Array<Maybe<Asset>>,
  recipes: Array<Maybe<Recipe>>,
  userLikes: Array<Maybe<UserLike>>,
  asset?: Maybe<Asset>,
  recipe?: Maybe<Recipe>,
  userLike?: Maybe<UserLike>,
  assetsConnection: AssetConnection,
  recipesConnection: RecipeConnection,
  userLikesConnection: UserLikeConnection,
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>,
  orderBy?: Maybe<AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRecipesArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>,
  orderBy?: Maybe<UserLikeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput
};


export type QueryUserLikeArgs = {
  where: UserLikeWhereUniqueInput
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>,
  orderBy?: Maybe<AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryRecipesConnectionArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryUserLikesConnectionArgs = {
  where?: Maybe<UserLikeWhereInput>,
  orderBy?: Maybe<UserLikeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Recipe = Node & {
   __typename?: 'Recipe',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  images?: Maybe<Asset>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes?: Maybe<Array<UserLike>>,
};


export type RecipeUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>,
  orderBy?: Maybe<UserLikeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

/** A connection to a list of items. */
export type RecipeConnection = {
   __typename?: 'RecipeConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<RecipeEdge>>,
  aggregate: AggregateRecipe,
};

export type RecipeCreateInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  images?: Maybe<AssetCreateOneWithoutImagesRecipeInput>,
  userLikes?: Maybe<UserLikeCreateManyWithoutRecipeInput>,
};

export type RecipeCreateManyWithoutImagesInput = {
  create?: Maybe<Array<RecipeCreateWithoutImagesInput>>,
  connect?: Maybe<Array<RecipeWhereUniqueInput>>,
};

export type RecipeCreateOneWithoutUserLikesInput = {
  create?: Maybe<RecipeCreateWithoutUserLikesInput>,
  connect?: Maybe<RecipeWhereUniqueInput>,
};

export type RecipeCreateWithoutImagesInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes?: Maybe<UserLikeCreateManyWithoutRecipeInput>,
};

export type RecipeCreateWithoutUserLikesInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  images?: Maybe<AssetCreateOneWithoutImagesRecipeInput>,
};

/** An edge in a connection. */
export type RecipeEdge = {
   __typename?: 'RecipeEdge',
  /** The item at the end of the edge. */
  node: Recipe,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum RecipeOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  IngredientsAsc = 'ingredients_ASC',
  IngredientsDesc = 'ingredients_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

export type RecipePreviousValues = {
   __typename?: 'RecipePreviousValues',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
};

export type RecipeScalarWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RecipeScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RecipeScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RecipeScalarWhereInput>>,
  status?: Maybe<Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  owner_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  owner_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  owner_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  owner_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  owner_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  owner_not_ends_with?: Maybe<Scalars['String']>,
};

export type RecipeSubscriptionPayload = {
   __typename?: 'RecipeSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<Recipe>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<RecipePreviousValues>,
};

export type RecipeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RecipeSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RecipeSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RecipeSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<RecipeWhereInput>,
};

export type RecipeUpdateInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  images?: Maybe<AssetUpdateOneWithoutImagesRecipeInput>,
  userLikes?: Maybe<UserLikeUpdateManyWithoutRecipeInput>,
};

export type RecipeUpdateManyDataInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
};

export type RecipeUpdateManyMutationInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
};

export type RecipeUpdateManyWithoutImagesInput = {
  create?: Maybe<Array<RecipeCreateWithoutImagesInput>>,
  connect?: Maybe<Array<RecipeWhereUniqueInput>>,
  set?: Maybe<Array<RecipeWhereUniqueInput>>,
  disconnect?: Maybe<Array<RecipeWhereUniqueInput>>,
  delete?: Maybe<Array<RecipeWhereUniqueInput>>,
  update?: Maybe<Array<RecipeUpdateWithWhereUniqueWithoutImagesInput>>,
  updateMany?: Maybe<Array<RecipeUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<RecipeScalarWhereInput>>,
  upsert?: Maybe<Array<RecipeUpsertWithWhereUniqueWithoutImagesInput>>,
};

export type RecipeUpdateManyWithWhereNestedInput = {
  where: RecipeScalarWhereInput,
  data: RecipeUpdateManyDataInput,
};

export type RecipeUpdateOneWithoutUserLikesInput = {
  create?: Maybe<RecipeCreateWithoutUserLikesInput>,
  connect?: Maybe<RecipeWhereUniqueInput>,
  disconnect?: Maybe<Scalars['Boolean']>,
  delete?: Maybe<Scalars['Boolean']>,
  update?: Maybe<RecipeUpdateWithoutUserLikesDataInput>,
  upsert?: Maybe<RecipeUpsertWithoutUserLikesInput>,
};

export type RecipeUpdateWithoutImagesDataInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes?: Maybe<UserLikeUpdateManyWithoutRecipeInput>,
};

export type RecipeUpdateWithoutUserLikesDataInput = {
  status?: Maybe<Status>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  images?: Maybe<AssetUpdateOneWithoutImagesRecipeInput>,
};

export type RecipeUpdateWithWhereUniqueWithoutImagesInput = {
  where: RecipeWhereUniqueInput,
  data: RecipeUpdateWithoutImagesDataInput,
};

export type RecipeUpsertWithoutUserLikesInput = {
  update: RecipeUpdateWithoutUserLikesDataInput,
  create: RecipeCreateWithoutUserLikesInput,
};

export type RecipeUpsertWithWhereUniqueWithoutImagesInput = {
  where: RecipeWhereUniqueInput,
  update: RecipeUpdateWithoutImagesDataInput,
  create: RecipeCreateWithoutImagesInput,
};

export type RecipeWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RecipeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RecipeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RecipeWhereInput>>,
  status?: Maybe<Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  title_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  title_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  title_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  title_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  title_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  title_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  title_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  title_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  title_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  description_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  description_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  description_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  description_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  description_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  description_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  description_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  description_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  description_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  description_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  content_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  content_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  content_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  content_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  content_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  content_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  content_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  content_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  content_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  content_not_ends_with?: Maybe<Scalars['String']>,
  owner?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  owner_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  owner_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  owner_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  owner_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  owner_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  owner_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  owner_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  owner_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  owner_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  images?: Maybe<AssetWhereInput>,
  userLikes_every?: Maybe<UserLikeWhereInput>,
  userLikes_some?: Maybe<UserLikeWhereInput>,
  userLikes_none?: Maybe<UserLikeWhereInput>,
};

export type RecipeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export enum Status {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Archived = 'ARCHIVED'
}

export type UserLike = Node & {
   __typename?: 'UserLike',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  user?: Maybe<Scalars['String']>,
  recipe?: Maybe<Recipe>,
};

/** A connection to a list of items. */
export type UserLikeConnection = {
   __typename?: 'UserLikeConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<Maybe<UserLikeEdge>>,
  aggregate: AggregateUserLike,
};

export type UserLikeCreateInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
  recipe?: Maybe<RecipeCreateOneWithoutUserLikesInput>,
};

export type UserLikeCreateManyWithoutRecipeInput = {
  create?: Maybe<Array<UserLikeCreateWithoutRecipeInput>>,
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>,
};

export type UserLikeCreateWithoutRecipeInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
};

/** An edge in a connection. */
export type UserLikeEdge = {
   __typename?: 'UserLikeEdge',
  /** The item at the end of the edge. */
  node: UserLike,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

export enum UserLikeOrderByInput {
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type UserLikePreviousValues = {
   __typename?: 'UserLikePreviousValues',
  status: Status,
  updatedAt: Scalars['DateTime'],
  createdAt: Scalars['DateTime'],
  id: Scalars['ID'],
  user?: Maybe<Scalars['String']>,
};

export type UserLikeScalarWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserLikeScalarWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserLikeScalarWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserLikeScalarWhereInput>>,
  status?: Maybe<Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  user?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  user_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  user_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  user_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  user_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  user_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  user_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  user_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  user_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  user_not_ends_with?: Maybe<Scalars['String']>,
};

export type UserLikeSubscriptionPayload = {
   __typename?: 'UserLikeSubscriptionPayload',
  mutation: MutationType,
  node?: Maybe<UserLike>,
  updatedFields?: Maybe<Array<Scalars['String']>>,
  previousValues?: Maybe<UserLikePreviousValues>,
};

export type UserLikeSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserLikeSubscriptionWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserLikeSubscriptionWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserLikeSubscriptionWhereInput>>,
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<Array<MutationType>>,
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<Scalars['String']>,
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>,
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>,
  node?: Maybe<UserLikeWhereInput>,
};

export type UserLikeUpdateInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
  recipe?: Maybe<RecipeUpdateOneWithoutUserLikesInput>,
};

export type UserLikeUpdateManyDataInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeUpdateManyMutationInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeUpdateManyWithoutRecipeInput = {
  create?: Maybe<Array<UserLikeCreateWithoutRecipeInput>>,
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>,
  set?: Maybe<Array<UserLikeWhereUniqueInput>>,
  disconnect?: Maybe<Array<UserLikeWhereUniqueInput>>,
  delete?: Maybe<Array<UserLikeWhereUniqueInput>>,
  update?: Maybe<Array<UserLikeUpdateWithWhereUniqueWithoutRecipeInput>>,
  updateMany?: Maybe<Array<UserLikeUpdateManyWithWhereNestedInput>>,
  deleteMany?: Maybe<Array<UserLikeScalarWhereInput>>,
  upsert?: Maybe<Array<UserLikeUpsertWithWhereUniqueWithoutRecipeInput>>,
};

export type UserLikeUpdateManyWithWhereNestedInput = {
  where: UserLikeScalarWhereInput,
  data: UserLikeUpdateManyDataInput,
};

export type UserLikeUpdateWithoutRecipeDataInput = {
  status?: Maybe<Status>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeUpdateWithWhereUniqueWithoutRecipeInput = {
  where: UserLikeWhereUniqueInput,
  data: UserLikeUpdateWithoutRecipeDataInput,
};

export type UserLikeUpsertWithWhereUniqueWithoutRecipeInput = {
  where: UserLikeWhereUniqueInput,
  update: UserLikeUpdateWithoutRecipeDataInput,
  create: UserLikeCreateWithoutRecipeInput,
};

export type UserLikeWhereInput = {
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserLikeWhereInput>>,
  status?: Maybe<Status>,
  /** All values that are not equal to given value. */
  status_not?: Maybe<Status>,
  /** All values that are contained in given list. */
  status_in?: Maybe<Array<Status>>,
  /** All values that are not contained in given list. */
  status_not_in?: Maybe<Array<Status>>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<Scalars['DateTime']>,
  createdAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  createdAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<Scalars['DateTime']>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
  /** All values less than the given value. */
  id_lt?: Maybe<Scalars['ID']>,
  /** All values less than or equal the given value. */
  id_lte?: Maybe<Scalars['ID']>,
  /** All values greater than the given value. */
  id_gt?: Maybe<Scalars['ID']>,
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<Scalars['ID']>,
  /** All values containing the given string. */
  id_contains?: Maybe<Scalars['ID']>,
  /** All values not containing the given string. */
  id_not_contains?: Maybe<Scalars['ID']>,
  /** All values starting with the given string. */
  id_starts_with?: Maybe<Scalars['ID']>,
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<Scalars['ID']>,
  /** All values ending with the given string. */
  id_ends_with?: Maybe<Scalars['ID']>,
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<Scalars['ID']>,
  user?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>,
  /** All values less than the given value. */
  user_lt?: Maybe<Scalars['String']>,
  /** All values less than or equal the given value. */
  user_lte?: Maybe<Scalars['String']>,
  /** All values greater than the given value. */
  user_gt?: Maybe<Scalars['String']>,
  /** All values greater than or equal the given value. */
  user_gte?: Maybe<Scalars['String']>,
  /** All values containing the given string. */
  user_contains?: Maybe<Scalars['String']>,
  /** All values not containing the given string. */
  user_not_contains?: Maybe<Scalars['String']>,
  /** All values starting with the given string. */
  user_starts_with?: Maybe<Scalars['String']>,
  /** All values not starting with the given string. */
  user_not_starts_with?: Maybe<Scalars['String']>,
  /** All values ending with the given string. */
  user_ends_with?: Maybe<Scalars['String']>,
  /** All values not ending with the given string. */
  user_not_ends_with?: Maybe<Scalars['String']>,
  recipe?: Maybe<RecipeWhereInput>,
};

export type UserLikeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CreateRecipeGraphQlMutationVariables = {
  data: RecipeCreateInput
};


export type CreateRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: (
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  ) }
);

export type CreateUserLikeGraphQlMutationVariables = {
  data: UserLikeCreateInput
};


export type CreateUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createUserLike: (
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id'>
    )> }
  ) }
);

export type DeleteAssetGraphQlMutationVariables = {
  where: AssetWhereUniqueInput
};


export type DeleteAssetGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteAsset: Maybe<(
    { __typename?: 'Asset' }
    & Pick<Asset, 'id'>
  )> }
);

export type DeleteRecipeGraphQlMutationVariables = {
  where: RecipeWhereUniqueInput
};


export type DeleteRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteRecipe: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id'>
  )> }
);

export type DeleteUserLikeGraphQlMutationVariables = {
  where: UserLikeWhereUniqueInput
};


export type DeleteUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { deleteUserLike: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
  )> }
);

export type UpdateRecipeGraphQlMutationVariables = {
  data: RecipeUpdateInput,
  where: RecipeWhereUniqueInput
};


export type UpdateRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { updateRecipe: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type RecipeGraphQlQueryVariables = {
  where: RecipeWhereUniqueInput
};


export type RecipeGraphQlQuery = (
  { __typename?: 'Query' }
  & { recipe: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type RecipesGraphQlQueryVariables = {
  where?: Maybe<RecipeWhereInput>
};


export type RecipesGraphQlQuery = (
  { __typename?: 'Query' }
  & { recipes: Array<Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Maybe<Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )>> }
);

export type UserLikeGraphQlQueryVariables = {
  where: UserLikeWhereUniqueInput
};


export type UserLikeGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLike: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes: Maybe<Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>>, images: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);

export type UserLikesGraphQlQueryVariables = {
  where?: Maybe<UserLikeWhereInput>
};


export type UserLikesGraphQlQuery = (
  { __typename?: 'Query' }
  & { userLikes: Array<Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'status' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes: Maybe<Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>>, images: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )>> }
);
