export class ResourceError extends Error {}

export class NotFoundError extends ResourceError {
  constructor(message: string) {
    super(message);
  }
}

export class InvalidResponseError extends ResourceError {
  constructor(message: string) {
    super(message);
  }
}
