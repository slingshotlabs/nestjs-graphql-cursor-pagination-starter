import Zip from './entities/zip/zip.entity';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { AppService } from './app.service';
import ZipResponse from './zip.response';
import ConnectionArgs from './connection.args';
import { connectionFromArraySlice } from 'graphql-relay';

@Resolver(() => Zip)
export default class AppResolver {
  private readonly service: AppService

  @Query(() => ZipResponse)
  public async getZips(@Args() args: ConnectionArgs): Promise<ZipResponse> {
    const { limit, offset } = args.pagingParams()
    const [zips, count] = await this.service.getZips(limit, offset)
    const page = connectionFromArraySlice(
      zips, args, { arrayLength: count, sliceStart: offset || 0 },
    )

    return { page, pageData: { count, limit, offset } }
  }

  public constructor(service: AppService) {
    this.service = service
  }
}