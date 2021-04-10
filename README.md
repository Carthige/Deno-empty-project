# ReadME
This is a empty default project for Deno depending on Denon (nodemon for Deno) and Drake (Makefile for Deno) to run the project. To make it easier for myself I added some redunent dummy code, this project is therefor half sane defaults half remainder to start a Deno project. 

## Installation

1. Ensure you have Deno installed: https://deno.land/
2. Install [Denon](https://deno.land/x/denon): `deno run -A drake.ts denon-install`
3. (Optional) run: `deno run -A drake.ts set-env`
4. (Optional) run: `deno run -A drake.ts cache`
5. In the terminal, run: `deno run -A drake.ts start`

## Flow of the code in the project
For optimal local/offline use you will want to cache the libraries you are working on. 
To do this, run command 3 followed by command 4. Command 3 ensures that your enviornment varialbes for your cach are set you your local project, this allows you to use different versions of a particulate library in your projects.
Command 4 will cache and lock the dependancies to your drive in a 'deno-dir' folder. 

All dependancies of your code are managed in the deps.ts file, the rest of your code can import the dependencies from this deps.ts file. The placement of all dependancies in one file allows you to keep track of all your dependencies and to do version control. 

The main convention is to use mod.ts as the starting point for making libraries, other coding projects should use a main.ts file (this is similar to Rust's convention).

Tests are written in the tests folder. A file is made for each module that needs to be tested with '.test' added to the name. So 'main.ts' becomes 'main.test.ts'.

If you cannot find a library in [Deno](https://deno.land/x/) you can always use a npm js library. You will have to search for a library that is compatible with ES-6, I believe.
See depts.ts for an example with lodash.

### Drakefiles
Deno uses [strict permissions](ttps://deno.land/manual/getting_started/permissions) for you to run your code. This template project cercomvents this by using Drake, giving Drake all the permissions. However, you will neeed to adjust the commands in the Drake file to match the needs of your project. See the Drake file for an example. 

## Redundant code
There is redundant code in all places to give me a reminder on how to do things and some defaults you may want to build appon. 

Locations:
1. Drakefile - the dummy command, to show you what is needed to start a server.
2. Tests folder - all in here are dummy, this is to see the convention names and an example of how to do tests.
3. The dependancy file is a dummy with some defaults that you might want to use. The versions on these files are probably out of date, check for newer versions before you begin with your project.
4. Main.ts shows a default logger that logs to a file if you log a warning.

Thats all foks, happy coding.
