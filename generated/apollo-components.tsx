export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601
   * standard for representationof dates and times using the Gregorian calendar.
 */
  DateTime: any,
  /** Raw JSON value */
  Json: any,
  /** 
 * The Long scalar type represents non-fractional signed whole numeric values. Long
   * can represent values between -(2^63) and 2^63 - 1.
 */
  Long: any,
  Hex: any,
  RGBAHue: any,
  RGBATransparency: any,
  /** 
 * A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard
   * for representation of dates using the Gregorian calendar.
 */
  Date: any,
  /** Slate-compatible RichText AST */
  RichTextAST: any,
};




export enum _FilterKind {
  Search = 'search',
  And = 'AND',
  Or = 'OR',
  Not = 'NOT',
  Eq = 'eq',
  EqNot = 'eq_not',
  In = 'in',
  NotIn = 'not_in',
  Lt = 'lt',
  Lte = 'lte',
  Gt = 'gt',
  Gte = 'gte',
  Contains = 'contains',
  NotContains = 'not_contains',
  StartsWith = 'starts_with',
  NotStartsWith = 'not_starts_with',
  EndsWith = 'ends_with',
  NotEndsWith = 'not_ends_with',
  ContainsAll = 'contains_all',
  ContainsSome = 'contains_some',
  ContainsNone = 'contains_none',
  RelationalSingle = 'relational_single',
  RelationalEvery = 'relational_every',
  RelationalSome = 'relational_some',
  RelationalNone = 'relational_none'
}

export enum _MutationInputFieldKind {
  Scalar = 'scalar',
  RichText = 'richText',
  Enum = 'enum',
  Relation = 'relation',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Publish = 'publish',
  Unpublish = 'unpublish',
  Update = 'update',
  Upsert = 'upsert',
  Delete = 'delete',
  UpdateMany = 'updateMany',
  PublishMany = 'publishMany',
  UnpublishMany = 'unpublishMany',
  DeleteMany = 'deleteMany'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  One = 'one',
  Many = 'many'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export type Aggregate = {
   __typename?: 'Aggregate',
  count: Scalars['Int'],
};

/** Asset system model */
export type Asset = Node & {
   __typename?: 'Asset',
  /** System stage field */
  stage: Stage,
  /** System Locale field */
  locale: Locale,
  /** Get the other localizations for this document */
  localizations: Array<Asset>,
  /** Get the document in other stages */
  documentInStages: Array<Asset>,
  /** The unique identifier */
  id: Scalars['ID'],
  /** The time the document was created */
  createdAt: Scalars['DateTime'],
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'],
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** The file handle */
  handle: Scalars['String'],
  /** The file name */
  fileName: Scalars['String'],
  /** The height of the file */
  height?: Maybe<Scalars['Float']>,
  /** The file width */
  width?: Maybe<Scalars['Float']>,
  /** The file size */
  size?: Maybe<Scalars['Float']>,
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe: Array<Recipe>,
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'],
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  locales?: Array<Locale>,
  includeCurrent?: Scalars['Boolean']
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  stages?: Array<Stage>,
  includeCurrent?: Scalars['Boolean'],
  inheritLocale?: Scalars['Boolean']
};


/** Asset system model */
export type AssetImagesRecipeArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: Maybe<AssetTransformationInput>
};

export type AssetConnectInput = {
  /** Document to connect */
  where: AssetWhereUniqueInput,
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>,
};

/** A connection to a list of items. */
export type AssetConnection = {
   __typename?: 'AssetConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<AssetEdge>,
  aggregate: Aggregate,
};

export type AssetCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe?: Maybe<RecipeCreateManyInlineInput>,
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: Maybe<AssetCreateLocalizationsInput>,
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput,
  locale: Locale,
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: Maybe<Array<AssetCreateLocalizationInput>>,
};

export type AssetCreateManyInlineInput = {
  /** Create and connect multiple existing Asset documents */
  create?: Maybe<Array<AssetCreateInput>>,
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetWhereUniqueInput>>,
};

