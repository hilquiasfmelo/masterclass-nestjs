import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RockerMembersRepository } from './repositories/rocker-members-repository';

@Controller()
export class AppController {
  constructor(private rockerMembersRepository: RockerMembersRepository) {}

  @Post('member')
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    const member = await this.rockerMembersRepository.create(
      name,
      memberFunction,
    );

    return JSON.stringify(member);
  }
}
