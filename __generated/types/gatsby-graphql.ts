export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContinentsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  fields?: Maybe<ContinentsJsonFields>;
  type?: Maybe<Scalars['String']>;
  map?: Maybe<File>;
  nations?: Maybe<Array<Maybe<NationsJson>>>;
  parentLocation?: Maybe<Scalars['String']>;
};

export type ContinentsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContinentsJsonEdge>;
  nodes: Array<ContinentsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContinentsJsonGroupConnection>;
};


export type ContinentsJsonConnectionDistinctArgs = {
  field: ContinentsJsonFieldsEnum;
};


export type ContinentsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContinentsJsonFieldsEnum;
};

export type ContinentsJsonEdge = {
  next?: Maybe<ContinentsJson>;
  node: ContinentsJson;
  previous?: Maybe<ContinentsJson>;
};

export type ContinentsJsonFields = {
  slug?: Maybe<Scalars['String']>;
};

export type ContinentsJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'fields___slug'
  | 'type'
  | 'map___sourceInstanceName'
  | 'map___absolutePath'
  | 'map___relativePath'
  | 'map___extension'
  | 'map___size'
  | 'map___prettySize'
  | 'map___modifiedTime'
  | 'map___accessTime'
  | 'map___changeTime'
  | 'map___birthTime'
  | 'map___root'
  | 'map___dir'
  | 'map___base'
  | 'map___ext'
  | 'map___name'
  | 'map___relativeDirectory'
  | 'map___dev'
  | 'map___mode'
  | 'map___nlink'
  | 'map___uid'
  | 'map___gid'
  | 'map___rdev'
  | 'map___ino'
  | 'map___atimeMs'
  | 'map___mtimeMs'
  | 'map___ctimeMs'
  | 'map___atime'
  | 'map___mtime'
  | 'map___ctime'
  | 'map___birthtime'
  | 'map___birthtimeMs'
  | 'map___blksize'
  | 'map___blocks'
  | 'map___publicURL'
  | 'map___childImageSharp___fixed___base64'
  | 'map___childImageSharp___fixed___tracedSVG'
  | 'map___childImageSharp___fixed___aspectRatio'
  | 'map___childImageSharp___fixed___width'
  | 'map___childImageSharp___fixed___height'
  | 'map___childImageSharp___fixed___src'
  | 'map___childImageSharp___fixed___srcSet'
  | 'map___childImageSharp___fixed___srcWebp'
  | 'map___childImageSharp___fixed___srcSetWebp'
  | 'map___childImageSharp___fixed___originalName'
  | 'map___childImageSharp___resolutions___base64'
  | 'map___childImageSharp___resolutions___tracedSVG'
  | 'map___childImageSharp___resolutions___aspectRatio'
  | 'map___childImageSharp___resolutions___width'
  | 'map___childImageSharp___resolutions___height'
  | 'map___childImageSharp___resolutions___src'
  | 'map___childImageSharp___resolutions___srcSet'
  | 'map___childImageSharp___resolutions___srcWebp'
  | 'map___childImageSharp___resolutions___srcSetWebp'
  | 'map___childImageSharp___resolutions___originalName'
  | 'map___childImageSharp___fluid___base64'
  | 'map___childImageSharp___fluid___tracedSVG'
  | 'map___childImageSharp___fluid___aspectRatio'
  | 'map___childImageSharp___fluid___src'
  | 'map___childImageSharp___fluid___srcSet'
  | 'map___childImageSharp___fluid___srcWebp'
  | 'map___childImageSharp___fluid___srcSetWebp'
  | 'map___childImageSharp___fluid___sizes'
  | 'map___childImageSharp___fluid___originalImg'
  | 'map___childImageSharp___fluid___originalName'
  | 'map___childImageSharp___fluid___presentationWidth'
  | 'map___childImageSharp___fluid___presentationHeight'
  | 'map___childImageSharp___sizes___base64'
  | 'map___childImageSharp___sizes___tracedSVG'
  | 'map___childImageSharp___sizes___aspectRatio'
  | 'map___childImageSharp___sizes___src'
  | 'map___childImageSharp___sizes___srcSet'
  | 'map___childImageSharp___sizes___srcWebp'
  | 'map___childImageSharp___sizes___srcSetWebp'
  | 'map___childImageSharp___sizes___sizes'
  | 'map___childImageSharp___sizes___originalImg'
  | 'map___childImageSharp___sizes___originalName'
  | 'map___childImageSharp___sizes___presentationWidth'
  | 'map___childImageSharp___sizes___presentationHeight'
  | 'map___childImageSharp___original___width'
  | 'map___childImageSharp___original___height'
  | 'map___childImageSharp___original___src'
  | 'map___childImageSharp___resize___src'
  | 'map___childImageSharp___resize___tracedSVG'
  | 'map___childImageSharp___resize___width'
  | 'map___childImageSharp___resize___height'
  | 'map___childImageSharp___resize___aspectRatio'
  | 'map___childImageSharp___resize___originalName'
  | 'map___childImageSharp___id'
  | 'map___childImageSharp___parent___id'
  | 'map___childImageSharp___parent___children'
  | 'map___childImageSharp___children'
  | 'map___childImageSharp___children___id'
  | 'map___childImageSharp___children___children'
  | 'map___childImageSharp___internal___content'
  | 'map___childImageSharp___internal___contentDigest'
  | 'map___childImageSharp___internal___description'
  | 'map___childImageSharp___internal___fieldOwners'
  | 'map___childImageSharp___internal___ignoreType'
  | 'map___childImageSharp___internal___mediaType'
  | 'map___childImageSharp___internal___owner'
  | 'map___childImageSharp___internal___type'
  | 'map___id'
  | 'map___parent___id'
  | 'map___parent___parent___id'
  | 'map___parent___parent___children'
  | 'map___parent___children'
  | 'map___parent___children___id'
  | 'map___parent___children___children'
  | 'map___parent___internal___content'
  | 'map___parent___internal___contentDigest'
  | 'map___parent___internal___description'
  | 'map___parent___internal___fieldOwners'
  | 'map___parent___internal___ignoreType'
  | 'map___parent___internal___mediaType'
  | 'map___parent___internal___owner'
  | 'map___parent___internal___type'
  | 'map___children'
  | 'map___children___id'
  | 'map___children___parent___id'
  | 'map___children___parent___children'
  | 'map___children___children'
  | 'map___children___children___id'
  | 'map___children___children___children'
  | 'map___children___internal___content'
  | 'map___children___internal___contentDigest'
  | 'map___children___internal___description'
  | 'map___children___internal___fieldOwners'
  | 'map___children___internal___ignoreType'
  | 'map___children___internal___mediaType'
  | 'map___children___internal___owner'
  | 'map___children___internal___type'
  | 'map___internal___content'
  | 'map___internal___contentDigest'
  | 'map___internal___description'
  | 'map___internal___fieldOwners'
  | 'map___internal___ignoreType'
  | 'map___internal___mediaType'
  | 'map___internal___owner'
  | 'map___internal___type'
  | 'map___childWorldJson___id'
  | 'map___childWorldJson___parent___id'
  | 'map___childWorldJson___parent___children'
  | 'map___childWorldJson___children'
  | 'map___childWorldJson___children___id'
  | 'map___childWorldJson___children___children'
  | 'map___childWorldJson___internal___content'
  | 'map___childWorldJson___internal___contentDigest'
  | 'map___childWorldJson___internal___description'
  | 'map___childWorldJson___internal___fieldOwners'
  | 'map___childWorldJson___internal___ignoreType'
  | 'map___childWorldJson___internal___mediaType'
  | 'map___childWorldJson___internal___owner'
  | 'map___childWorldJson___internal___type'
  | 'map___childWorldJson___name'
  | 'map___childWorldJson___geography___continents'
  | 'map___childNationsJson___id'
  | 'map___childNationsJson___parent___id'
  | 'map___childNationsJson___parent___children'
  | 'map___childNationsJson___children'
  | 'map___childNationsJson___children___id'
  | 'map___childNationsJson___children___children'
  | 'map___childNationsJson___internal___content'
  | 'map___childNationsJson___internal___contentDigest'
  | 'map___childNationsJson___internal___description'
  | 'map___childNationsJson___internal___fieldOwners'
  | 'map___childNationsJson___internal___ignoreType'
  | 'map___childNationsJson___internal___mediaType'
  | 'map___childNationsJson___internal___owner'
  | 'map___childNationsJson___internal___type'
  | 'map___childNationsJson___name'
  | 'map___childNationsJson___type'
  | 'map___childNationsJson___parentLocation'
  | 'map___childNationsJson___map___sourceInstanceName'
  | 'map___childNationsJson___map___absolutePath'
  | 'map___childNationsJson___map___relativePath'
  | 'map___childNationsJson___map___extension'
  | 'map___childNationsJson___map___size'
  | 'map___childNationsJson___map___prettySize'
  | 'map___childNationsJson___map___modifiedTime'
  | 'map___childNationsJson___map___accessTime'
  | 'map___childNationsJson___map___changeTime'
  | 'map___childNationsJson___map___birthTime'
  | 'map___childNationsJson___map___root'
  | 'map___childNationsJson___map___dir'
  | 'map___childNationsJson___map___base'
  | 'map___childNationsJson___map___ext'
  | 'map___childNationsJson___map___name'
  | 'map___childNationsJson___map___relativeDirectory'
  | 'map___childNationsJson___map___dev'
  | 'map___childNationsJson___map___mode'
  | 'map___childNationsJson___map___nlink'
  | 'map___childNationsJson___map___uid'
  | 'map___childNationsJson___map___gid'
  | 'map___childNationsJson___map___rdev'
  | 'map___childNationsJson___map___ino'
  | 'map___childNationsJson___map___atimeMs'
  | 'map___childNationsJson___map___mtimeMs'
  | 'map___childNationsJson___map___ctimeMs'
  | 'map___childNationsJson___map___atime'
  | 'map___childNationsJson___map___mtime'
  | 'map___childNationsJson___map___ctime'
  | 'map___childNationsJson___map___birthtime'
  | 'map___childNationsJson___map___birthtimeMs'
  | 'map___childNationsJson___map___blksize'
  | 'map___childNationsJson___map___blocks'
  | 'map___childNationsJson___map___publicURL'
  | 'map___childNationsJson___map___id'
  | 'map___childNationsJson___map___children'
  | 'map___childContinentsJson___id'
  | 'map___childContinentsJson___parent___id'
  | 'map___childContinentsJson___parent___children'
  | 'map___childContinentsJson___children'
  | 'map___childContinentsJson___children___id'
  | 'map___childContinentsJson___children___children'
  | 'map___childContinentsJson___internal___content'
  | 'map___childContinentsJson___internal___contentDigest'
  | 'map___childContinentsJson___internal___description'
  | 'map___childContinentsJson___internal___fieldOwners'
  | 'map___childContinentsJson___internal___ignoreType'
  | 'map___childContinentsJson___internal___mediaType'
  | 'map___childContinentsJson___internal___owner'
  | 'map___childContinentsJson___internal___type'
  | 'map___childContinentsJson___name'
  | 'map___childContinentsJson___fields___slug'
  | 'map___childContinentsJson___type'
  | 'map___childContinentsJson___map___sourceInstanceName'
  | 'map___childContinentsJson___map___absolutePath'
  | 'map___childContinentsJson___map___relativePath'
  | 'map___childContinentsJson___map___extension'
  | 'map___childContinentsJson___map___size'
  | 'map___childContinentsJson___map___prettySize'
  | 'map___childContinentsJson___map___modifiedTime'
  | 'map___childContinentsJson___map___accessTime'
  | 'map___childContinentsJson___map___changeTime'
  | 'map___childContinentsJson___map___birthTime'
  | 'map___childContinentsJson___map___root'
  | 'map___childContinentsJson___map___dir'
  | 'map___childContinentsJson___map___base'
  | 'map___childContinentsJson___map___ext'
  | 'map___childContinentsJson___map___name'
  | 'map___childContinentsJson___map___relativeDirectory'
  | 'map___childContinentsJson___map___dev'
  | 'map___childContinentsJson___map___mode'
  | 'map___childContinentsJson___map___nlink'
  | 'map___childContinentsJson___map___uid'
  | 'map___childContinentsJson___map___gid'
  | 'map___childContinentsJson___map___rdev'
  | 'map___childContinentsJson___map___ino'
  | 'map___childContinentsJson___map___atimeMs'
  | 'map___childContinentsJson___map___mtimeMs'
  | 'map___childContinentsJson___map___ctimeMs'
  | 'map___childContinentsJson___map___atime'
  | 'map___childContinentsJson___map___mtime'
  | 'map___childContinentsJson___map___ctime'
  | 'map___childContinentsJson___map___birthtime'
  | 'map___childContinentsJson___map___birthtimeMs'
  | 'map___childContinentsJson___map___blksize'
  | 'map___childContinentsJson___map___blocks'
  | 'map___childContinentsJson___map___publicURL'
  | 'map___childContinentsJson___map___id'
  | 'map___childContinentsJson___map___children'
  | 'map___childContinentsJson___nations'
  | 'map___childContinentsJson___nations___id'
  | 'map___childContinentsJson___nations___children'
  | 'map___childContinentsJson___nations___name'
  | 'map___childContinentsJson___nations___type'
  | 'map___childContinentsJson___nations___parentLocation'
  | 'map___childContinentsJson___parentLocation'
  | 'map___childGeoJson___id'
  | 'map___childGeoJson___parent___id'
  | 'map___childGeoJson___parent___children'
  | 'map___childGeoJson___children'
  | 'map___childGeoJson___children___id'
  | 'map___childGeoJson___children___children'
  | 'map___childGeoJson___internal___content'
  | 'map___childGeoJson___internal___contentDigest'
  | 'map___childGeoJson___internal___description'
  | 'map___childGeoJson___internal___fieldOwners'
  | 'map___childGeoJson___internal___ignoreType'
  | 'map___childGeoJson___internal___mediaType'
  | 'map___childGeoJson___internal___owner'
  | 'map___childGeoJson___internal___type'
  | 'map___childGeoJson___type'
  | 'map___childGeoJson___properties___nation'
  | 'map___childGeoJson___geometry___type'
  | 'map___childGeoJson___geometry___coordinates'
  | 'map___childMarkdownRemark___id'
  | 'map___childMarkdownRemark___frontmatter___title'
  | 'map___childMarkdownRemark___frontmatter___template'
  | 'map___childMarkdownRemark___frontmatter___date'
  | 'map___childMarkdownRemark___frontmatter___inspiration'
  | 'map___childMarkdownRemark___excerpt'
  | 'map___childMarkdownRemark___rawMarkdownBody'
  | 'map___childMarkdownRemark___fileAbsolutePath'
  | 'map___childMarkdownRemark___fields___slug'
  | 'map___childMarkdownRemark___html'
  | 'map___childMarkdownRemark___htmlAst'
  | 'map___childMarkdownRemark___excerptAst'
  | 'map___childMarkdownRemark___headings'
  | 'map___childMarkdownRemark___headings___id'
  | 'map___childMarkdownRemark___headings___value'
  | 'map___childMarkdownRemark___headings___depth'
  | 'map___childMarkdownRemark___timeToRead'
  | 'map___childMarkdownRemark___tableOfContents'
  | 'map___childMarkdownRemark___wordCount___paragraphs'
  | 'map___childMarkdownRemark___wordCount___sentences'
  | 'map___childMarkdownRemark___wordCount___words'
  | 'map___childMarkdownRemark___parent___id'
  | 'map___childMarkdownRemark___parent___children'
  | 'map___childMarkdownRemark___children'
  | 'map___childMarkdownRemark___children___id'
  | 'map___childMarkdownRemark___children___children'
  | 'map___childMarkdownRemark___internal___content'
  | 'map___childMarkdownRemark___internal___contentDigest'
  | 'map___childMarkdownRemark___internal___description'
  | 'map___childMarkdownRemark___internal___fieldOwners'
  | 'map___childMarkdownRemark___internal___ignoreType'
  | 'map___childMarkdownRemark___internal___mediaType'
  | 'map___childMarkdownRemark___internal___owner'
  | 'map___childMarkdownRemark___internal___type'
  | 'nations'
  | 'nations___id'
  | 'nations___parent___id'
  | 'nations___parent___parent___id'
  | 'nations___parent___parent___children'
  | 'nations___parent___children'
  | 'nations___parent___children___id'
  | 'nations___parent___children___children'
  | 'nations___parent___internal___content'
  | 'nations___parent___internal___contentDigest'
  | 'nations___parent___internal___description'
  | 'nations___parent___internal___fieldOwners'
  | 'nations___parent___internal___ignoreType'
  | 'nations___parent___internal___mediaType'
  | 'nations___parent___internal___owner'
  | 'nations___parent___internal___type'
  | 'nations___children'
  | 'nations___children___id'
  | 'nations___children___parent___id'
  | 'nations___children___parent___children'
  | 'nations___children___children'
  | 'nations___children___children___id'
  | 'nations___children___children___children'
  | 'nations___children___internal___content'
  | 'nations___children___internal___contentDigest'
  | 'nations___children___internal___description'
  | 'nations___children___internal___fieldOwners'
  | 'nations___children___internal___ignoreType'
  | 'nations___children___internal___mediaType'
  | 'nations___children___internal___owner'
  | 'nations___children___internal___type'
  | 'nations___internal___content'
  | 'nations___internal___contentDigest'
  | 'nations___internal___description'
  | 'nations___internal___fieldOwners'
  | 'nations___internal___ignoreType'
  | 'nations___internal___mediaType'
  | 'nations___internal___owner'
  | 'nations___internal___type'
  | 'nations___name'
  | 'nations___type'
  | 'nations___parentLocation'
  | 'nations___map___sourceInstanceName'
  | 'nations___map___absolutePath'
  | 'nations___map___relativePath'
  | 'nations___map___extension'
  | 'nations___map___size'
  | 'nations___map___prettySize'
  | 'nations___map___modifiedTime'
  | 'nations___map___accessTime'
  | 'nations___map___changeTime'
  | 'nations___map___birthTime'
  | 'nations___map___root'
  | 'nations___map___dir'
  | 'nations___map___base'
  | 'nations___map___ext'
  | 'nations___map___name'
  | 'nations___map___relativeDirectory'
  | 'nations___map___dev'
  | 'nations___map___mode'
  | 'nations___map___nlink'
  | 'nations___map___uid'
  | 'nations___map___gid'
  | 'nations___map___rdev'
  | 'nations___map___ino'
  | 'nations___map___atimeMs'
  | 'nations___map___mtimeMs'
  | 'nations___map___ctimeMs'
  | 'nations___map___atime'
  | 'nations___map___mtime'
  | 'nations___map___ctime'
  | 'nations___map___birthtime'
  | 'nations___map___birthtimeMs'
  | 'nations___map___blksize'
  | 'nations___map___blocks'
  | 'nations___map___publicURL'
  | 'nations___map___childImageSharp___id'
  | 'nations___map___childImageSharp___children'
  | 'nations___map___id'
  | 'nations___map___parent___id'
  | 'nations___map___parent___children'
  | 'nations___map___children'
  | 'nations___map___children___id'
  | 'nations___map___children___children'
  | 'nations___map___internal___content'
  | 'nations___map___internal___contentDigest'
  | 'nations___map___internal___description'
  | 'nations___map___internal___fieldOwners'
  | 'nations___map___internal___ignoreType'
  | 'nations___map___internal___mediaType'
  | 'nations___map___internal___owner'
  | 'nations___map___internal___type'
  | 'nations___map___childWorldJson___id'
  | 'nations___map___childWorldJson___children'
  | 'nations___map___childWorldJson___name'
  | 'nations___map___childNationsJson___id'
  | 'nations___map___childNationsJson___children'
  | 'nations___map___childNationsJson___name'
  | 'nations___map___childNationsJson___type'
  | 'nations___map___childNationsJson___parentLocation'
  | 'nations___map___childContinentsJson___id'
  | 'nations___map___childContinentsJson___children'
  | 'nations___map___childContinentsJson___name'
  | 'nations___map___childContinentsJson___type'
  | 'nations___map___childContinentsJson___nations'
  | 'nations___map___childContinentsJson___parentLocation'
  | 'nations___map___childGeoJson___id'
  | 'nations___map___childGeoJson___children'
  | 'nations___map___childGeoJson___type'
  | 'nations___map___childMarkdownRemark___id'
  | 'nations___map___childMarkdownRemark___excerpt'
  | 'nations___map___childMarkdownRemark___rawMarkdownBody'
  | 'nations___map___childMarkdownRemark___fileAbsolutePath'
  | 'nations___map___childMarkdownRemark___html'
  | 'nations___map___childMarkdownRemark___htmlAst'
  | 'nations___map___childMarkdownRemark___excerptAst'
  | 'nations___map___childMarkdownRemark___headings'
  | 'nations___map___childMarkdownRemark___timeToRead'
  | 'nations___map___childMarkdownRemark___tableOfContents'
  | 'nations___map___childMarkdownRemark___children'
  | 'parentLocation';

