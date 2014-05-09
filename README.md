# Notes

## Build with Sublime Text 3

[reference](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/reference/build_systems.html)

To add a simple Node build system to ST3 that will allow you to build (execute) JavaScript with Node straight from the editor.

### Step 1

Create the new build system.

Tools > Build System > New Build System...

### Step 2

Change the content to...

    {
        "cmd": ["node", "$file"]
    }

... and save the file as "node.sublime-build".  This will be saved in ~/.config/sublime-text-3/Packages/User/.

### Step 3

Tell your project to use the new build system.  You can also add a selector to the build system json.

Tools > Build System > node

Now, whenever you want to execute the file with Node, hit <kbd>ctrl+b</kbd>.

## Debugging Node

There is some [built in debugging](http://nodejs.org/api/debugger.html), but it sucks.  Instead, use [Node Inspector](https://github.com/node-inspector/node-inspector) which looks and acts like the browser debugger you're used to.

    sudo npm install -g node-inspector

To run your app with Node Inspector...

    node-debug ./your-app.js

### Change Build System

Now, we can change the build system to use Node Inspector.

    {
        "cmd": ["node-debug", "$file"]
    }

## Tips

If you end up seeing EADDRINUSE when trying to build, it means it didn't shut down correctly last time.  There are [a number of ways to resolve this](http://stackoverflow.com/questions/4075287/node-express-eaddrinuse-address-already-in-use-kill-server), including...

    killall node

You can customize how Node Inspector runs with [.node-inspectorrc](https://github.com/node-inspector/node-inspector#node-inspector-1).