export type AssetCreateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>,
  /** Connect one existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>,
};

/** An edge in a connection. */
export type AssetEdge = {
   __typename?: 'AssetEdge',
  /** The item at the end of the edge. */
  node: Asset,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  imagesRecipe_every?: Maybe<RecipeWhereInput>,
  imagesRecipe_some?: Maybe<RecipeWhereInput>,
  imagesRecipe_none?: Maybe<RecipeWhereInput>,
};

export enum AssetOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
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

/** Transformations for Assets */
export type AssetTransformationInput = {
  image?: Maybe<ImageTransformationInput>,
  document?: Maybe<DocumentTransformationInput>,
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: Maybe<Scalars['Boolean']>,
};

export type AssetUpdateInput = {
  handle?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
  imagesRecipe?: Maybe<RecipeUpdateManyInlineInput>,
  /** Manage document localizations */
  localizations?: Maybe<AssetUpdateLocalizationsInput>,
};

export type AssetUpdateLocalizationDataInput = {
  handle: Scalars['String'],
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput,
  locale: Locale,
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: Maybe<Array<AssetCreateLocalizationInput>>,
  /** Localizations to update */
  update?: Maybe<Array<AssetUpdateLocalizationInput>>,
  upsert?: Maybe<Array<AssetUpsertLocalizationInput>>,
  /** Localizations to delete */
  delete?: Maybe<Array<Locale>>,
};

export type AssetUpdateManyInlineInput = {
  /** Create and connect multiple Asset documents */
  create?: Maybe<Array<AssetCreateInput>>,
  /** Connect multiple existing Asset documents */
  connect?: Maybe<Array<AssetConnectInput>>,
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: Maybe<Array<AssetWhereUniqueInput>>,
  /** Update multiple Asset documents */
  update?: Maybe<Array<AssetUpdateWithNestedWhereUniqueInput>>,
  /** Upsert multiple Asset documents */
  upsert?: Maybe<Array<AssetUpsertWithNestedWhereUniqueInput>>,
  /** Disconnect multiple Asset documents */
  disconnect?: Maybe<Array<AssetWhereUniqueInput>>,
  /** Delete multiple Asset documents */
  delete?: Maybe<Array<AssetWhereUniqueInput>>,
};

export type AssetUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  /** Optional updates to localizations */
  localizations?: Maybe<Array<AssetUpdateManyLocalizationInput>>,
};

export type AssetUpdateManyLocalizationInput = {
  fileName: Scalars['String'],
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  size?: Maybe<Scalars['Float']>,
  mimeType?: Maybe<Scalars['String']>,
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: AssetWhereInput,
  /** Update many input */
  data: AssetUpdateManyInput,
};

export type AssetUpdateOneInlineInput = {
  /** Create and connect one Asset document */
  create?: Maybe<AssetCreateInput>,
  /** Update single Asset document */
  update?: Maybe<AssetUpdateWithNestedWhereUniqueInput>,
  /** Upsert single Asset document */
  upsert?: Maybe<AssetUpsertWithNestedWhereUniqueInput>,
  /** Connect existing Asset document */
  connect?: Maybe<AssetWhereUniqueInput>,
  /** Disconnect currently connected Asset document */
  disconnect?: Maybe<Scalars['Boolean']>,
  /** Delete currently connected Asset document */
  delete?: Maybe<Scalars['Boolean']>,
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput,
  /** Document to update */
  data: AssetUpdateInput,
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput,
  /** Update document if it exists */
  update: AssetUpdateInput,
};

