import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions ={
    type: "postgres",
    host: "localhost",
    port: 5432,
    password: "postgres",
    username: "postgres",
    synchronize: true,
    entities: ["dist/**/*.entity.js"],
    logging: true,
    migrations: ["dist/**/*.entity.js"]
  }

  export default config;