export type ContinentsJsonFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type ContinentsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContinentsJsonFieldsFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  map?: Maybe<FileFilterInput>;
  nations?: Maybe<NationsJsonFilterListInput>;
  parentLocation?: Maybe<StringQueryOperatorInput>;
};

export type ContinentsJsonFilterListInput = {
  elemMatch?: Maybe<ContinentsJsonFilterInput>;
};

export type ContinentsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContinentsJsonEdge>;
  nodes: Array<ContinentsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContinentsJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContinentsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childWorldJson?: Maybe<WorldJson>;
  childNationsJson?: Maybe<NationsJson>;
  childContinentsJson?: Maybe<ContinentsJson>;
  childGeoJson?: Maybe<GeoJson>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childWorldJson___id'
  | 'childWorldJson___parent___id'
  | 'childWorldJson___parent___parent___id'
  | 'childWorldJson___parent___parent___children'
  | 'childWorldJson___parent___children'
  | 'childWorldJson___parent___children___id'
  | 'childWorldJson___parent___children___children'
  | 'childWorldJson___parent___internal___content'
  | 'childWorldJson___parent___internal___contentDigest'
  | 'childWorldJson___parent___internal___description'
  | 'childWorldJson___parent___internal___fieldOwners'
  | 'childWorldJson___parent___internal___ignoreType'
  | 'childWorldJson___parent___internal___mediaType'
  | 'childWorldJson___parent___internal___owner'
  | 'childWorldJson___parent___internal___type'
  | 'childWorldJson___children'
  | 'childWorldJson___children___id'
  | 'childWorldJson___children___parent___id'
  | 'childWorldJson___children___parent___children'
  | 'childWorldJson___children___children'
  | 'childWorldJson___children___children___id'
  | 'childWorldJson___children___children___children'
  | 'childWorldJson___children___internal___content'
  | 'childWorldJson___children___internal___contentDigest'
  | 'childWorldJson___children___internal___description'
  | 'childWorldJson___children___internal___fieldOwners'
  | 'childWorldJson___children___internal___ignoreType'
  | 'childWorldJson___children___internal___mediaType'
  | 'childWorldJson___children___internal___owner'
  | 'childWorldJson___children___internal___type'
  | 'childWorldJson___internal___content'
  | 'childWorldJson___internal___contentDigest'
  | 'childWorldJson___internal___description'
  | 'childWorldJson___internal___fieldOwners'
  | 'childWorldJson___internal___ignoreType'
  | 'childWorldJson___internal___mediaType'
  | 'childWorldJson___internal___owner'
  | 'childWorldJson___internal___type'
  | 'childWorldJson___name'
  | 'childWorldJson___geography___continents'
  | 'childWorldJson___geography___continents___id'
  | 'childWorldJson___geography___continents___children'
  | 'childWorldJson___geography___continents___name'
  | 'childWorldJson___geography___continents___type'
  | 'childWorldJson___geography___continents___nations'
  | 'childWorldJson___geography___continents___parentLocation'
  | 'childNationsJson___id'
  | 'childNationsJson___parent___id'
  | 'childNationsJson___parent___parent___id'
  | 'childNationsJson___parent___parent___children'
  | 'childNationsJson___parent___children'
  | 'childNationsJson___parent___children___id'
  | 'childNationsJson___parent___children___children'
  | 'childNationsJson___parent___internal___content'
  | 'childNationsJson___parent___internal___contentDigest'
  | 'childNationsJson___parent___internal___description'
  | 'childNationsJson___parent___internal___fieldOwners'
  | 'childNationsJson___parent___internal___ignoreType'
  | 'childNationsJson___parent___internal___mediaType'
  | 'childNationsJson___parent___internal___owner'
  | 'childNationsJson___parent___internal___type'
  | 'childNationsJson___children'
  | 'childNationsJson___children___id'
  | 'childNationsJson___children___parent___id'
  | 'childNationsJson___children___parent___children'
  | 'childNationsJson___children___children'
  | 'childNationsJson___children___children___id'
  | 'childNationsJson___children___children___children'
  | 'childNationsJson___children___internal___content'
  | 'childNationsJson___children___internal___contentDigest'
  | 'childNationsJson___children___internal___description'
  | 'childNationsJson___children___internal___fieldOwners'
  | 'childNationsJson___children___internal___ignoreType'
  | 'childNationsJson___children___internal___mediaType'
  | 'childNationsJson___children___internal___owner'
  | 'childNationsJson___children___internal___type'
  | 'childNationsJson___internal___content'
  | 'childNationsJson___internal___contentDigest'
  | 'childNationsJson___internal___description'
  | 'childNationsJson___internal___fieldOwners'
  | 'childNationsJson___internal___ignoreType'
  | 'childNationsJson___internal___mediaType'
  | 'childNationsJson___internal___owner'
  | 'childNationsJson___internal___type'
  | 'childNationsJson___name'
  | 'childNationsJson___type'
  | 'childNationsJson___parentLocation'
  | 'childNationsJson___map___sourceInstanceName'
  | 'childNationsJson___map___absolutePath'
  | 'childNationsJson___map___relativePath'
  | 'childNationsJson___map___extension'
  | 'childNationsJson___map___size'
  | 'childNationsJson___map___prettySize'
  | 'childNationsJson___map___modifiedTime'
  | 'childNationsJson___map___accessTime'
  | 'childNationsJson___map___changeTime'
  | 'childNationsJson___map___birthTime'
  | 'childNationsJson___map___root'
  | 'childNationsJson___map___dir'
  | 'childNationsJson___map___base'
  | 'childNationsJson___map___ext'
  | 'childNationsJson___map___name'
  | 'childNationsJson___map___relativeDirectory'
  | 'childNationsJson___map___dev'
  | 'childNationsJson___map___mode'
  | 'childNationsJson___map___nlink'
  | 'childNationsJson___map___uid'
  | 'childNationsJson___map___gid'
  | 'childNationsJson___map___rdev'
  | 'childNationsJson___map___ino'
  | 'childNationsJson___map___atimeMs'
  | 'childNationsJson___map___mtimeMs'
  | 'childNationsJson___map___ctimeMs'
  | 'childNationsJson___map___atime'
  | 'childNationsJson___map___mtime'
  | 'childNationsJson___map___ctime'
  | 'childNationsJson___map___birthtime'
  | 'childNationsJson___map___birthtimeMs'
  | 'childNationsJson___map___blksize'
  | 'childNationsJson___map___blocks'
  | 'childNationsJson___map___publicURL'
  | 'childNationsJson___map___childImageSharp___id'
  | 'childNationsJson___map___childImageSharp___children'
  | 'childNationsJson___map___id'
  | 'childNationsJson___map___parent___id'
  | 'childNationsJson___map___parent___children'
  | 'childNationsJson___map___children'
  | 'childNationsJson___map___children___id'
  | 'childNationsJson___map___children___children'
  | 'childNationsJson___map___internal___content'
  | 'childNationsJson___map___internal___contentDigest'
  | 'childNationsJson___map___internal___description'
  | 'childNationsJson___map___internal___fieldOwners'
  | 'childNationsJson___map___internal___ignoreType'
  | 'childNationsJson___map___internal___mediaType'
  | 'childNationsJson___map___internal___owner'
  | 'childNationsJson___map___internal___type'
  | 'childNationsJson___map___childWorldJson___id'
  | 'childNationsJson___map___childWorldJson___children'
  | 'childNationsJson___map___childWorldJson___name'
  | 'childNationsJson___map___childNationsJson___id'
  | 'childNationsJson___map___childNationsJson___children'
  | 'childNationsJson___map___childNationsJson___name'
  | 'childNationsJson___map___childNationsJson___type'
  | 'childNationsJson___map___childNationsJson___parentLocation'
  | 'childNationsJson___map___childContinentsJson___id'
  | 'childNationsJson___map___childContinentsJson___children'
  | 'childNationsJson___map___childContinentsJson___name'
  | 'childNationsJson___map___childContinentsJson___type'
  | 'childNationsJson___map___childContinentsJson___nations'
  | 'childNationsJson___map___childContinentsJson___parentLocation'
  | 'childNationsJson___map___childGeoJson___id'
  | 'childNationsJson___map___childGeoJson___children'
  | 'childNationsJson___map___childGeoJson___type'
  | 'childNationsJson___map___childMarkdownRemark___id'
  | 'childNationsJson___map___childMarkdownRemark___excerpt'
  | 'childNationsJson___map___childMarkdownRemark___rawMarkdownBody'
  | 'childNationsJson___map___childMarkdownRemark___fileAbsolutePath'
  | 'childNationsJson___map___childMarkdownRemark___html'
  | 'childNationsJson___map___childMarkdownRemark___htmlAst'
  | 'childNationsJson___map___childMarkdownRemark___excerptAst'
  | 'childNationsJson___map___childMarkdownRemark___headings'
  | 'childNationsJson___map___childMarkdownRemark___timeToRead'
  | 'childNationsJson___map___childMarkdownRemark___tableOfContents'
  | 'childNationsJson___map___childMarkdownRemark___children'
  | 'childContinentsJson___id'
  | 'childContinentsJson___parent___id'
  | 'childContinentsJson___parent___parent___id'
  | 'childContinentsJson___parent___parent___children'
  | 'childContinentsJson___parent___children'
  | 'childContinentsJson___parent___children___id'
  | 'childContinentsJson___parent___children___children'
  | 'childContinentsJson___parent___internal___content'
  | 'childContinentsJson___parent___internal___contentDigest'
  | 'childContinentsJson___parent___internal___description'
  | 'childContinentsJson___parent___internal___fieldOwners'
  | 'childContinentsJson___parent___internal___ignoreType'
  | 'childContinentsJson___parent___internal___mediaType'
  | 'childContinentsJson___parent___internal___owner'
  | 'childContinentsJson___parent___internal___type'
  | 'childContinentsJson___children'
  | 'childContinentsJson___children___id'
  | 'childContinentsJson___children___parent___id'
  | 'childContinentsJson___children___parent___children'
  | 'childContinentsJson___children___children'
  | 'childContinentsJson___children___children___id'
  | 'childContinentsJson___children___children___children'
  | 'childContinentsJson___children___internal___content'
  | 'childContinentsJson___children___internal___contentDigest'
  | 'childContinentsJson___children___internal___description'
  | 'childContinentsJson___children___internal___fieldOwners'
  | 'childContinentsJson___children___internal___ignoreType'
  | 'childContinentsJson___children___internal___mediaType'
  | 'childContinentsJson___children___internal___owner'
  | 'childContinentsJson___children___internal___type'
  | 'childContinentsJson___internal___content'
  | 'childContinentsJson___internal___contentDigest'
  | 'childContinentsJson___internal___description'
  | 'childContinentsJson___internal___fieldOwners'
  | 'childContinentsJson___internal___ignoreType'
  | 'childContinentsJson___internal___mediaType'
  | 'childContinentsJson___internal___owner'
  | 'childContinentsJson___internal___type'
  | 'childContinentsJson___name'
  | 'childContinentsJson___fields___slug'
  | 'childContinentsJson___type'
  | 'childContinentsJson___map___sourceInstanceName'
  | 'childContinentsJson___map___absolutePath'
  | 'childContinentsJson___map___relativePath'
  | 'childContinentsJson___map___extension'
  | 'childContinentsJson___map___size'
  | 'childContinentsJson___map___prettySize'
  | 'childContinentsJson___map___modifiedTime'
  | 'childContinentsJson___map___accessTime'
  | 'childContinentsJson___map___changeTime'
  | 'childContinentsJson___map___birthTime'
  | 'childContinentsJson___map___root'
  | 'childContinentsJson___map___dir'
  | 'childContinentsJson___map___base'
  | 'childContinentsJson___map___ext'
  | 'childContinentsJson___map___name'
  | 'childContinentsJson___map___relativeDirectory'
  | 'childContinentsJson___map___dev'
  | 'childContinentsJson___map___mode'
  | 'childContinentsJson___map___nlink'
  | 'childContinentsJson___map___uid'
  | 'childContinentsJson___map___gid'
  | 'childContinentsJson___map___rdev'
  | 'childContinentsJson___map___ino'
  | 'childContinentsJson___map___atimeMs'
  | 'childContinentsJson___map___mtimeMs'
  | 'childContinentsJson___map___ctimeMs'
  | 'childContinentsJson___map___atime'
  | 'childContinentsJson___map___mtime'
  | 'childContinentsJson___map___ctime'
  | 'childContinentsJson___map___birthtime'
  | 'childContinentsJson___map___birthtimeMs'
  | 'childContinentsJson___map___blksize'
  | 'childContinentsJson___map___blocks'
  | 'childContinentsJson___map___publicURL'
  | 'childContinentsJson___map___childImageSharp___id'
  | 'childContinentsJson___map___childImageSharp___children'
  | 'childContinentsJson___map___id'
  | 'childContinentsJson___map___parent___id'
  | 'childContinentsJson___map___parent___children'
  | 'childContinentsJson___map___children'
  | 'childContinentsJson___map___children___id'
  | 'childContinentsJson___map___children___children'
  | 'childContinentsJson___map___internal___content'
  | 'childContinentsJson___map___internal___contentDigest'
  | 'childContinentsJson___map___internal___description'
  | 'childContinentsJson___map___internal___fieldOwners'
  | 'childContinentsJson___map___internal___ignoreType'
  | 'childContinentsJson___map___internal___mediaType'
  | 'childContinentsJson___map___internal___owner'
  | 'childContinentsJson___map___internal___type'
  | 'childContinentsJson___map___childWorldJson___id'
  | 'childContinentsJson___map___childWorldJson___children'
  | 'childContinentsJson___map___childWorldJson___name'
  | 'childContinentsJson___map___childNationsJson___id'
  | 'childContinentsJson___map___childNationsJson___children'
  | 'childContinentsJson___map___childNationsJson___name'
  | 'childContinentsJson___map___childNationsJson___type'
  | 'childContinentsJson___map___childNationsJson___parentLocation'
  | 'childContinentsJson___map___childContinentsJson___id'
  | 'childContinentsJson___map___childContinentsJson___children'
  | 'childContinentsJson___map___childContinentsJson___name'
  | 'childContinentsJson___map___childContinentsJson___type'
  | 'childContinentsJson___map___childContinentsJson___nations'
  | 'childContinentsJson___map___childContinentsJson___parentLocation'
  | 'childContinentsJson___map___childGeoJson___id'
  | 'childContinentsJson___map___childGeoJson___children'
  | 'childContinentsJson___map___childGeoJson___type'
  | 'childContinentsJson___map___childMarkdownRemark___id'
  | 'childContinentsJson___map___childMarkdownRemark___excerpt'
  | 'childContinentsJson___map___childMarkdownRemark___rawMarkdownBody'
  | 'childContinentsJson___map___childMarkdownRemark___fileAbsolutePath'
  | 'childContinentsJson___map___childMarkdownRemark___html'
  | 'childContinentsJson___map___childMarkdownRemark___htmlAst'
  | 'childContinentsJson___map___childMarkdownRemark___excerptAst'
  | 'childContinentsJson___map___childMarkdownRemark___headings'
  | 'childContinentsJson___map___childMarkdownRemark___timeToRead'
  | 'childContinentsJson___map___childMarkdownRemark___tableOfContents'
  | 'childContinentsJson___map___childMarkdownRemark___children'
  | 'childContinentsJson___nations'
  | 'childContinentsJson___nations___id'
  | 'childContinentsJson___nations___parent___id'
  | 'childContinentsJson___nations___parent___children'
  | 'childContinentsJson___nations___children'
  | 'childContinentsJson___nations___children___id'
  | 'childContinentsJson___nations___children___children'
  | 'childContinentsJson___nations___internal___content'
  | 'childContinentsJson___nations___internal___contentDigest'
  | 'childContinentsJson___nations___internal___description'
  | 'childContinentsJson___nations___internal___fieldOwners'
  | 'childContinentsJson___nations___internal___ignoreType'
  | 'childContinentsJson___nations___internal___mediaType'
  | 'childContinentsJson___nations___internal___owner'
  | 'childContinentsJson___nations___internal___type'
  | 'childContinentsJson___nations___name'
  | 'childContinentsJson___nations___type'
  | 'childContinentsJson___nations___parentLocation'
  | 'childContinentsJson___nations___map___sourceInstanceName'
  | 'childContinentsJson___nations___map___absolutePath'
  | 'childContinentsJson___nations___map___relativePath'
  | 'childContinentsJson___nations___map___extension'
  | 'childContinentsJson___nations___map___size'
  | 'childContinentsJson___nations___map___prettySize'
  | 'childContinentsJson___nations___map___modifiedTime'
  | 'childContinentsJson___nations___map___accessTime'
  | 'childContinentsJson___nations___map___changeTime'
  | 'childContinentsJson___nations___map___birthTime'
  | 'childContinentsJson___nations___map___root'
  | 'childContinentsJson___nations___map___dir'
  | 'childContinentsJson___nations___map___base'
  | 'childContinentsJson___nations___map___ext'
  | 'childContinentsJson___nations___map___name'
  | 'childContinentsJson___nations___map___relativeDirectory'
  | 'childContinentsJson___nations___map___dev'
  | 'childContinentsJson___nations___map___mode'
  | 'childContinentsJson___nations___map___nlink'
  | 'childContinentsJson___nations___map___uid'
  | 'childContinentsJson___nations___map___gid'
  | 'childContinentsJson___nations___map___rdev'
  | 'childContinentsJson___nations___map___ino'
  | 'childContinentsJson___nations___map___atimeMs'
  | 'childContinentsJson___nations___map___mtimeMs'
  | 'childContinentsJson___nations___map___ctimeMs'
  | 'childContinentsJson___nations___map___atime'
  | 'childContinentsJson___nations___map___mtime'
  | 'childContinentsJson___nations___map___ctime'
  | 'childContinentsJson___nations___map___birthtime'
  | 'childContinentsJson___nations___map___birthtimeMs'
  | 'childContinentsJson___nations___map___blksize'
  | 'childContinentsJson___nations___map___blocks'
  | 'childContinentsJson___nations___map___publicURL'
  | 'childContinentsJson___nations___map___id'
  | 'childContinentsJson___nations___map___children'
  | 'childContinentsJson___parentLocation'
  | 'childGeoJson___id'
  | 'childGeoJson___parent___id'
  | 'childGeoJson___parent___parent___id'
  | 'childGeoJson___parent___parent___children'
  | 'childGeoJson___parent___children'
  | 'childGeoJson___parent___children___id'
  | 'childGeoJson___parent___children___children'
  | 'childGeoJson___parent___internal___content'
  | 'childGeoJson___parent___internal___contentDigest'
  | 'childGeoJson___parent___internal___description'
  | 'childGeoJson___parent___internal___fieldOwners'
  | 'childGeoJson___parent___internal___ignoreType'
  | 'childGeoJson___parent___internal___mediaType'
  | 'childGeoJson___parent___internal___owner'
  | 'childGeoJson___parent___internal___type'
  | 'childGeoJson___children'
  | 'childGeoJson___children___id'
  | 'childGeoJson___children___parent___id'
  | 'childGeoJson___children___parent___children'
  | 'childGeoJson___children___children'
  | 'childGeoJson___children___children___id'
  | 'childGeoJson___children___children___children'
  | 'childGeoJson___children___internal___content'
  | 'childGeoJson___children___internal___contentDigest'
  | 'childGeoJson___children___internal___description'
  | 'childGeoJson___children___internal___fieldOwners'
  | 'childGeoJson___children___internal___ignoreType'
  | 'childGeoJson___children___internal___mediaType'
  | 'childGeoJson___children___internal___owner'
  | 'childGeoJson___children___internal___type'
  | 'childGeoJson___internal___content'
  | 'childGeoJson___internal___contentDigest'
  | 'childGeoJson___internal___description'
  | 'childGeoJson___internal___fieldOwners'
  | 'childGeoJson___internal___ignoreType'
  | 'childGeoJson___internal___mediaType'
  | 'childGeoJson___internal___owner'
  | 'childGeoJson___internal___type'
  | 'childGeoJson___type'
  | 'childGeoJson___properties___nation'
  | 'childGeoJson___geometry___type'
  | 'childGeoJson___geometry___coordinates'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___continent___id'
  | 'childMarkdownRemark___frontmatter___continent___children'
  | 'childMarkdownRemark___frontmatter___continent___name'
  | 'childMarkdownRemark___frontmatter___continent___type'
  | 'childMarkdownRemark___frontmatter___continent___nations'
  | 'childMarkdownRemark___frontmatter___continent___parentLocation'
  | 'childMarkdownRemark___frontmatter___id___id'
  | 'childMarkdownRemark___frontmatter___id___children'
  | 'childMarkdownRemark___frontmatter___id___name'
  | 'childMarkdownRemark___frontmatter___id___type'
  | 'childMarkdownRemark___frontmatter___id___nations'
  | 'childMarkdownRemark___frontmatter___id___parentLocation'
  | 'childMarkdownRemark___frontmatter___template'
  | 'childMarkdownRemark___frontmatter___heroImage___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___heroImage___absolutePath'
  | 'childMarkdownRemark___frontmatter___heroImage___relativePath'
  | 'childMarkdownRemark___frontmatter___heroImage___extension'
  | 'childMarkdownRemark___frontmatter___heroImage___size'
  | 'childMarkdownRemark___frontmatter___heroImage___prettySize'
  | 'childMarkdownRemark___frontmatter___heroImage___modifiedTime'
  | 'childMarkdownRemark___frontmatter___heroImage___accessTime'
  | 'childMarkdownRemark___frontmatter___heroImage___changeTime'
  | 'childMarkdownRemark___frontmatter___heroImage___birthTime'
  | 'childMarkdownRemark___frontmatter___heroImage___root'
  | 'childMarkdownRemark___frontmatter___heroImage___dir'
  | 'childMarkdownRemark___frontmatter___heroImage___base'
  | 'childMarkdownRemark___frontmatter___heroImage___ext'
  | 'childMarkdownRemark___frontmatter___heroImage___name'
  | 'childMarkdownRemark___frontmatter___heroImage___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___heroImage___dev'
  | 'childMarkdownRemark___frontmatter___heroImage___mode'
  | 'childMarkdownRemark___frontmatter___heroImage___nlink'
  | 'childMarkdownRemark___frontmatter___heroImage___uid'
  | 'childMarkdownRemark___frontmatter___heroImage___gid'
  | 'childMarkdownRemark___frontmatter___heroImage___rdev'
  | 'childMarkdownRemark___frontmatter___heroImage___ino'
  | 'childMarkdownRemark___frontmatter___heroImage___atimeMs'
  | 'childMarkdownRemark___frontmatter___heroImage___mtimeMs'
  | 'childMarkdownRemark___frontmatter___heroImage___ctimeMs'
  | 'childMarkdownRemark___frontmatter___heroImage___atime'
  | 'childMarkdownRemark___frontmatter___heroImage___mtime'
  | 'childMarkdownRemark___frontmatter___heroImage___ctime'
  | 'childMarkdownRemark___frontmatter___heroImage___birthtime'
  | 'childMarkdownRemark___frontmatter___heroImage___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___heroImage___blksize'
  | 'childMarkdownRemark___frontmatter___heroImage___blocks'
  | 'childMarkdownRemark___frontmatter___heroImage___publicURL'
  | 'childMarkdownRemark___frontmatter___heroImage___id'
  | 'childMarkdownRemark___frontmatter___heroImage___children'
  | 'childMarkdownRemark___frontmatter___world___id'
  | 'childMarkdownRemark___frontmatter___world___children'
  | 'childMarkdownRemark___frontmatter___world___name'
  | 'childMarkdownRemark___frontmatter___date'
  | 'childMarkdownRemark___frontmatter___inspiration'
  | 'childMarkdownRemark___frontmatter___mapImage___sourceInstanceName'
  | 'childMarkdownRemark___frontmatter___mapImage___absolutePath'
  | 'childMarkdownRemark___frontmatter___mapImage___relativePath'
  | 'childMarkdownRemark___frontmatter___mapImage___extension'
  | 'childMarkdownRemark___frontmatter___mapImage___size'
  | 'childMarkdownRemark___frontmatter___mapImage___prettySize'
  | 'childMarkdownRemark___frontmatter___mapImage___modifiedTime'
  | 'childMarkdownRemark___frontmatter___mapImage___accessTime'
  | 'childMarkdownRemark___frontmatter___mapImage___changeTime'
  | 'childMarkdownRemark___frontmatter___mapImage___birthTime'
  | 'childMarkdownRemark___frontmatter___mapImage___root'
  | 'childMarkdownRemark___frontmatter___mapImage___dir'
  | 'childMarkdownRemark___frontmatter___mapImage___base'
  | 'childMarkdownRemark___frontmatter___mapImage___ext'
  | 'childMarkdownRemark___frontmatter___mapImage___name'
  | 'childMarkdownRemark___frontmatter___mapImage___relativeDirectory'
  | 'childMarkdownRemark___frontmatter___mapImage___dev'
  | 'childMarkdownRemark___frontmatter___mapImage___mode'
  | 'childMarkdownRemark___frontmatter___mapImage___nlink'
  | 'childMarkdownRemark___frontmatter___mapImage___uid'
  | 'childMarkdownRemark___frontmatter___mapImage___gid'
  | 'childMarkdownRemark___frontmatter___mapImage___rdev'
  | 'childMarkdownRemark___frontmatter___mapImage___ino'
  | 'childMarkdownRemark___frontmatter___mapImage___atimeMs'
  | 'childMarkdownRemark___frontmatter___mapImage___mtimeMs'
  | 'childMarkdownRemark___frontmatter___mapImage___ctimeMs'
  | 'childMarkdownRemark___frontmatter___mapImage___atime'
  | 'childMarkdownRemark___frontmatter___mapImage___mtime'
  | 'childMarkdownRemark___frontmatter___mapImage___ctime'
  | 'childMarkdownRemark___frontmatter___mapImage___birthtime'
  | 'childMarkdownRemark___frontmatter___mapImage___birthtimeMs'
  | 'childMarkdownRemark___frontmatter___mapImage___blksize'
  | 'childMarkdownRemark___frontmatter___mapImage___blocks'
  | 'childMarkdownRemark___frontmatter___mapImage___publicURL'
  | 'childMarkdownRemark___frontmatter___mapImage___id'
  | 'childMarkdownRemark___frontmatter___mapImage___children'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childWorldJson?: Maybe<WorldJsonFilterInput>;
  childNationsJson?: Maybe<NationsJsonFilterInput>;
  childContinentsJson?: Maybe<ContinentsJsonFilterInput>;
  childGeoJson?: Maybe<GeoJsonFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GeoJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  properties?: Maybe<GeoJsonProperties>;
  geometry?: Maybe<GeoJsonGeometry>;
};