export type AssetUpsertLocalizationInput = {
  update: AssetUpdateLocalizationDataInput,
  create: AssetCreateLocalizationDataInput,
  locale: Locale,
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: AssetWhereUniqueInput,
  /** Upsert data */
  data: AssetUpsertInput,
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<AssetWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<AssetWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<AssetWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  handle?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  handle_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  handle_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  handle_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  handle_not_ends_with?: Maybe<Scalars['String']>,
  fileName?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  fileName_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  fileName_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  fileName_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
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
  /** All values not ending with the given string */
  mimeType_not_ends_with?: Maybe<Scalars['String']>,
  imagesRecipe_every?: Maybe<RecipeWhereInput>,
  imagesRecipe_some?: Maybe<RecipeWhereInput>,
  imagesRecipe_none?: Maybe<RecipeWhereInput>,
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type BatchPayload = {
   __typename?: 'BatchPayload',
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'],
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
   __typename?: 'Color',
  hex: Scalars['Hex'],
  rgba: Rgba,
  css: Scalars['String'],
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: Maybe<Scalars['Hex']>,
  rgba?: Maybe<RgbaInput>,
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: Maybe<Scalars['ID']>,
  /** Connect document before specified document */
  before?: Maybe<Scalars['ID']>,
  /** Connect document at first position */
  start?: Maybe<Scalars['Boolean']>,
  /** Connect document at last position */
  end?: Maybe<Scalars['Boolean']>,
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
  Pdf = 'pdf',
  Html = 'html',
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


/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
   __typename?: 'Location',
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
  distance: Scalars['Float'],
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};


export type Mutation = {
   __typename?: 'Mutation',
  /** Create one asset */
  createAsset?: Maybe<Asset>,
  /** Update one asset */
  updateAsset?: Maybe<Asset>,
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>,
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>,
  /** Publish one asset */
  publishAsset?: Maybe<Asset>,
  /** 
 * Unpublish one asset from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
 */
  unpublishAsset?: Maybe<Asset>,
  /** Update many assets */
  updateManyAssets: BatchPayload,
  /** Delete many Asset documents */
  deleteManyAssets: BatchPayload,
  /** Publish many Asset documents */
  publishManyAssets: BatchPayload,
  /** Unpublish many Asset documents */
  unpublishManyAssets: BatchPayload,
  /** Create one recipe */
  createRecipe?: Maybe<Recipe>,
  /** Update one recipe */
  updateRecipe?: Maybe<Recipe>,
  /** Delete one recipe from _all_ existing stages. Returns deleted document. */
  deleteRecipe?: Maybe<Recipe>,
  /** Upsert one recipe */
  upsertRecipe?: Maybe<Recipe>,
  /** Publish one recipe */
  publishRecipe?: Maybe<Recipe>,
  /** 
 * Unpublish one recipe from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
 */
  unpublishRecipe?: Maybe<Recipe>,
  /** Update many recipes */
  updateManyRecipes: BatchPayload,
  /** Delete many Recipe documents */
  deleteManyRecipes: BatchPayload,
  /** Publish many Recipe documents */
  publishManyRecipes: BatchPayload,
  /** Unpublish many Recipe documents */
  unpublishManyRecipes: BatchPayload,
  /** Create one userLike */
  createUserLike?: Maybe<UserLike>,
  /** Update one userLike */
  updateUserLike?: Maybe<UserLike>,
  /** Delete one userLike from _all_ existing stages. Returns deleted document. */
  deleteUserLike?: Maybe<UserLike>,
  /** Upsert one userLike */
  upsertUserLike?: Maybe<UserLike>,
  /** Publish one userLike */
  publishUserLike?: Maybe<UserLike>,
  /** 
 * Unpublish one userLike from selected stages. Unpublish either the complete
   * document with its relations, localizations and base data or specific
   * localizations only.
 */
  unpublishUserLike?: Maybe<UserLike>,
  /** Update many userLikes */
  updateManyUserLikes: BatchPayload,
  /** Delete many UserLike documents */
  deleteManyUserLikes: BatchPayload,
  /** Publish many UserLike documents */
  publishManyUserLikes: BatchPayload,
  /** Unpublish many UserLike documents */
  unpublishManyUserLikes: BatchPayload,
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput
};


export type MutationUpdateAssetArgs = {
  where: AssetWhereUniqueInput,
  data: AssetUpdateInput
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
};


export type MutationUpsertAssetArgs = {
  where: AssetWhereUniqueInput,
  upsert: AssetUpsertInput
};


export type MutationPublishAssetArgs = {
  where: AssetWhereUniqueInput,
  locales?: Maybe<Array<Locale>>,
  publishBase?: Maybe<Scalars['Boolean']>,
  to?: Array<Stage>
};


export type MutationUnpublishAssetArgs = {
  where: AssetWhereUniqueInput,
  from?: Array<Stage>,
  locales?: Maybe<Array<Locale>>,
  unpublishBase?: Maybe<Scalars['Boolean']>
};


export type MutationUpdateManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>,
  data: AssetUpdateManyInput
};


