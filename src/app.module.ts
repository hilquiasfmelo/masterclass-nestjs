import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRockerMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { RockerMembersRepository } from './repositories/rocker-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RockerMembersRepository,
      useClass: PrismaRockerMembersRepository,
    },
  ],
})
export class AppModule {}