export type GeoJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GeoJsonEdge>;
  nodes: Array<GeoJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GeoJsonGroupConnection>;
};


export type GeoJsonConnectionDistinctArgs = {
  field: GeoJsonFieldsEnum;
};


export type GeoJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GeoJsonFieldsEnum;
};

export type GeoJsonEdge = {
  next?: Maybe<GeoJson>;
  node: GeoJson;
  previous?: Maybe<GeoJson>;
};

export type GeoJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'properties___nation'
  | 'geometry___type'
  | 'geometry___coordinates';

export type GeoJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<GeoJsonPropertiesFilterInput>;
  geometry?: Maybe<GeoJsonGeometryFilterInput>;
};

export type GeoJsonGeometry = {
  type?: Maybe<Scalars['String']>;
  coordinates?: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>;
};

export type GeoJsonGeometryFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  coordinates?: Maybe<IntQueryOperatorInput>;
};

export type GeoJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GeoJsonEdge>;
  nodes: Array<GeoJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GeoJsonProperties = {
  nation?: Maybe<Scalars['String']>;
};

export type GeoJsonPropertiesFilterInput = {
  nation?: Maybe<StringQueryOperatorInput>;
};

export type GeoJsonSortInput = {
  fields?: Maybe<Array<Maybe<GeoJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___continent___id'
  | 'frontmatter___continent___parent___id'
  | 'frontmatter___continent___parent___children'
  | 'frontmatter___continent___children'
  | 'frontmatter___continent___children___id'
  | 'frontmatter___continent___children___children'
  | 'frontmatter___continent___internal___content'
  | 'frontmatter___continent___internal___contentDigest'
  | 'frontmatter___continent___internal___description'
  | 'frontmatter___continent___internal___fieldOwners'
  | 'frontmatter___continent___internal___ignoreType'
  | 'frontmatter___continent___internal___mediaType'
  | 'frontmatter___continent___internal___owner'
  | 'frontmatter___continent___internal___type'
  | 'frontmatter___continent___name'
  | 'frontmatter___continent___fields___slug'
  | 'frontmatter___continent___type'
  | 'frontmatter___continent___map___sourceInstanceName'
  | 'frontmatter___continent___map___absolutePath'
  | 'frontmatter___continent___map___relativePath'
  | 'frontmatter___continent___map___extension'
  | 'frontmatter___continent___map___size'
  | 'frontmatter___continent___map___prettySize'
  | 'frontmatter___continent___map___modifiedTime'
  | 'frontmatter___continent___map___accessTime'
  | 'frontmatter___continent___map___changeTime'
  | 'frontmatter___continent___map___birthTime'
  | 'frontmatter___continent___map___root'
  | 'frontmatter___continent___map___dir'
  | 'frontmatter___continent___map___base'
  | 'frontmatter___continent___map___ext'
  | 'frontmatter___continent___map___name'
  | 'frontmatter___continent___map___relativeDirectory'
  | 'frontmatter___continent___map___dev'
  | 'frontmatter___continent___map___mode'
  | 'frontmatter___continent___map___nlink'
  | 'frontmatter___continent___map___uid'
  | 'frontmatter___continent___map___gid'
  | 'frontmatter___continent___map___rdev'
  | 'frontmatter___continent___map___ino'
  | 'frontmatter___continent___map___atimeMs'
  | 'frontmatter___continent___map___mtimeMs'
  | 'frontmatter___continent___map___ctimeMs'
  | 'frontmatter___continent___map___atime'
  | 'frontmatter___continent___map___mtime'
  | 'frontmatter___continent___map___ctime'
  | 'frontmatter___continent___map___birthtime'
  | 'frontmatter___continent___map___birthtimeMs'
  | 'frontmatter___continent___map___blksize'
  | 'frontmatter___continent___map___blocks'
  | 'frontmatter___continent___map___publicURL'
  | 'frontmatter___continent___map___id'
  | 'frontmatter___continent___map___children'
  | 'frontmatter___continent___nations'
  | 'frontmatter___continent___nations___id'
  | 'frontmatter___continent___nations___children'
  | 'frontmatter___continent___nations___name'
  | 'frontmatter___continent___nations___type'
  | 'frontmatter___continent___nations___parentLocation'
  | 'frontmatter___continent___parentLocation'
  | 'frontmatter___id___id'
  | 'frontmatter___id___parent___id'
  | 'frontmatter___id___parent___children'
  | 'frontmatter___id___children'
  | 'frontmatter___id___children___id'
  | 'frontmatter___id___children___children'
  | 'frontmatter___id___internal___content'
  | 'frontmatter___id___internal___contentDigest'
  | 'frontmatter___id___internal___description'
  | 'frontmatter___id___internal___fieldOwners'
  | 'frontmatter___id___internal___ignoreType'
  | 'frontmatter___id___internal___mediaType'
  | 'frontmatter___id___internal___owner'
  | 'frontmatter___id___internal___type'
  | 'frontmatter___id___name'
  | 'frontmatter___id___fields___slug'
  | 'frontmatter___id___type'
  | 'frontmatter___id___map___sourceInstanceName'
  | 'frontmatter___id___map___absolutePath'
  | 'frontmatter___id___map___relativePath'
  | 'frontmatter___id___map___extension'
  | 'frontmatter___id___map___size'
  | 'frontmatter___id___map___prettySize'
  | 'frontmatter___id___map___modifiedTime'
  | 'frontmatter___id___map___accessTime'
  | 'frontmatter___id___map___changeTime'
  | 'frontmatter___id___map___birthTime'
  | 'frontmatter___id___map___root'
  | 'frontmatter___id___map___dir'
  | 'frontmatter___id___map___base'
  | 'frontmatter___id___map___ext'
  | 'frontmatter___id___map___name'
  | 'frontmatter___id___map___relativeDirectory'
  | 'frontmatter___id___map___dev'
  | 'frontmatter___id___map___mode'
  | 'frontmatter___id___map___nlink'
  | 'frontmatter___id___map___uid'
  | 'frontmatter___id___map___gid'
  | 'frontmatter___id___map___rdev'
  | 'frontmatter___id___map___ino'
  | 'frontmatter___id___map___atimeMs'
  | 'frontmatter___id___map___mtimeMs'
  | 'frontmatter___id___map___ctimeMs'
  | 'frontmatter___id___map___atime'
  | 'frontmatter___id___map___mtime'
  | 'frontmatter___id___map___ctime'
  | 'frontmatter___id___map___birthtime'
  | 'frontmatter___id___map___birthtimeMs'
  | 'frontmatter___id___map___blksize'
  | 'frontmatter___id___map___blocks'
  | 'frontmatter___id___map___publicURL'
  | 'frontmatter___id___map___id'
  | 'frontmatter___id___map___children'
  | 'frontmatter___id___nations'
  | 'frontmatter___id___nations___id'
  | 'frontmatter___id___nations___children'
  | 'frontmatter___id___nations___name'
  | 'frontmatter___id___nations___type'
  | 'frontmatter___id___nations___parentLocation'
  | 'frontmatter___id___parentLocation'
  | 'frontmatter___template'
  | 'frontmatter___heroImage___sourceInstanceName'
  | 'frontmatter___heroImage___absolutePath'
  | 'frontmatter___heroImage___relativePath'
  | 'frontmatter___heroImage___extension'
  | 'frontmatter___heroImage___size'
  | 'frontmatter___heroImage___prettySize'
  | 'frontmatter___heroImage___modifiedTime'
  | 'frontmatter___heroImage___accessTime'
  | 'frontmatter___heroImage___changeTime'
  | 'frontmatter___heroImage___birthTime'
  | 'frontmatter___heroImage___root'
  | 'frontmatter___heroImage___dir'
  | 'frontmatter___heroImage___base'
  | 'frontmatter___heroImage___ext'
  | 'frontmatter___heroImage___name'
  | 'frontmatter___heroImage___relativeDirectory'
  | 'frontmatter___heroImage___dev'
  | 'frontmatter___heroImage___mode'
  | 'frontmatter___heroImage___nlink'
  | 'frontmatter___heroImage___uid'
  | 'frontmatter___heroImage___gid'
  | 'frontmatter___heroImage___rdev'
  | 'frontmatter___heroImage___ino'
  | 'frontmatter___heroImage___atimeMs'
  | 'frontmatter___heroImage___mtimeMs'
  | 'frontmatter___heroImage___ctimeMs'
  | 'frontmatter___heroImage___atime'
  | 'frontmatter___heroImage___mtime'
  | 'frontmatter___heroImage___ctime'
  | 'frontmatter___heroImage___birthtime'
  | 'frontmatter___heroImage___birthtimeMs'
  | 'frontmatter___heroImage___blksize'
  | 'frontmatter___heroImage___blocks'
  | 'frontmatter___heroImage___publicURL'
  | 'frontmatter___heroImage___childImageSharp___id'
  | 'frontmatter___heroImage___childImageSharp___children'
  | 'frontmatter___heroImage___id'
  | 'frontmatter___heroImage___parent___id'
  | 'frontmatter___heroImage___parent___children'
  | 'frontmatter___heroImage___children'
  | 'frontmatter___heroImage___children___id'
  | 'frontmatter___heroImage___children___children'
  | 'frontmatter___heroImage___internal___content'
  | 'frontmatter___heroImage___internal___contentDigest'
  | 'frontmatter___heroImage___internal___description'
  | 'frontmatter___heroImage___internal___fieldOwners'
  | 'frontmatter___heroImage___internal___ignoreType'
  | 'frontmatter___heroImage___internal___mediaType'
  | 'frontmatter___heroImage___internal___owner'
  | 'frontmatter___heroImage___internal___type'
  | 'frontmatter___heroImage___childWorldJson___id'
  | 'frontmatter___heroImage___childWorldJson___children'
  | 'frontmatter___heroImage___childWorldJson___name'
  | 'frontmatter___heroImage___childNationsJson___id'
  | 'frontmatter___heroImage___childNationsJson___children'
  | 'frontmatter___heroImage___childNationsJson___name'
  | 'frontmatter___heroImage___childNationsJson___type'
  | 'frontmatter___heroImage___childNationsJson___parentLocation'
  | 'frontmatter___heroImage___childContinentsJson___id'
  | 'frontmatter___heroImage___childContinentsJson___children'
  | 'frontmatter___heroImage___childContinentsJson___name'
  | 'frontmatter___heroImage___childContinentsJson___type'
  | 'frontmatter___heroImage___childContinentsJson___nations'
  | 'frontmatter___heroImage___childContinentsJson___parentLocation'
  | 'frontmatter___heroImage___childGeoJson___id'
  | 'frontmatter___heroImage___childGeoJson___children'
  | 'frontmatter___heroImage___childGeoJson___type'
  | 'frontmatter___heroImage___childMarkdownRemark___id'
  | 'frontmatter___heroImage___childMarkdownRemark___excerpt'
  | 'frontmatter___heroImage___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___heroImage___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___heroImage___childMarkdownRemark___html'
  | 'frontmatter___heroImage___childMarkdownRemark___htmlAst'
  | 'frontmatter___heroImage___childMarkdownRemark___excerptAst'
  | 'frontmatter___heroImage___childMarkdownRemark___headings'
  | 'frontmatter___heroImage___childMarkdownRemark___timeToRead'
  | 'frontmatter___heroImage___childMarkdownRemark___tableOfContents'
  | 'frontmatter___heroImage___childMarkdownRemark___children'
  | 'frontmatter___world___id'
  | 'frontmatter___world___parent___id'
  | 'frontmatter___world___parent___children'
  | 'frontmatter___world___children'
  | 'frontmatter___world___children___id'
  | 'frontmatter___world___children___children'
  | 'frontmatter___world___internal___content'
  | 'frontmatter___world___internal___contentDigest'
  | 'frontmatter___world___internal___description'
  | 'frontmatter___world___internal___fieldOwners'
  | 'frontmatter___world___internal___ignoreType'
  | 'frontmatter___world___internal___mediaType'
  | 'frontmatter___world___internal___owner'
  | 'frontmatter___world___internal___type'
  | 'frontmatter___world___name'
  | 'frontmatter___world___geography___continents'
  | 'frontmatter___date'
  | 'frontmatter___inspiration'
  | 'frontmatter___mapImage___sourceInstanceName'
  | 'frontmatter___mapImage___absolutePath'
  | 'frontmatter___mapImage___relativePath'
  | 'frontmatter___mapImage___extension'
  | 'frontmatter___mapImage___size'
  | 'frontmatter___mapImage___prettySize'
  | 'frontmatter___mapImage___modifiedTime'
  | 'frontmatter___mapImage___accessTime'
  | 'frontmatter___mapImage___changeTime'
  | 'frontmatter___mapImage___birthTime'
  | 'frontmatter___mapImage___root'
  | 'frontmatter___mapImage___dir'
  | 'frontmatter___mapImage___base'
  | 'frontmatter___mapImage___ext'
  | 'frontmatter___mapImage___name'
  | 'frontmatter___mapImage___relativeDirectory'
  | 'frontmatter___mapImage___dev'
  | 'frontmatter___mapImage___mode'
  | 'frontmatter___mapImage___nlink'
  | 'frontmatter___mapImage___uid'
  | 'frontmatter___mapImage___gid'
  | 'frontmatter___mapImage___rdev'
  | 'frontmatter___mapImage___ino'
  | 'frontmatter___mapImage___atimeMs'
  | 'frontmatter___mapImage___mtimeMs'
  | 'frontmatter___mapImage___ctimeMs'
  | 'frontmatter___mapImage___atime'
  | 'frontmatter___mapImage___mtime'
  | 'frontmatter___mapImage___ctime'
  | 'frontmatter___mapImage___birthtime'
  | 'frontmatter___mapImage___birthtimeMs'
  | 'frontmatter___mapImage___blksize'
  | 'frontmatter___mapImage___blocks'
  | 'frontmatter___mapImage___publicURL'
  | 'frontmatter___mapImage___childImageSharp___id'
  | 'frontmatter___mapImage___childImageSharp___children'
  | 'frontmatter___mapImage___id'
  | 'frontmatter___mapImage___parent___id'
  | 'frontmatter___mapImage___parent___children'
  | 'frontmatter___mapImage___children'
  | 'frontmatter___mapImage___children___id'
  | 'frontmatter___mapImage___children___children'
  | 'frontmatter___mapImage___internal___content'
  | 'frontmatter___mapImage___internal___contentDigest'
  | 'frontmatter___mapImage___internal___description'
  | 'frontmatter___mapImage___internal___fieldOwners'
  | 'frontmatter___mapImage___internal___ignoreType'
  | 'frontmatter___mapImage___internal___mediaType'
  | 'frontmatter___mapImage___internal___owner'
  | 'frontmatter___mapImage___internal___type'
  | 'frontmatter___mapImage___childWorldJson___id'
  | 'frontmatter___mapImage___childWorldJson___children'
  | 'frontmatter___mapImage___childWorldJson___name'
  | 'frontmatter___mapImage___childNationsJson___id'
  | 'frontmatter___mapImage___childNationsJson___children'
  | 'frontmatter___mapImage___childNationsJson___name'
  | 'frontmatter___mapImage___childNationsJson___type'
  | 'frontmatter___mapImage___childNationsJson___parentLocation'
  | 'frontmatter___mapImage___childContinentsJson___id'
  | 'frontmatter___mapImage___childContinentsJson___children'
  | 'frontmatter___mapImage___childContinentsJson___name'
  | 'frontmatter___mapImage___childContinentsJson___type'
  | 'frontmatter___mapImage___childContinentsJson___nations'
  | 'frontmatter___mapImage___childContinentsJson___parentLocation'
  | 'frontmatter___mapImage___childGeoJson___id'
  | 'frontmatter___mapImage___childGeoJson___children'
  | 'frontmatter___mapImage___childGeoJson___type'
  | 'frontmatter___mapImage___childMarkdownRemark___id'
  | 'frontmatter___mapImage___childMarkdownRemark___excerpt'
  | 'frontmatter___mapImage___childMarkdownRemark___rawMarkdownBody'
  | 'frontmatter___mapImage___childMarkdownRemark___fileAbsolutePath'
  | 'frontmatter___mapImage___childMarkdownRemark___html'
  | 'frontmatter___mapImage___childMarkdownRemark___htmlAst'
  | 'frontmatter___mapImage___childMarkdownRemark___excerptAst'
  | 'frontmatter___mapImage___childMarkdownRemark___headings'
  | 'frontmatter___mapImage___childMarkdownRemark___timeToRead'
  | 'frontmatter___mapImage___childMarkdownRemark___tableOfContents'
  | 'frontmatter___mapImage___childMarkdownRemark___children'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  continent?: Maybe<ContinentsJson>;
  id?: Maybe<ContinentsJson>;
  template?: Maybe<Scalars['String']>;
  heroImage?: Maybe<File>;
  world?: Maybe<WorldJson>;
  date?: Maybe<Scalars['Date']>;
  inspiration?: Maybe<Scalars['String']>;
  mapImage?: Maybe<File>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  continent?: Maybe<ContinentsJsonFilterInput>;
  id?: Maybe<ContinentsJsonFilterInput>;
  template?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<FileFilterInput>;
  world?: Maybe<WorldJsonFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  inspiration?: Maybe<StringQueryOperatorInput>;
  mapImage?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type NationsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  parentLocation?: Maybe<Scalars['String']>;
  map?: Maybe<File>;
};