export type MutationDeleteManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>
};


export type MutationPublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>,
  to?: Array<Stage>,
  locales?: Maybe<Array<Locale>>,
  publishBase?: Maybe<Scalars['Boolean']>
};


export type MutationUnpublishManyAssetsArgs = {
  where?: Maybe<AssetManyWhereInput>,
  from?: Array<Stage>,
  locales?: Maybe<Array<Locale>>,
  unpublishBase?: Maybe<Scalars['Boolean']>
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput
};


export type MutationUpdateRecipeArgs = {
  where: RecipeWhereUniqueInput,
  data: RecipeUpdateInput
};


export type MutationDeleteRecipeArgs = {
  where: RecipeWhereUniqueInput
};


export type MutationUpsertRecipeArgs = {
  where: RecipeWhereUniqueInput,
  upsert: RecipeUpsertInput
};


export type MutationPublishRecipeArgs = {
  where: RecipeWhereUniqueInput,
  to?: Array<Stage>
};


export type MutationUnpublishRecipeArgs = {
  where: RecipeWhereUniqueInput,
  from?: Array<Stage>
};


export type MutationUpdateManyRecipesArgs = {
  where?: Maybe<RecipeManyWhereInput>,
  data: RecipeUpdateManyInput
};


export type MutationDeleteManyRecipesArgs = {
  where?: Maybe<RecipeManyWhereInput>
};


export type MutationPublishManyRecipesArgs = {
  where?: Maybe<RecipeManyWhereInput>,
  to?: Array<Stage>
};


export type MutationUnpublishManyRecipesArgs = {
  where?: Maybe<RecipeManyWhereInput>,
  from?: Array<Stage>
};


export type MutationCreateUserLikeArgs = {
  data: UserLikeCreateInput
};


export type MutationUpdateUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  data: UserLikeUpdateInput
};


export type MutationDeleteUserLikeArgs = {
  where: UserLikeWhereUniqueInput
};


export type MutationUpsertUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  upsert: UserLikeUpsertInput
};


export type MutationPublishUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  to?: Array<Stage>
};


export type MutationUnpublishUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  from?: Array<Stage>
};


export type MutationUpdateManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>,
  data: UserLikeUpdateManyInput
};


export type MutationDeleteManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>
};


export type MutationPublishManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>,
  to?: Array<Stage>
};


export type MutationUnpublishManyUserLikesArgs = {
  where?: Maybe<UserLikeManyWhereInput>,
  from?: Array<Stage>
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'],
  /** The Stage of an object */
  stage: Stage,
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

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale,
  /** Stages to publish selected locales to */
  stages: Array<Stage>,
};

export type Query = {
   __typename?: 'Query',
  /** Fetches an object given its ID */
  node?: Maybe<Node>,
  /** Retrieve multiple assets */
  assets: Array<Asset>,
  /** Retrieve a single asset */
  asset?: Maybe<Asset>,
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection,
  /** Retrieve multiple recipes */
  recipes: Array<Recipe>,
  /** Retrieve a single recipe */
  recipe?: Maybe<Recipe>,
  /** Retrieve multiple recipes using the Relay connection interface */
  recipesConnection: RecipeConnection,
  /** Retrieve multiple userLikes */
  userLikes: Array<UserLike>,
  /** Retrieve a single userLike */
  userLike?: Maybe<UserLike>,
  /** Retrieve multiple userLikes using the Relay connection interface */
  userLikesConnection: UserLikeConnection,
};


