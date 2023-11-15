export default abstract class LoggingServiceToken {
  public abstract log(...data: unknown[]): void;
  public abstract warn(...data: unknown[]): void;
  public abstract error(...data: unknown[]): void;
}
