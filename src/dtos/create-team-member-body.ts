import { IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100, {
    message: 'A quantidade de caracteres deve ser entre 5 a 100',
  })
  name: string;

  @IsNotEmpty({
    message: 'A função do membro não pode estar vazia.',
  })
  function: string;
}
