export class ResourceError extends Error {}

export class NotFoundError extends ResourceError {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class InvalidResponseError extends ResourceError {
  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, InvalidResponseError.prototype);
  }
}
