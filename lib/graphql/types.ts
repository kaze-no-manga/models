import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Chapter = {
  __typename?: 'Chapter';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ChapterImage>;
  mangaId: Scalars['ID']['output'];
  number: Scalars['Float']['output'];
  releaseDate?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['ID']['output'];
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

export type CreateMangaInput = {
  altTitles: Array<Scalars['String']['input']>;
  authors: Array<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  genres: Array<Scalars['String']['input']>;
  sourceId: Scalars['ID']['input'];
  sourceMangaId: Scalars['String']['input'];
  sourceUrl: Scalars['String']['input'];
  status: MangaStatus;
  title: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};

export enum ImageWidth {
  Fit = 'FIT',
  Full = 'FULL'
}

export type LibraryEntry = {
  __typename?: 'LibraryEntry';
  addedAt: Scalars['String']['output'];
  currentChapterId?: Maybe<Scalars['ID']['output']>;
  currentChapterNumber?: Maybe<Scalars['Float']['output']>;
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
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  genres: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sourceId: Scalars['ID']['output'];
  sourceMangaId: Scalars['String']['output'];
  sourceUrl: Scalars['String']['output'];
  status: MangaStatus;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export enum MangaStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Hiatus = 'HIATUS',
  Ongoing = 'ONGOING'
}

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  addToLibrary: LibraryEntry;
  createManga: Manga;
  markChapterAsRead: ReadingHistory;
  removeFromLibrary: Scalars['Boolean']['output'];
  updateLibraryEntry: LibraryEntry;
  updatePreferences: User;
  updateProgress: LibraryEntry;
};


export type MutationAddToLibraryArgs = {
  mangaId: Scalars['ID']['input'];
};


export type MutationCreateMangaArgs = {
  input: CreateMangaInput;
};


export type MutationMarkChapterAsReadArgs = {
  chapterId: Scalars['ID']['input'];
};


export type MutationRemoveFromLibraryArgs = {
  mangaId: Scalars['ID']['input'];
};


export type MutationUpdateLibraryEntryArgs = {
  input: UpdateLibraryEntryInput;
  mangaId: Scalars['ID']['input'];
};


export type MutationUpdatePreferencesArgs = {
  input: UserPreferencesInput;
};


export type MutationUpdateProgressArgs = {
  chapterId: Scalars['ID']['input'];
  mangaId: Scalars['ID']['input'];
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
  getChapters: Array<Chapter>;
  getLibrary: Array<LibraryEntry>;
  getManga?: Maybe<Manga>;
  getProfile: User;
  getReadingHistory: Array<ReadingHistory>;
  searchManga: Array<Manga>;
};


export type QueryGetChaptersArgs = {
  mangaId: Scalars['ID']['input'];
};


export type QueryGetMangaArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetReadingHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchMangaArgs = {
  query: Scalars['String']['input'];
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
  Reading = 'READING'
}

export enum Theme {
  Auto = 'AUTO',
  Dark = 'DARK',
  Light = 'LIGHT'
}

export type UpdateLibraryEntryInput = {
  notes?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<ReadingStatus>;
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
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
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

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Chapter: ResolverTypeWrapper<Chapter>;
  ChapterImage: ResolverTypeWrapper<ChapterImage>;
  CreateMangaInput: CreateMangaInput;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageWidth: ImageWidth;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LibraryEntry: ResolverTypeWrapper<LibraryEntry>;
  Manga: ResolverTypeWrapper<Manga>;
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
  UpdateLibraryEntryInput: UpdateLibraryEntryInput;
  User: ResolverTypeWrapper<User>;
  UserPreferences: ResolverTypeWrapper<UserPreferences>;
  UserPreferencesInput: UserPreferencesInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Chapter: Chapter;
  ChapterImage: ChapterImage;
  CreateMangaInput: CreateMangaInput;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LibraryEntry: LibraryEntry;
  Manga: Manga;
  Mutation: Record<PropertyKey, never>;
  NotificationPreferences: NotificationPreferences;
  NotificationPreferencesInput: NotificationPreferencesInput;
  Query: Record<PropertyKey, never>;
  ReaderPreferences: ReaderPreferences;
  ReaderPreferencesInput: ReaderPreferencesInput;
  ReadingHistory: ReadingHistory;
  String: Scalars['String']['output'];
  UpdateLibraryEntryInput: UpdateLibraryEntryInput;
  User: User;
  UserPreferences: UserPreferences;
  UserPreferencesInput: UserPreferencesInput;
};

