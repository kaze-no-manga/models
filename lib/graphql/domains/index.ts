import { readFileSync } from 'fs'
import { join } from 'path'

// Export individual domain schemas as strings
export const userSchema = readFileSync(join(__dirname, 'user.graphql'), 'utf-8')
export const contentSchema = readFileSync(join(__dirname, 'content.graphql'), 'utf-8')  
export const librarySchema = readFileSync(join(__dirname, 'library.graphql'), 'utf-8')
export const baseSchema = readFileSync(join(__dirname, '../base.graphql'), 'utf-8')

// Export combined schema
export const allSchemas = [baseSchema, userSchema, contentSchema, librarySchema]