export type QueryNodeArgs = {
  id: Scalars['ID'],
  stage?: Stage,
  locales?: Array<Locale>
};


export type QueryAssetsArgs = {
  where?: Maybe<AssetWhereInput>,
  orderBy?: Maybe<AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage,
  locales?: Array<Locale>
};


export type QueryAssetArgs = {
  where: AssetWhereUniqueInput,
  stage?: Stage,
  locales?: Array<Locale>
};


export type QueryAssetsConnectionArgs = {
  where?: Maybe<AssetWhereInput>,
  orderBy?: Maybe<AssetOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage,
  locales?: Array<Locale>
};


export type QueryRecipesArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput,
  stage?: Stage
};


export type QueryRecipesConnectionArgs = {
  where?: Maybe<RecipeWhereInput>,
  orderBy?: Maybe<RecipeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage
};


export type QueryUserLikesArgs = {
  where?: Maybe<UserLikeWhereInput>,
  orderBy?: Maybe<UserLikeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage
};


export type QueryUserLikeArgs = {
  where: UserLikeWhereUniqueInput,
  stage?: Stage
};


export type QueryUserLikesConnectionArgs = {
  where?: Maybe<UserLikeWhereInput>,
  orderBy?: Maybe<UserLikeOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  stage?: Stage
};

export type Recipe = Node & {
   __typename?: 'Recipe',
  /** System stage field */
  stage: Stage,
  /** Get the document in other stages */
  documentInStages: Array<Recipe>,
  /** The unique identifier */
  id: Scalars['ID'],
  /** The time the document was created */
  createdAt: Scalars['DateTime'],
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'],
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  images?: Maybe<Asset>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes: Array<UserLike>,
};


export type RecipeDocumentInStagesArgs = {
  stages?: Array<Stage>,
  includeCurrent?: Scalars['Boolean'],
  inheritLocale?: Scalars['Boolean']
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

export type RecipeConnectInput = {
  /** Document to connect */
  where: RecipeWhereUniqueInput,
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>,
};

/** A connection to a list of items. */
export type RecipeConnection = {
   __typename?: 'RecipeConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<RecipeEdge>,
  aggregate: Aggregate,
};

export type RecipeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  images?: Maybe<AssetCreateOneInlineInput>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes?: Maybe<UserLikeCreateManyInlineInput>,
};

export type RecipeCreateManyInlineInput = {
  /** Create and connect multiple existing Recipe documents */
  create?: Maybe<Array<RecipeCreateInput>>,
  /** Connect multiple existing Recipe documents */
  connect?: Maybe<Array<RecipeWhereUniqueInput>>,
};

export type RecipeCreateOneInlineInput = {
  /** Create and connect one Recipe document */
  create?: Maybe<RecipeCreateInput>,
  /** Connect one existing Recipe document */
  connect?: Maybe<RecipeWhereUniqueInput>,
};

/** An edge in a connection. */
export type RecipeEdge = {
   __typename?: 'RecipeEdge',
  /** The item at the end of the edge. */
  node: Recipe,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

/** Identifies documents */
export type RecipeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RecipeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RecipeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RecipeWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>,
  images?: Maybe<AssetWhereInput>,
  owner?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  userLikes_every?: Maybe<UserLikeWhereInput>,
  userLikes_some?: Maybe<UserLikeWhereInput>,
  userLikes_none?: Maybe<UserLikeWhereInput>,
};

export enum RecipeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  OwnerAsc = 'owner_ASC',
  OwnerDesc = 'owner_DESC'
}

export type RecipeUpdateInput = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  images?: Maybe<AssetUpdateOneInlineInput>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
  userLikes?: Maybe<UserLikeUpdateManyInlineInput>,
};

