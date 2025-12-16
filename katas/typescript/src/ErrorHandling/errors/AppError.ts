export type ExecutionContext = Record<string, unknown> | undefined;

export class AppError extends Error {
  readonly errorCode: string;
  readonly statusCode: number;
  readonly executionContext?: ExecutionContext;
  readonly originalError?: Error;
  readonly isOperational: boolean;

  constructor(
    message: string,
    options?: {
      errorCode?: string;
      statusCode?: number;
      executionContext?: ExecutionContext;
      originalError?: Error;
      isOperational?: boolean;
    }
  ) {
    super(message);
    this.name = new.target.name;
    this.errorCode = options?.errorCode ?? "APP_ERROR";
    this.statusCode = options?.statusCode ?? 500;
    this.executionContext = options?.executionContext;
    if (options && typeof options.originalError !== "undefined") {
      this.originalError = options.originalError;
    }
    this.isOperational = options?.isOperational ?? true;
  }
}

export class ValidationError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "VALIDATION_ERROR",
      statusCode: 400,
      executionContext,
    });
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "NOT_FOUND",
      statusCode: 404,
      executionContext,
    });
  }
}

export class ConflictError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "CONFLICT",
      statusCode: 409,
      executionContext,
    });
  }
}

export class DatabaseError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "DATABASE_ERROR",
      statusCode: 500,
      executionContext,
    });
  }
}

export class NetworkError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "NETWORK_ERROR",
      statusCode: 503,
      executionContext,
    });
  }
}

export class AuthError extends AppError {
  constructor(message: string, executionContext?: ExecutionContext) {
    super(message, {
      errorCode: "AUTH_ERROR",
      statusCode: 401,
      executionContext,
    });
  }
}
