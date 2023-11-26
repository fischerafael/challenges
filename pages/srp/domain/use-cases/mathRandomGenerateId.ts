export class MathRandomGenerateId implements GenerateId {
  execute(): string {
    return String(Math.random() + Math.random());
  }
}
