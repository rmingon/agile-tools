export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    db: process.env.DATABASE_DB,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432
  }
});