export type NationsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NationsJsonEdge>;
  nodes: Array<NationsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<NationsJsonGroupConnection>;
};


export type NationsJsonConnectionDistinctArgs = {
  field: NationsJsonFieldsEnum;
};


export type NationsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: NationsJsonFieldsEnum;
};

export type NationsJsonEdge = {
  next?: Maybe<NationsJson>;
  node: NationsJson;
  previous?: Maybe<NationsJson>;
};

export type NationsJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'type'
  | 'parentLocation'
  | 'map___sourceInstanceName'
  | 'map___absolutePath'
  | 'map___relativePath'
  | 'map___extension'
  | 'map___size'
  | 'map___prettySize'
  | 'map___modifiedTime'
  | 'map___accessTime'
  | 'map___changeTime'
  | 'map___birthTime'
  | 'map___root'
  | 'map___dir'
  | 'map___base'
  | 'map___ext'
  | 'map___name'
  | 'map___relativeDirectory'
  | 'map___dev'
  | 'map___mode'
  | 'map___nlink'
  | 'map___uid'
  | 'map___gid'
  | 'map___rdev'
  | 'map___ino'
  | 'map___atimeMs'
  | 'map___mtimeMs'
  | 'map___ctimeMs'
  | 'map___atime'
  | 'map___mtime'
  | 'map___ctime'
  | 'map___birthtime'
  | 'map___birthtimeMs'
  | 'map___blksize'
  | 'map___blocks'
  | 'map___publicURL'
  | 'map___childImageSharp___fixed___base64'
  | 'map___childImageSharp___fixed___tracedSVG'
  | 'map___childImageSharp___fixed___aspectRatio'
  | 'map___childImageSharp___fixed___width'
  | 'map___childImageSharp___fixed___height'
  | 'map___childImageSharp___fixed___src'
  | 'map___childImageSharp___fixed___srcSet'
  | 'map___childImageSharp___fixed___srcWebp'
  | 'map___childImageSharp___fixed___srcSetWebp'
  | 'map___childImageSharp___fixed___originalName'
  | 'map___childImageSharp___resolutions___base64'
  | 'map___childImageSharp___resolutions___tracedSVG'
  | 'map___childImageSharp___resolutions___aspectRatio'
  | 'map___childImageSharp___resolutions___width'
  | 'map___childImageSharp___resolutions___height'
  | 'map___childImageSharp___resolutions___src'
  | 'map___childImageSharp___resolutions___srcSet'
  | 'map___childImageSharp___resolutions___srcWebp'
  | 'map___childImageSharp___resolutions___srcSetWebp'
  | 'map___childImageSharp___resolutions___originalName'
  | 'map___childImageSharp___fluid___base64'
  | 'map___childImageSharp___fluid___tracedSVG'
  | 'map___childImageSharp___fluid___aspectRatio'
  | 'map___childImageSharp___fluid___src'
  | 'map___childImageSharp___fluid___srcSet'
  | 'map___childImageSharp___fluid___srcWebp'
  | 'map___childImageSharp___fluid___srcSetWebp'
  | 'map___childImageSharp___fluid___sizes'
  | 'map___childImageSharp___fluid___originalImg'
  | 'map___childImageSharp___fluid___originalName'
  | 'map___childImageSharp___fluid___presentationWidth'
  | 'map___childImageSharp___fluid___presentationHeight'
  | 'map___childImageSharp___sizes___base64'
  | 'map___childImageSharp___sizes___tracedSVG'
  | 'map___childImageSharp___sizes___aspectRatio'
  | 'map___childImageSharp___sizes___src'
  | 'map___childImageSharp___sizes___srcSet'
  | 'map___childImageSharp___sizes___srcWebp'
  | 'map___childImageSharp___sizes___srcSetWebp'
  | 'map___childImageSharp___sizes___sizes'
  | 'map___childImageSharp___sizes___originalImg'
  | 'map___childImageSharp___sizes___originalName'
  | 'map___childImageSharp___sizes___presentationWidth'
  | 'map___childImageSharp___sizes___presentationHeight'
  | 'map___childImageSharp___original___width'
  | 'map___childImageSharp___original___height'
  | 'map___childImageSharp___original___src'
  | 'map___childImageSharp___resize___src'
  | 'map___childImageSharp___resize___tracedSVG'
  | 'map___childImageSharp___resize___width'
  | 'map___childImageSharp___resize___height'
  | 'map___childImageSharp___resize___aspectRatio'
  | 'map___childImageSharp___resize___originalName'
  | 'map___childImageSharp___id'
  | 'map___childImageSharp___parent___id'
  | 'map___childImageSharp___parent___children'
  | 'map___childImageSharp___children'
  | 'map___childImageSharp___children___id'
  | 'map___childImageSharp___children___children'
  | 'map___childImageSharp___internal___content'
  | 'map___childImageSharp___internal___contentDigest'
  | 'map___childImageSharp___internal___description'
  | 'map___childImageSharp___internal___fieldOwners'
  | 'map___childImageSharp___internal___ignoreType'
  | 'map___childImageSharp___internal___mediaType'
  | 'map___childImageSharp___internal___owner'
  | 'map___childImageSharp___internal___type'
  | 'map___id'
  | 'map___parent___id'
  | 'map___parent___parent___id'
  | 'map___parent___parent___children'
  | 'map___parent___children'
  | 'map___parent___children___id'
  | 'map___parent___children___children'
  | 'map___parent___internal___content'
  | 'map___parent___internal___contentDigest'
  | 'map___parent___internal___description'
  | 'map___parent___internal___fieldOwners'
  | 'map___parent___internal___ignoreType'
  | 'map___parent___internal___mediaType'
  | 'map___parent___internal___owner'
  | 'map___parent___internal___type'
  | 'map___children'
  | 'map___children___id'
  | 'map___children___parent___id'
  | 'map___children___parent___children'
  | 'map___children___children'
  | 'map___children___children___id'
  | 'map___children___children___children'
  | 'map___children___internal___content'
  | 'map___children___internal___contentDigest'
  | 'map___children___internal___description'
  | 'map___children___internal___fieldOwners'
  | 'map___children___internal___ignoreType'
  | 'map___children___internal___mediaType'
  | 'map___children___internal___owner'
  | 'map___children___internal___type'
  | 'map___internal___content'
  | 'map___internal___contentDigest'
  | 'map___internal___description'
  | 'map___internal___fieldOwners'
  | 'map___internal___ignoreType'
  | 'map___internal___mediaType'
  | 'map___internal___owner'
  | 'map___internal___type'
  | 'map___childWorldJson___id'
  | 'map___childWorldJson___parent___id'
  | 'map___childWorldJson___parent___children'
  | 'map___childWorldJson___children'
  | 'map___childWorldJson___children___id'
  | 'map___childWorldJson___children___children'
  | 'map___childWorldJson___internal___content'
  | 'map___childWorldJson___internal___contentDigest'
  | 'map___childWorldJson___internal___description'
  | 'map___childWorldJson___internal___fieldOwners'
  | 'map___childWorldJson___internal___ignoreType'
  | 'map___childWorldJson___internal___mediaType'
  | 'map___childWorldJson___internal___owner'
  | 'map___childWorldJson___internal___type'
  | 'map___childWorldJson___name'
  | 'map___childWorldJson___geography___continents'
  | 'map___childNationsJson___id'
  | 'map___childNationsJson___parent___id'
  | 'map___childNationsJson___parent___children'
  | 'map___childNationsJson___children'
  | 'map___childNationsJson___children___id'
  | 'map___childNationsJson___children___children'
  | 'map___childNationsJson___internal___content'
  | 'map___childNationsJson___internal___contentDigest'
  | 'map___childNationsJson___internal___description'
  | 'map___childNationsJson___internal___fieldOwners'
  | 'map___childNationsJson___internal___ignoreType'
  | 'map___childNationsJson___internal___mediaType'
  | 'map___childNationsJson___internal___owner'
  | 'map___childNationsJson___internal___type'
  | 'map___childNationsJson___name'
  | 'map___childNationsJson___type'
  | 'map___childNationsJson___parentLocation'
  | 'map___childNationsJson___map___sourceInstanceName'
  | 'map___childNationsJson___map___absolutePath'
  | 'map___childNationsJson___map___relativePath'
  | 'map___childNationsJson___map___extension'
  | 'map___childNationsJson___map___size'
  | 'map___childNationsJson___map___prettySize'
  | 'map___childNationsJson___map___modifiedTime'
  | 'map___childNationsJson___map___accessTime'
  | 'map___childNationsJson___map___changeTime'
  | 'map___childNationsJson___map___birthTime'
  | 'map___childNationsJson___map___root'
  | 'map___childNationsJson___map___dir'
  | 'map___childNationsJson___map___base'
  | 'map___childNationsJson___map___ext'
  | 'map___childNationsJson___map___name'
  | 'map___childNationsJson___map___relativeDirectory'
  | 'map___childNationsJson___map___dev'
  | 'map___childNationsJson___map___mode'
  | 'map___childNationsJson___map___nlink'
  | 'map___childNationsJson___map___uid'
  | 'map___childNationsJson___map___gid'
  | 'map___childNationsJson___map___rdev'
  | 'map___childNationsJson___map___ino'
  | 'map___childNationsJson___map___atimeMs'
  | 'map___childNationsJson___map___mtimeMs'
  | 'map___childNationsJson___map___ctimeMs'
  | 'map___childNationsJson___map___atime'
  | 'map___childNationsJson___map___mtime'
  | 'map___childNationsJson___map___ctime'
  | 'map___childNationsJson___map___birthtime'
  | 'map___childNationsJson___map___birthtimeMs'
  | 'map___childNationsJson___map___blksize'
  | 'map___childNationsJson___map___blocks'
  | 'map___childNationsJson___map___publicURL'
  | 'map___childNationsJson___map___id'
  | 'map___childNationsJson___map___children'
  | 'map___childContinentsJson___id'
  | 'map___childContinentsJson___parent___id'
  | 'map___childContinentsJson___parent___children'
  | 'map___childContinentsJson___children'
  | 'map___childContinentsJson___children___id'
  | 'map___childContinentsJson___children___children'
  | 'map___childContinentsJson___internal___content'
  | 'map___childContinentsJson___internal___contentDigest'
  | 'map___childContinentsJson___internal___description'
  | 'map___childContinentsJson___internal___fieldOwners'
  | 'map___childContinentsJson___internal___ignoreType'
  | 'map___childContinentsJson___internal___mediaType'
  | 'map___childContinentsJson___internal___owner'
  | 'map___childContinentsJson___internal___type'
  | 'map___childContinentsJson___name'
  | 'map___childContinentsJson___fields___slug'
  | 'map___childContinentsJson___type'
  | 'map___childContinentsJson___map___sourceInstanceName'
  | 'map___childContinentsJson___map___absolutePath'
  | 'map___childContinentsJson___map___relativePath'
  | 'map___childContinentsJson___map___extension'
  | 'map___childContinentsJson___map___size'
  | 'map___childContinentsJson___map___prettySize'
  | 'map___childContinentsJson___map___modifiedTime'
  | 'map___childContinentsJson___map___accessTime'
  | 'map___childContinentsJson___map___changeTime'
  | 'map___childContinentsJson___map___birthTime'
  | 'map___childContinentsJson___map___root'
  | 'map___childContinentsJson___map___dir'
  | 'map___childContinentsJson___map___base'
  | 'map___childContinentsJson___map___ext'
  | 'map___childContinentsJson___map___name'
  | 'map___childContinentsJson___map___relativeDirectory'
  | 'map___childContinentsJson___map___dev'
  | 'map___childContinentsJson___map___mode'
  | 'map___childContinentsJson___map___nlink'
  | 'map___childContinentsJson___map___uid'
  | 'map___childContinentsJson___map___gid'
  | 'map___childContinentsJson___map___rdev'
  | 'map___childContinentsJson___map___ino'
  | 'map___childContinentsJson___map___atimeMs'
  | 'map___childContinentsJson___map___mtimeMs'
  | 'map___childContinentsJson___map___ctimeMs'
  | 'map___childContinentsJson___map___atime'
  | 'map___childContinentsJson___map___mtime'
  | 'map___childContinentsJson___map___ctime'
  | 'map___childContinentsJson___map___birthtime'
  | 'map___childContinentsJson___map___birthtimeMs'
  | 'map___childContinentsJson___map___blksize'
  | 'map___childContinentsJson___map___blocks'
  | 'map___childContinentsJson___map___publicURL'
  | 'map___childContinentsJson___map___id'
  | 'map___childContinentsJson___map___children'
  | 'map___childContinentsJson___nations'
  | 'map___childContinentsJson___nations___id'
  | 'map___childContinentsJson___nations___children'
  | 'map___childContinentsJson___nations___name'
  | 'map___childContinentsJson___nations___type'
  | 'map___childContinentsJson___nations___parentLocation'
  | 'map___childContinentsJson___parentLocation'
  | 'map___childGeoJson___id'
  | 'map___childGeoJson___parent___id'
  | 'map___childGeoJson___parent___children'
  | 'map___childGeoJson___children'
  | 'map___childGeoJson___children___id'
  | 'map___childGeoJson___children___children'
  | 'map___childGeoJson___internal___content'
  | 'map___childGeoJson___internal___contentDigest'
  | 'map___childGeoJson___internal___description'
  | 'map___childGeoJson___internal___fieldOwners'
  | 'map___childGeoJson___internal___ignoreType'
  | 'map___childGeoJson___internal___mediaType'
  | 'map___childGeoJson___internal___owner'
  | 'map___childGeoJson___internal___type'
  | 'map___childGeoJson___type'
  | 'map___childGeoJson___properties___nation'
  | 'map___childGeoJson___geometry___type'
  | 'map___childGeoJson___geometry___coordinates'
  | 'map___childMarkdownRemark___id'
  | 'map___childMarkdownRemark___frontmatter___title'
  | 'map___childMarkdownRemark___frontmatter___template'
  | 'map___childMarkdownRemark___frontmatter___date'
  | 'map___childMarkdownRemark___frontmatter___inspiration'
  | 'map___childMarkdownRemark___excerpt'
  | 'map___childMarkdownRemark___rawMarkdownBody'
  | 'map___childMarkdownRemark___fileAbsolutePath'
  | 'map___childMarkdownRemark___fields___slug'
  | 'map___childMarkdownRemark___html'
  | 'map___childMarkdownRemark___htmlAst'
  | 'map___childMarkdownRemark___excerptAst'
  | 'map___childMarkdownRemark___headings'
  | 'map___childMarkdownRemark___headings___id'
  | 'map___childMarkdownRemark___headings___value'
  | 'map___childMarkdownRemark___headings___depth'
  | 'map___childMarkdownRemark___timeToRead'
  | 'map___childMarkdownRemark___tableOfContents'
  | 'map___childMarkdownRemark___wordCount___paragraphs'
  | 'map___childMarkdownRemark___wordCount___sentences'
  | 'map___childMarkdownRemark___wordCount___words'
  | 'map___childMarkdownRemark___parent___id'
  | 'map___childMarkdownRemark___parent___children'
  | 'map___childMarkdownRemark___children'
  | 'map___childMarkdownRemark___children___id'
  | 'map___childMarkdownRemark___children___children'
  | 'map___childMarkdownRemark___internal___content'
  | 'map___childMarkdownRemark___internal___contentDigest'
  | 'map___childMarkdownRemark___internal___description'
  | 'map___childMarkdownRemark___internal___fieldOwners'
  | 'map___childMarkdownRemark___internal___ignoreType'
  | 'map___childMarkdownRemark___internal___mediaType'
  | 'map___childMarkdownRemark___internal___owner'
  | 'map___childMarkdownRemark___internal___type';

