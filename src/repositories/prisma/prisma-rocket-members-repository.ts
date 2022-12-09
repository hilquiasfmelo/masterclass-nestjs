import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { RockerMembersRepository } from '../rocker-members-repository';

@Injectable()
export class PrismaRockerMembersRepository implements RockerMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        name,
        function: memberFunction,
      },
    });
  }
}
