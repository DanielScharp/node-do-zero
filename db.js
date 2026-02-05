import "dotenv/config";
import postgres from "postgres";

//proccess.env
const {DATABASE_URL} = process.env;

export const sql = postgres(DATABASE_URL, {ssl: 'require'});