export type NationsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  parentLocation?: Maybe<StringQueryOperatorInput>;
  map?: Maybe<FileFilterInput>;
};

export type NationsJsonFilterListInput = {
  elemMatch?: Maybe<NationsJsonFilterInput>;
};

export type NationsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<NationsJsonEdge>;
  nodes: Array<NationsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type NationsJsonSortInput = {
  fields?: Maybe<Array<Maybe<NationsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  geoJson?: Maybe<GeoJson>;
  allGeoJson: GeoJsonConnection;
  continentsJson?: Maybe<ContinentsJson>;
  allContinentsJson: ContinentsJsonConnection;
  worldJson?: Maybe<WorldJson>;
  allWorldJson: WorldJsonConnection;
  nationsJson?: Maybe<NationsJson>;
  allNationsJson: NationsJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childWorldJson?: Maybe<WorldJsonFilterInput>;
  childNationsJson?: Maybe<NationsJsonFilterInput>;
  childContinentsJson?: Maybe<ContinentsJsonFilterInput>;
  childGeoJson?: Maybe<GeoJsonFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGeoJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<GeoJsonPropertiesFilterInput>;
  geometry?: Maybe<GeoJsonGeometryFilterInput>;
};


export type QueryAllGeoJsonArgs = {
  filter?: Maybe<GeoJsonFilterInput>;
  sort?: Maybe<GeoJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContinentsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ContinentsJsonFieldsFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  map?: Maybe<FileFilterInput>;
  nations?: Maybe<NationsJsonFilterListInput>;
  parentLocation?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContinentsJsonArgs = {
  filter?: Maybe<ContinentsJsonFilterInput>;
  sort?: Maybe<ContinentsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryWorldJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  geography?: Maybe<WorldJsonGeographyFilterInput>;
};


export type QueryAllWorldJsonArgs = {
  filter?: Maybe<WorldJsonFilterInput>;
  sort?: Maybe<WorldJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryNationsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  parentLocation?: Maybe<StringQueryOperatorInput>;
  map?: Maybe<FileFilterInput>;
};


export type QueryAllNationsJsonArgs = {
  filter?: Maybe<NationsJsonFilterInput>;
  sort?: Maybe<NationsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  mapping?: Maybe<SiteMapping>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'mapping___MarkdownRemark_frontmatter_id'
  | 'mapping___MarkdownRemark_frontmatter_world'
  | 'mapping___MarkdownRemark_frontmatter_continent'
  | 'mapping___ContinentsJson_nations'
  | 'mapping___WorldJson_geography_continents'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteMapping = {
  MarkdownRemark_frontmatter_id?: Maybe<Scalars['String']>;
  MarkdownRemark_frontmatter_world?: Maybe<Scalars['String']>;
  MarkdownRemark_frontmatter_continent?: Maybe<Scalars['String']>;
  ContinentsJson_nations?: Maybe<Scalars['String']>;
  WorldJson_geography_continents?: Maybe<Scalars['String']>;
};

export type SiteMappingFilterInput = {
  MarkdownRemark_frontmatter_id?: Maybe<StringQueryOperatorInput>;
  MarkdownRemark_frontmatter_world?: Maybe<StringQueryOperatorInput>;
  MarkdownRemark_frontmatter_continent?: Maybe<StringQueryOperatorInput>;
  ContinentsJson_nations?: Maybe<StringQueryOperatorInput>;
  WorldJson_geography_continents?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___path'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  maxWidth?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type WorldJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  geography?: Maybe<WorldJsonGeography>;
};

export type WorldJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorldJsonEdge>;
  nodes: Array<WorldJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<WorldJsonGroupConnection>;
};


export type WorldJsonConnectionDistinctArgs = {
  field: WorldJsonFieldsEnum;
};


export type WorldJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: WorldJsonFieldsEnum;
};

