export class NotSupportedException extends Error {
  readonly name: string = "NotSupportedException";
  constructor(readonly method: string, readonly message: string) {
    super(message);
  }
}
