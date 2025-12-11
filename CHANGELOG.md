# 1.0.0 (2025-12-11)


### Features

* add comprehensive test suite and fix all lint warnings ([e9e3935](https://github.com/kaze-no-manga/models/commit/e9e39358a59e68bf074a9f3655933c46306f855b))
* implement GraphQL-first models package with domain separation ([885aabd](https://github.com/kaze-no-manga/models/commit/885aabd245b703e0171fde583d2baaf8696e96ec))
* initial project setup with TypeScript and GraphQL codegen ([6ac06aa](https://github.com/kaze-no-manga/models/commit/6ac06aaba99c8981def63f8f34e3634c14e52b25))
* initial project setup with TypeScript and GraphQL codegen ([7929fb4](https://github.com/kaze-no-manga/models/commit/7929fb43c997e62173f1cef026d61493d55a1778))
* refactor models with improved structure and complete CRUD operations ([9e99227](https://github.com/kaze-no-manga/models/commit/9e9922709ce1003812fa8696d1b1a8033747a417))


### BREAKING CHANGES

* Updated all GraphQL schemas with new field names and CRUD operations

**Manga Model Updates:**
- Add `slug` field for SEO-friendly URLs (/manga/one-piece)
- Replace `coverImage` with `cover` for consistency
- Add `description`, `totalChapters`, `isNsfw` fields for enhanced metadata
- Replace `sourceId`/`sourceMangaId` with clearer `sourceName`/`sourceId`
- Remove redundant `sourceUrl` field
- Add `createdAt`/`updatedAt` timestamps

**Chapter Model Simplification:**
- Remove `sourceId` (implicit through manga relationship)
- Maintain clean `mangaId` foreign key relationship

**LibraryEntry Model Cleanup:**
- Remove duplicate `currentChapterNumber` field
- Keep only `currentChapterId` as single source of truth
- Replace `addedAt` with `lastReadAt` for better UX
- Add proper `createdAt`/`updatedAt` timestamps

**GraphQL API Enhancement:**
- Implement complete CRUD operations for all domains
- Add User CRUD: `user(id)`, `users()`, `createUser`, `updateUser`, `deleteUser`
- Add Manga CRUD: `manga(id)`, `mangaBySlug(slug)`, `mangas()`, `searchManga()`
- Add Chapter CRUD: `chapter(id)`, `chapters(mangaId)`, `createChapter`, `updateChapter`
- Add Library operations: `library(userId)`, `libraryEntry()`, `readingHistory()`
- Support for filters, pagination, and advanced queries

**Test Updates:**
- Update all domain tests to reflect new field names
- Maintain 100% test coverage (66/66 tests passing)
- Update integration tests for new query/mutation names

This refactor provides a cleaner, more maintainable data model that supports
the complete manga reading ecosystem with proper SEO, content filtering,
and progress tracking capabilities.
* Removed Zod exports, now GraphQL-generated types only