export type WorldJsonEdge = {
  next?: Maybe<WorldJson>;
  node: WorldJson;
  previous?: Maybe<WorldJson>;
};

export type WorldJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'geography___continents'
  | 'geography___continents___id'
  | 'geography___continents___parent___id'
  | 'geography___continents___parent___children'
  | 'geography___continents___children'
  | 'geography___continents___children___id'
  | 'geography___continents___children___children'
  | 'geography___continents___internal___content'
  | 'geography___continents___internal___contentDigest'
  | 'geography___continents___internal___description'
  | 'geography___continents___internal___fieldOwners'
  | 'geography___continents___internal___ignoreType'
  | 'geography___continents___internal___mediaType'
  | 'geography___continents___internal___owner'
  | 'geography___continents___internal___type'
  | 'geography___continents___name'
  | 'geography___continents___fields___slug'
  | 'geography___continents___type'
  | 'geography___continents___map___sourceInstanceName'
  | 'geography___continents___map___absolutePath'
  | 'geography___continents___map___relativePath'
  | 'geography___continents___map___extension'
  | 'geography___continents___map___size'
  | 'geography___continents___map___prettySize'
  | 'geography___continents___map___modifiedTime'
  | 'geography___continents___map___accessTime'
  | 'geography___continents___map___changeTime'
  | 'geography___continents___map___birthTime'
  | 'geography___continents___map___root'
  | 'geography___continents___map___dir'
  | 'geography___continents___map___base'
  | 'geography___continents___map___ext'
  | 'geography___continents___map___name'
  | 'geography___continents___map___relativeDirectory'
  | 'geography___continents___map___dev'
  | 'geography___continents___map___mode'
  | 'geography___continents___map___nlink'
  | 'geography___continents___map___uid'
  | 'geography___continents___map___gid'
  | 'geography___continents___map___rdev'
  | 'geography___continents___map___ino'
  | 'geography___continents___map___atimeMs'
  | 'geography___continents___map___mtimeMs'
  | 'geography___continents___map___ctimeMs'
  | 'geography___continents___map___atime'
  | 'geography___continents___map___mtime'
  | 'geography___continents___map___ctime'
  | 'geography___continents___map___birthtime'
  | 'geography___continents___map___birthtimeMs'
  | 'geography___continents___map___blksize'
  | 'geography___continents___map___blocks'
  | 'geography___continents___map___publicURL'
  | 'geography___continents___map___id'
  | 'geography___continents___map___children'
  | 'geography___continents___nations'
  | 'geography___continents___nations___id'
  | 'geography___continents___nations___children'
  | 'geography___continents___nations___name'
  | 'geography___continents___nations___type'
  | 'geography___continents___nations___parentLocation'
  | 'geography___continents___parentLocation';

