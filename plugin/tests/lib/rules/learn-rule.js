/**
 * @fileoverview My first rule
 * @author NyuB
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/learn-rule"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("learn-rule", rule, {
  valid: [
    'var a = bar(42);',
    'var a = foofighters(42);',
    'var a = fifoo(42);',
    'foo = 42;',
  ],

  invalid: [
    {
      code: "var a = foo(42)",
      output: "var a = bar(42)",
      errors: [{ message: /.*[iI]nvalid.*foo.*[rR]eplace.*bar/, type: "CallExpression" }],
    },
  ],
});
