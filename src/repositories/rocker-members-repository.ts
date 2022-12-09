export abstract class RockerMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
