import { PrismaClient } from '@prisma/client'
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  onModuleInit = async (): Promise<void> => {
    await this.$connect()
  }

  enableShutdownHooks = async (app: INestApplication): Promise<void> => {
    await app.close()
  }
}
