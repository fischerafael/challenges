export class NewDateGenerateId implements GenerateId {
  execute(): string {
    return new Date().toISOString();
  }
}