export type RecipeUpdateManyInlineInput = {
  /** Create and connect multiple Recipe documents */
  create?: Maybe<Array<RecipeCreateInput>>,
  /** Connect multiple existing Recipe documents */
  connect?: Maybe<Array<RecipeConnectInput>>,
  /** Override currently-connected documents with multiple existing Recipe documents */
  set?: Maybe<Array<RecipeWhereUniqueInput>>,
  /** Update multiple Recipe documents */
  update?: Maybe<Array<RecipeUpdateWithNestedWhereUniqueInput>>,
  /** Upsert multiple Recipe documents */
  upsert?: Maybe<Array<RecipeUpsertWithNestedWhereUniqueInput>>,
  /** Disconnect multiple Recipe documents */
  disconnect?: Maybe<Array<RecipeWhereUniqueInput>>,
  /** Delete multiple Recipe documents */
  delete?: Maybe<Array<RecipeWhereUniqueInput>>,
};

export type RecipeUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Scalars['Json']>,
  owner?: Maybe<Scalars['String']>,
};

export type RecipeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: RecipeWhereInput,
  /** Update many input */
  data: RecipeUpdateManyInput,
};

export type RecipeUpdateOneInlineInput = {
  /** Create and connect one Recipe document */
  create?: Maybe<RecipeCreateInput>,
  /** Update single Recipe document */
  update?: Maybe<RecipeUpdateWithNestedWhereUniqueInput>,
  /** Upsert single Recipe document */
  upsert?: Maybe<RecipeUpsertWithNestedWhereUniqueInput>,
  /** Connect existing Recipe document */
  connect?: Maybe<RecipeWhereUniqueInput>,
  /** Disconnect currently connected Recipe document */
  disconnect?: Maybe<Scalars['Boolean']>,
  /** Delete currently connected Recipe document */
  delete?: Maybe<Scalars['Boolean']>,
};

export type RecipeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: RecipeWhereUniqueInput,
  /** Document to update */
  data: RecipeUpdateInput,
};

export type RecipeUpsertInput = {
  /** Create document if it didn't exist */
  create: RecipeCreateInput,
  /** Update document if it exists */
  update: RecipeUpdateInput,
};

export type RecipeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: RecipeWhereUniqueInput,
  /** Upsert data */
  data: RecipeUpsertInput,
};

/** Identifies documents */
export type RecipeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<RecipeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<RecipeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<RecipeWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  title?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  title_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  title_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  title_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  title_not_ends_with?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  description_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  description_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  description_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  description_not_ends_with?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  content_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  content_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  content_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  content_not_ends_with?: Maybe<Scalars['String']>,
  images?: Maybe<AssetWhereInput>,
  owner?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  owner_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  owner_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  owner_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  owner_not_ends_with?: Maybe<Scalars['String']>,
  userLikes_every?: Maybe<UserLikeWhereInput>,
  userLikes_some?: Maybe<UserLikeWhereInput>,
  userLikes_none?: Maybe<UserLikeWhereInput>,
};

/** References Recipe record uniquely */
export type RecipeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
   __typename?: 'RGBA',
  r: Scalars['RGBAHue'],
  g: Scalars['RGBAHue'],
  b: Scalars['RGBAHue'],
  a: Scalars['RGBATransparency'],
};


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  r: Scalars['RGBAHue'],
  g: Scalars['RGBAHue'],
  b: Scalars['RGBAHue'],
  a: Scalars['RGBATransparency'],
};


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
   __typename?: 'RichText',
  /** Returns AST representation */
  raw: Scalars['RichTextAST'],
  /** Returns HTMl representation */
  html: Scalars['String'],
  /** Returns Markdown representation */
  markdown: Scalars['String'],
  /** Returns plain-text contents of RichText */
  text: Scalars['String'],
};


/** Stage system enumeration */
export enum Stage {
  /** System Published Stage */
  Published = 'PUBLISHED',
  /** System Draft Stage */
  Draft = 'DRAFT'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale,
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>,
};

