var Foo = function (name) {
    this.name = name;
    this.priv = function () {
        return this.name;
    };
};

Foo.prototype.getName = function () {
    return this.name;
};

exports.Foo = Foo;