export type WorldJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  geography?: Maybe<WorldJsonGeographyFilterInput>;
};

export type WorldJsonGeography = {
  continents?: Maybe<Array<Maybe<ContinentsJson>>>;
};

export type WorldJsonGeographyFilterInput = {
  continents?: Maybe<ContinentsJsonFilterListInput>;
};

export type WorldJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<WorldJsonEdge>;
  nodes: Array<WorldJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type WorldJsonSortInput = {
  fields?: Maybe<Array<Maybe<WorldJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PaperBackgroundQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PaperBackgroundQueryQuery = { file?: Maybe<Pick<File, 'publicURL'>> };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type ContinentPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ContinentPageQuery = { markdownRemark?: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { continent?: Maybe<(
        Pick<ContinentsJson, 'name'>
        & { map?: Maybe<{ childImageSharp?: Maybe<{ original?: Maybe<Pick<ImageSharpOriginal, 'height' | 'width' | 'src'>> }> }>, nations?: Maybe<Array<Maybe<Pick<NationsJson, 'name' | 'id'>>>> }
      )>, heroImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, mapImage?: Maybe<(
        Pick<File, 'id' | 'absolutePath'>
        & { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }
      )> }
    )> }
  )> };

export type CoverPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CoverPageQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, markdownRemark?: Maybe<(
    Pick<MarkdownRemark, 'html'>
    & { frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'title'>
      & { heroImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }>, mapImage?: Maybe<(
        Pick<File, 'id' | 'absolutePath'>
        & { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }
      )>, world?: Maybe<{ geography?: Maybe<{ continents?: Maybe<Array<Maybe<(
            Pick<ContinentsJson, 'id' | 'name'>
            & { fields?: Maybe<Pick<ContinentsJsonFields, 'slug'>> }
          )>>> }> }> }
    )> }
  )> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
