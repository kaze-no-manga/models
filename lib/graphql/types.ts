import type { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Chapter = {
  __typename?: 'Chapter';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ChapterImage>;
  mangaId: Scalars['ID']['output'];
  number: Scalars['Float']['output'];
  releaseDate?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type ChapterImage = {
  __typename?: 'ChapterImage';
  height?: Maybe<Scalars['Int']['output']>;
  originalUrl: Scalars['String']['output'];
  page: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type ChapterImageInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  originalUrl: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  url: Scalars['String']['input'];
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateChapterInput = {
  images: Array<ChapterImageInput>;
  mangaId: Scalars['ID']['input'];
  number: Scalars['Float']['input'];
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMangaInput = {
  altTitles: Array<Scalars['String']['input']>;
  authors: Array<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  isNsfw: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
  sourceId: Scalars['String']['input'];
  sourceName: Scalars['String']['input'];
  status: MangaStatus;
  title: Scalars['String']['input'];
  totalChapters?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<UserPreferencesInput>;
};

export enum ImageWidth {
  Fit = 'FIT',
  Full = 'FULL',
}

export type LibraryEntry = {
  __typename?: 'LibraryEntry';
  createdAt: Scalars['String']['output'];
  currentChapterId?: Maybe<Scalars['ID']['output']>;
  lastReadAt?: Maybe<Scalars['String']['output']>;
  mangaId: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Int']['output']>;
  status: ReadingStatus;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type Manga = {
  __typename?: 'Manga';
  altTitles: Array<Scalars['String']['output']>;
  authors: Array<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isNsfw: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  sourceId: Scalars['String']['output'];
  sourceName: Scalars['String']['output'];
  status: MangaStatus;
  title: Scalars['String']['output'];
  totalChapters?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type MangaFilters = {
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  isNsfw?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<MangaStatus>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum MangaStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Hiatus = 'HIATUS',
  Ongoing = 'ONGOING',
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  addToLibrary: LibraryEntry;
  createChapter: Chapter;
  createManga: Manga;
  createUser: User;
  deleteChapter: Scalars['Boolean']['output'];
  deleteManga: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  markChapterAsRead: ReadingHistory;
  removeFromLibrary: Scalars['Boolean']['output'];
  updateChapter: Chapter;
  updateLibraryEntry: LibraryEntry;
  updateManga: Manga;
  updatePreferences: User;
  updateReadingProgress: LibraryEntry;
  updateUser: User;
};

export type MutationAddToLibraryArgs = {
  mangaId: Scalars['ID']['input'];
};

export type MutationCreateChapterArgs = {
  input: CreateChapterInput;
};

export type MutationCreateMangaArgs = {
  input: CreateMangaInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationDeleteChapterArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMangaArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationMarkChapterAsReadArgs = {
  chapterId: Scalars['ID']['input'];
};

export type MutationRemoveFromLibraryArgs = {
  mangaId: Scalars['ID']['input'];
};

export type MutationUpdateChapterArgs = {
  id: Scalars['ID']['input'];
  input: UpdateChapterInput;
};

export type MutationUpdateLibraryEntryArgs = {
  input: UpdateLibraryEntryInput;
  mangaId: Scalars['ID']['input'];
};

export type MutationUpdateMangaArgs = {
  id: Scalars['ID']['input'];
  input: UpdateMangaInput;
};

export type MutationUpdatePreferencesArgs = {
  input: UserPreferencesInput;
};

export type MutationUpdateReadingProgressArgs = {
  chapterId: Scalars['ID']['input'];
  mangaId: Scalars['ID']['input'];
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};

export type NotificationPreferences = {
  __typename?: 'NotificationPreferences';
  email: Scalars['Boolean']['output'];
  maxPerDay: Scalars['Int']['output'];
  push: Scalars['Boolean']['output'];
};

export type NotificationPreferencesInput = {
  email?: InputMaybe<Scalars['Boolean']['input']>;
  maxPerDay?: InputMaybe<Scalars['Int']['input']>;
  push?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  chapter?: Maybe<Chapter>;
  chapters: Array<Chapter>;
  getProfile: User;
  library: Array<LibraryEntry>;
  libraryEntry?: Maybe<LibraryEntry>;
  manga?: Maybe<Manga>;
  mangaBySlug?: Maybe<Manga>;
  mangas: Array<Manga>;
  readingHistory: Array<ReadingHistory>;
  searchManga: Array<Manga>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryChapterArgs = {
  id: Scalars['ID']['input'];
};

export type QueryChaptersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  mangaId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryLibraryArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryLibraryEntryArgs = {
  mangaId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type QueryMangaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryMangaBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type QueryMangasArgs = {
  filters?: InputMaybe<MangaFilters>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryReadingHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};

export type QuerySearchMangaArgs = {
  query: Scalars['String']['input'];
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type ReaderPreferences = {
  __typename?: 'ReaderPreferences';
  imageWidth: ImageWidth;
  spacing: Scalars['Int']['output'];
  theme: Theme;
};

export type ReaderPreferencesInput = {
  imageWidth?: InputMaybe<ImageWidth>;
  spacing?: InputMaybe<Scalars['Int']['input']>;
  theme?: InputMaybe<Theme>;
};

export type ReadingHistory = {
  __typename?: 'ReadingHistory';
  chapterId: Scalars['ID']['output'];
  chapterNumber: Scalars['Float']['output'];
  completed: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  mangaId: Scalars['ID']['output'];
  readAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export enum ReadingStatus {
  Completed = 'COMPLETED',
  Dropped = 'DROPPED',
  OnHold = 'ON_HOLD',
  PlanToRead = 'PLAN_TO_READ',
  Reading = 'READING',
}

export enum Theme {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT',
}

export type UpdateChapterInput = {
  images?: InputMaybe<Array<ChapterImageInput>>;
  number?: InputMaybe<Scalars['Float']['input']>;
  releaseDate?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLibraryEntryInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ReadingStatus>;
};

export type UpdateMangaInput = {
  altTitles?: InputMaybe<Array<Scalars['String']['input']>>;
  authors?: InputMaybe<Array<Scalars['String']['input']>>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genres?: InputMaybe<Array<Scalars['String']['input']>>;
  isNsfw?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<MangaStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  totalChapters?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  preferences?: InputMaybe<UserPreferencesInput>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  preferences: UserPreferences;
  updatedAt: Scalars['String']['output'];
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  notifications: NotificationPreferences;
  reader: ReaderPreferences;
};

export type UserPreferencesInput = {
  notifications?: InputMaybe<NotificationPreferencesInput>;
  reader?: InputMaybe<ReaderPreferencesInput>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<
  TResult,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<
  TTypes,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<
  T = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = Record<PropertyKey, never>,
  TParent = Record<PropertyKey, never>,
  TContext = Record<PropertyKey, never>,
  TArgs = Record<PropertyKey, never>,
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Chapter: ResolverTypeWrapper<Chapter>;
  ChapterImage: ResolverTypeWrapper<ChapterImage>;
  ChapterImageInput: ChapterImageInput;
  CreateChapterInput: CreateChapterInput;
  CreateMangaInput: CreateMangaInput;
  CreateUserInput: CreateUserInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageWidth: ImageWidth;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LibraryEntry: ResolverTypeWrapper<LibraryEntry>;
  Manga: ResolverTypeWrapper<Manga>;
  MangaFilters: MangaFilters;
  MangaStatus: MangaStatus;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  NotificationPreferences: ResolverTypeWrapper<NotificationPreferences>;
  NotificationPreferencesInput: NotificationPreferencesInput;
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  ReaderPreferences: ResolverTypeWrapper<ReaderPreferences>;
  ReaderPreferencesInput: ReaderPreferencesInput;
  ReadingHistory: ResolverTypeWrapper<ReadingHistory>;
  ReadingStatus: ReadingStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Theme: Theme;
  UpdateChapterInput: UpdateChapterInput;
  UpdateLibraryEntryInput: UpdateLibraryEntryInput;
  UpdateMangaInput: UpdateMangaInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserPreferences: ResolverTypeWrapper<UserPreferences>;
  UserPreferencesInput: UserPreferencesInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Chapter: Chapter;
  ChapterImage: ChapterImage;
  ChapterImageInput: ChapterImageInput;
  CreateChapterInput: CreateChapterInput;
  CreateMangaInput: CreateMangaInput;
  CreateUserInput: CreateUserInput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LibraryEntry: LibraryEntry;
  Manga: Manga;
  MangaFilters: MangaFilters;
  Mutation: Record<PropertyKey, never>;
  NotificationPreferences: NotificationPreferences;
  NotificationPreferencesInput: NotificationPreferencesInput;
  Query: Record<PropertyKey, never>;
  ReaderPreferences: ReaderPreferences;
  ReaderPreferencesInput: ReaderPreferencesInput;
  ReadingHistory: ReadingHistory;
  String: Scalars['String']['output'];
  UpdateChapterInput: UpdateChapterInput;
  UpdateLibraryEntryInput: UpdateLibraryEntryInput;
  UpdateMangaInput: UpdateMangaInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserPreferences: UserPreferences;
  UserPreferencesInput: UserPreferencesInput;
};

export type ChapterResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['ChapterImage']>, ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ChapterImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChapterImage'] = ResolversParentTypes['ChapterImage'],
> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type LibraryEntryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LibraryEntry'] = ResolversParentTypes['LibraryEntry'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentChapterId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lastReadAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReadingStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type MangaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Manga'] = ResolversParentTypes['Manga'],
> = {
  altTitles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  authors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isNsfw?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MangaStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalChapters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addToLibrary?: Resolver<
    ResolversTypes['LibraryEntry'],
    ParentType,
    ContextType,
    RequireFields<MutationAddToLibraryArgs, 'mangaId'>
  >;
  createChapter?: Resolver<
    ResolversTypes['Chapter'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateChapterArgs, 'input'>
  >;
  createManga?: Resolver<
    ResolversTypes['Manga'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateMangaArgs, 'input'>
  >;
  createUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'input'>
  >;
  deleteChapter?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteChapterArgs, 'id'>
  >;
  deleteManga?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMangaArgs, 'id'>
  >;
  deleteUser?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
  markChapterAsRead?: Resolver<
    ResolversTypes['ReadingHistory'],
    ParentType,
    ContextType,
    RequireFields<MutationMarkChapterAsReadArgs, 'chapterId'>
  >;
  removeFromLibrary?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType,
    RequireFields<MutationRemoveFromLibraryArgs, 'mangaId'>
  >;
  updateChapter?: Resolver<
    ResolversTypes['Chapter'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateChapterArgs, 'id' | 'input'>
  >;
  updateLibraryEntry?: Resolver<
    ResolversTypes['LibraryEntry'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateLibraryEntryArgs, 'input' | 'mangaId'>
  >;
  updateManga?: Resolver<
    ResolversTypes['Manga'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateMangaArgs, 'id' | 'input'>
  >;
  updatePreferences?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePreferencesArgs, 'input'>
  >;
  updateReadingProgress?: Resolver<
    ResolversTypes['LibraryEntry'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateReadingProgressArgs, 'chapterId' | 'mangaId'>
  >;
  updateUser?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'id' | 'input'>
  >;
};

export type NotificationPreferencesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['NotificationPreferences'] = ResolversParentTypes['NotificationPreferences'],
> = {
  email?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxPerDay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  push?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chapter?: Resolver<
    Maybe<ResolversTypes['Chapter']>,
    ParentType,
    ContextType,
    RequireFields<QueryChapterArgs, 'id'>
  >;
  chapters?: Resolver<
    Array<ResolversTypes['Chapter']>,
    ParentType,
    ContextType,
    RequireFields<QueryChaptersArgs, 'mangaId'>
  >;
  getProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  library?: Resolver<
    Array<ResolversTypes['LibraryEntry']>,
    ParentType,
    ContextType,
    RequireFields<QueryLibraryArgs, 'userId'>
  >;
  libraryEntry?: Resolver<
    Maybe<ResolversTypes['LibraryEntry']>,
    ParentType,
    ContextType,
    RequireFields<QueryLibraryEntryArgs, 'mangaId' | 'userId'>
  >;
  manga?: Resolver<
    Maybe<ResolversTypes['Manga']>,
    ParentType,
    ContextType,
    Partial<QueryMangaArgs>
  >;
  mangaBySlug?: Resolver<
    Maybe<ResolversTypes['Manga']>,
    ParentType,
    ContextType,
    RequireFields<QueryMangaBySlugArgs, 'slug'>
  >;
  mangas?: Resolver<
    Array<ResolversTypes['Manga']>,
    ParentType,
    ContextType,
    Partial<QueryMangasArgs>
  >;
  readingHistory?: Resolver<
    Array<ResolversTypes['ReadingHistory']>,
    ParentType,
    ContextType,
    RequireFields<QueryReadingHistoryArgs, 'userId'>
  >;
  searchManga?: Resolver<
    Array<ResolversTypes['Manga']>,
    ParentType,
    ContextType,
    RequireFields<QuerySearchMangaArgs, 'query'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id'>
  >;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type ReaderPreferencesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReaderPreferences'] = ResolversParentTypes['ReaderPreferences'],
> = {
  imageWidth?: Resolver<ResolversTypes['ImageWidth'], ParentType, ContextType>;
  spacing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['Theme'], ParentType, ContextType>;
};

export type ReadingHistoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['ReadingHistory'] = ResolversParentTypes['ReadingHistory'],
> = {
  chapterId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chapterNumber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  readAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferences?: Resolver<ResolversTypes['UserPreferences'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserPreferencesResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences'],
> = {
  notifications?: Resolver<ResolversTypes['NotificationPreferences'], ParentType, ContextType>;
  reader?: Resolver<ResolversTypes['ReaderPreferences'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Chapter?: ChapterResolvers<ContextType>;
  ChapterImage?: ChapterImageResolvers<ContextType>;
  LibraryEntry?: LibraryEntryResolvers<ContextType>;
  Manga?: MangaResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  NotificationPreferences?: NotificationPreferencesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReaderPreferences?: ReaderPreferencesResolvers<ContextType>;
  ReadingHistory?: ReadingHistoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPreferences?: UserPreferencesResolvers<ContextType>;
};