export type UserLike = Node & {
   __typename?: 'UserLike',
  /** System stage field */
  stage: Stage,
  /** Get the document in other stages */
  documentInStages: Array<UserLike>,
  /** The unique identifier */
  id: Scalars['ID'],
  /** The time the document was created */
  createdAt: Scalars['DateTime'],
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'],
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>,
  recipe?: Maybe<Recipe>,
  user?: Maybe<Scalars['String']>,
};


export type UserLikeDocumentInStagesArgs = {
  stages?: Array<Stage>,
  includeCurrent?: Scalars['Boolean'],
  inheritLocale?: Scalars['Boolean']
};

export type UserLikeConnectInput = {
  /** Document to connect */
  where: UserLikeWhereUniqueInput,
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: Maybe<ConnectPositionInput>,
};

/** A connection to a list of items. */
export type UserLikeConnection = {
   __typename?: 'UserLikeConnection',
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** A list of edges. */
  edges: Array<UserLikeEdge>,
  aggregate: Aggregate,
};

export type UserLikeCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  recipe?: Maybe<RecipeCreateOneInlineInput>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeCreateManyInlineInput = {
  /** Create and connect multiple existing UserLike documents */
  create?: Maybe<Array<UserLikeCreateInput>>,
  /** Connect multiple existing UserLike documents */
  connect?: Maybe<Array<UserLikeWhereUniqueInput>>,
};

export type UserLikeCreateOneInlineInput = {
  /** Create and connect one UserLike document */
  create?: Maybe<UserLikeCreateInput>,
  /** Connect one existing UserLike document */
  connect?: Maybe<UserLikeWhereUniqueInput>,
};

/** An edge in a connection. */
export type UserLikeEdge = {
   __typename?: 'UserLikeEdge',
  /** The item at the end of the edge. */
  node: UserLike,
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
};

/** Identifies documents */
export type UserLikeManyWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserLikeWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  recipe?: Maybe<RecipeWhereInput>,
  user?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  user_not_ends_with?: Maybe<Scalars['String']>,
};

export enum UserLikeOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

export type UserLikeUpdateInput = {
  recipe?: Maybe<RecipeUpdateOneInlineInput>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeUpdateManyInlineInput = {
  /** Create and connect multiple UserLike documents */
  create?: Maybe<Array<UserLikeCreateInput>>,
  /** Connect multiple existing UserLike documents */
  connect?: Maybe<Array<UserLikeConnectInput>>,
  /** Override currently-connected documents with multiple existing UserLike documents */
  set?: Maybe<Array<UserLikeWhereUniqueInput>>,
  /** Update multiple UserLike documents */
  update?: Maybe<Array<UserLikeUpdateWithNestedWhereUniqueInput>>,
  /** Upsert multiple UserLike documents */
  upsert?: Maybe<Array<UserLikeUpsertWithNestedWhereUniqueInput>>,
  /** Disconnect multiple UserLike documents */
  disconnect?: Maybe<Array<UserLikeWhereUniqueInput>>,
  /** Delete multiple UserLike documents */
  delete?: Maybe<Array<UserLikeWhereUniqueInput>>,
};

export type UserLikeUpdateManyInput = {
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
  user?: Maybe<Scalars['String']>,
};

export type UserLikeUpdateManyWithNestedWhereInput = {
  /** Document search */
  where: UserLikeWhereInput,
  /** Update many input */
  data: UserLikeUpdateManyInput,
};

export type UserLikeUpdateOneInlineInput = {
  /** Create and connect one UserLike document */
  create?: Maybe<UserLikeCreateInput>,
  /** Update single UserLike document */
  update?: Maybe<UserLikeUpdateWithNestedWhereUniqueInput>,
  /** Upsert single UserLike document */
  upsert?: Maybe<UserLikeUpsertWithNestedWhereUniqueInput>,
  /** Connect existing UserLike document */
  connect?: Maybe<UserLikeWhereUniqueInput>,
  /** Disconnect currently connected UserLike document */
  disconnect?: Maybe<Scalars['Boolean']>,
  /** Delete currently connected UserLike document */
  delete?: Maybe<Scalars['Boolean']>,
};

export type UserLikeUpdateWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserLikeWhereUniqueInput,
  /** Document to update */
  data: UserLikeUpdateInput,
};

