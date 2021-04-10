import { log } from "./deps.ts";

// custom configuration with 2 loggers (the default and `tasks` loggers).
await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),

    file: new log.handlers.FileHandler("WARNING", {
      filename: "./log.txt",
      // you can change format of output message using any keys in `LogRecord`.
      formatter: "{levelName} {msg}",
    }),
  },})

let logger = log.getLogger();
logger.debug("fizz"); // logs to `console`, because `file` handler requires "WARNING" level.
logger.warning(41256); // logs to both `console` and `file` handlers.

console.log("Start your Deno project")
