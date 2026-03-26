import pg from "pg";

const pool = new pg.Pool({
  connectionString: "postgres://postgres:@Hngt2010@localhost:5432/postgres",
});

export default pool;
