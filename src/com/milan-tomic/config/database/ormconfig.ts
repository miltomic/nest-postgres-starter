export const type = 'postgres';
export const host = process.env.DATABASE_HOST;
export const port = parseInt(process.env.DATABASE_PORT);
export const username = process.env.DATABASE_USER;
export const password = process.env.DATABASE_PASSWORD;
export const database = process.env.DATABASE_NAME;
export const schema = process.env.DATABASE_SCHEMA_NAME;
export const entities = ['dist/com/milan-tomic/**/*.entity.js'];
export const synchronize = false;
export const migrations = ['dist/com/milan-tomic/config/database/migration/**/*.js'];

