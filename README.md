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

... and save the file as "node".

### Step 3

Tell your project to use the new build system.

Tools > Build System > node

Now, whenever you want to execute the file with Node, hit <kbd>ctrl+b</kbd>.