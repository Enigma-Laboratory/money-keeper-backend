import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigDatabase, ConfigModule, ConfigService } from 'src/config';
import { DBConfig } from './db.interface';

@Module({})
export class DBModule {
  private static readonly LOCAL_ENV = 'local';
  private static readonly TEST_ENV = 'test';

  private static getConnectionOptions(
    config: ConfigService,
    dbConfig: DBConfig,
  ): TypeOrmModuleOptions {
    const dbData = config.get().db;

    if (!dbData) {
      throw new Error('Database configuration is missing');
    }
    return {
      ...this.getConnectionOptionsPostgres(dbData),
      entities: dbConfig.entities,
      synchronize: true,
      logging: true,
    };
  }

  private static getConnectionOptionsPostgres(
    dbData: ConfigDatabase,
  ): TypeOrmModuleOptions {
    const isLocalOrTestEnv = [this.LOCAL_ENV, this.TEST_ENV].includes(
      process.env.NODE_ENV,
    );

    return {
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      url: dbData.url,
      port: 5432,
      keepConnectionAlive: true,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // ssl: !isLocalOrTestEnv ? { rejectUnauthorized: false } : false,
    };
  }

  public static forRoot(dbConfig: DBConfig): DynamicModule {
    return {
      module: DBModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: (configService: ConfigService) =>
            this.getConnectionOptions(configService, dbConfig),
          inject: [ConfigService],
        }),
      ],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}