export type ChapterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Chapter'] = ResolversParentTypes['Chapter']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  images?: Resolver<Array<ResolversTypes['ChapterImage']>, ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type ChapterImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChapterImage'] = ResolversParentTypes['ChapterImage']> = {
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  originalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type LibraryEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LibraryEntry'] = ResolversParentTypes['LibraryEntry']> = {
  addedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currentChapterId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  currentChapterNumber?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lastReadAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReadingStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type MangaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Manga'] = ResolversParentTypes['Manga']> = {
  altTitles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  authors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  coverImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sourceId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sourceMangaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MangaStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addToLibrary?: Resolver<ResolversTypes['LibraryEntry'], ParentType, ContextType, RequireFields<MutationAddToLibraryArgs, 'mangaId'>>;
  createManga?: Resolver<ResolversTypes['Manga'], ParentType, ContextType, RequireFields<MutationCreateMangaArgs, 'input'>>;
  markChapterAsRead?: Resolver<ResolversTypes['ReadingHistory'], ParentType, ContextType, RequireFields<MutationMarkChapterAsReadArgs, 'chapterId'>>;
  removeFromLibrary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveFromLibraryArgs, 'mangaId'>>;
  updateLibraryEntry?: Resolver<ResolversTypes['LibraryEntry'], ParentType, ContextType, RequireFields<MutationUpdateLibraryEntryArgs, 'input' | 'mangaId'>>;
  updatePreferences?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdatePreferencesArgs, 'input'>>;
  updateProgress?: Resolver<ResolversTypes['LibraryEntry'], ParentType, ContextType, RequireFields<MutationUpdateProgressArgs, 'chapterId' | 'mangaId'>>;
};

export type NotificationPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationPreferences'] = ResolversParentTypes['NotificationPreferences']> = {
  email?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  maxPerDay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  push?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  getChapters?: Resolver<Array<ResolversTypes['Chapter']>, ParentType, ContextType, RequireFields<QueryGetChaptersArgs, 'mangaId'>>;
  getLibrary?: Resolver<Array<ResolversTypes['LibraryEntry']>, ParentType, ContextType>;
  getManga?: Resolver<Maybe<ResolversTypes['Manga']>, ParentType, ContextType, RequireFields<QueryGetMangaArgs, 'id'>>;
  getProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  getReadingHistory?: Resolver<Array<ResolversTypes['ReadingHistory']>, ParentType, ContextType, Partial<QueryGetReadingHistoryArgs>>;
  searchManga?: Resolver<Array<ResolversTypes['Manga']>, ParentType, ContextType, RequireFields<QuerySearchMangaArgs, 'query'>>;
};

export type ReaderPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReaderPreferences'] = ResolversParentTypes['ReaderPreferences']> = {
  imageWidth?: Resolver<ResolversTypes['ImageWidth'], ParentType, ContextType>;
  spacing?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  theme?: Resolver<ResolversTypes['Theme'], ParentType, ContextType>;
};

export type ReadingHistoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReadingHistory'] = ResolversParentTypes['ReadingHistory']> = {
  chapterId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chapterNumber?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mangaId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  readAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  preferences?: Resolver<ResolversTypes['UserPreferences'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type UserPreferencesResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPreferences'] = ResolversParentTypes['UserPreferences']> = {
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

