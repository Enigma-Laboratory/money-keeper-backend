"use strict";

const serverApi = require("..");
const assert = require("assert").strict;

assert.strictEqual(serverApi(), "Hello from serverApi le tu tuan");
console.info("serverApi tests passed");
