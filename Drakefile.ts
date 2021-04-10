import { desc, task, sh, run } from "https://deno.land/x/drake@v1.4.6/mod.ts";

// view all Deno permissions at https://deno.land/manual/getting_started/permissions
desc("Run API");
task("start", [], async function () {
  await sh(
    "deno run src/main.ts",
  );
});

desc("Run nonworking dummy API");
task("start-server-dummy", [], async function () {
  await sh(
    "PORT=8000 deno run --allow-env --allow-net --allow-read src/main.ts",
  );
});

desc("Run API via denon for development");
task("denon", [], async function () {
  await sh(
    "denon run src/main.ts",
  );
});

desc("set env variable");
task("set-env", [], async function () {
  await sh("setx DENO_DIR $pwd\\deno-dir");
});

desc("Cache and lock dependencies");
task("cache", [], async function () {
  await sh(
    "deno cache --lock=lock.json --lock-write src/main.ts",
  );
});

desc("Install denon for development");
task("denon-install", [], async function () {
  await sh("deno install -qAf --unstable https://deno.land/x/denon/denon.ts");
});



run();
