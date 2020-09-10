import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs'
import Zip from './entities/zip/zip.entity';
import { GraphQLModule } from '@nestjs/graphql';
import AppResolver from './app.resolver';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'mongo',
      entities: [Zip],
      dbName: 'Nest',
      debug: true,
      clientUrl: 'mongodb://root:admin@localhost:27017'
    }),
    MikroOrmModule.forFeature({
      entities: [Zip]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      playground: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