export type UserLikeUpsertInput = {
  /** Create document if it didn't exist */
  create: UserLikeCreateInput,
  /** Update document if it exists */
  update: UserLikeUpdateInput,
};

export type UserLikeUpsertWithNestedWhereUniqueInput = {
  /** Unique document search */
  where: UserLikeWhereUniqueInput,
  /** Upsert data */
  data: UserLikeUpsertInput,
};

/** Identifies documents */
export type UserLikeWhereInput = {
  /** Contains search across all appropriate fields. */
  _search?: Maybe<Scalars['String']>,
  /** Logical AND on all given filters. */
  AND?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical OR on all given filters. */
  OR?: Maybe<Array<UserLikeWhereInput>>,
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<Array<UserLikeWhereInput>>,
  id?: Maybe<Scalars['ID']>,
  /** All values that are not equal to given value. */
  id_not?: Maybe<Scalars['ID']>,
  /** All values that are contained in given list. */
  id_in?: Maybe<Array<Scalars['ID']>>,
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<Array<Scalars['ID']>>,
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
  /** All values not ending with the given string */
  id_not_ends_with?: Maybe<Scalars['ID']>,
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
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** All values that are not equal to given value. */
  publishedAt_not?: Maybe<Scalars['DateTime']>,
  /** All values that are contained in given list. */
  publishedAt_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values that are not contained in given list. */
  publishedAt_not_in?: Maybe<Array<Scalars['DateTime']>>,
  /** All values less than the given value. */
  publishedAt_lt?: Maybe<Scalars['DateTime']>,
  /** All values less than or equal the given value. */
  publishedAt_lte?: Maybe<Scalars['DateTime']>,
  /** All values greater than the given value. */
  publishedAt_gt?: Maybe<Scalars['DateTime']>,
  /** All values greater than or equal the given value. */
  publishedAt_gte?: Maybe<Scalars['DateTime']>,
  recipe?: Maybe<RecipeWhereInput>,
  user?: Maybe<Scalars['String']>,
  /** All values that are not equal to given value. */
  user_not?: Maybe<Scalars['String']>,
  /** All values that are contained in given list. */
  user_in?: Maybe<Array<Scalars['String']>>,
  /** All values that are not contained in given list. */
  user_not_in?: Maybe<Array<Scalars['String']>>,
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
  /** All values not ending with the given string */
  user_not_ends_with?: Maybe<Scalars['String']>,
};

/** References UserLike record uniquely */
export type UserLikeWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
};

export type CreateRecipeGraphQlMutationVariables = {
  data: RecipeCreateInput
};


export type CreateRecipeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: Maybe<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
);

export type CreateUserLikeGraphQlMutationVariables = {
  data: UserLikeCreateInput
};


export type CreateUserLikeGraphQlMutation = (
  { __typename?: 'Mutation' }
  & { createUserLike: Maybe<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id'>
    )> }
  )> }
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
    & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id'>
    )>, images: Maybe<(
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
    & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>, images: Maybe<(
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
  & { recipes: Array<(
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
    & { userLikes: Array<(
      { __typename?: 'UserLike' }
      & Pick<UserLike, 'id' | 'user'>
    )>, images: Maybe<(
      { __typename?: 'Asset' }
      & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
    )> }
  )> }
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
      & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes: Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>, images: Maybe<(
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
  & { userLikes: Array<(
    { __typename?: 'UserLike' }
    & Pick<UserLike, 'id' | 'user'>
    & { recipe: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'stage' | 'title' | 'content' | 'description' | 'ingredients' | 'owner'>
      & { userLikes: Array<(
        { __typename?: 'UserLike' }
        & Pick<UserLike, 'id' | 'user'>
      )>, images: Maybe<(
        { __typename?: 'Asset' }
        & Pick<Asset, 'id' | 'fileName' | 'height' | 'width' | 'size' | 'handle'>
      )> }
    )> }
  )> }
);
