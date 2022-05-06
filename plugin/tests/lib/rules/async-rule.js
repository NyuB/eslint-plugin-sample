/**
 * @fileoverview Replace fiberwait with await
 * @author NyuB
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/async-rule")
const RuleTester = require("eslint").RuleTester

// eslint-disable-next-line node/no-unpublished-require
const babelParserPath = require.resolve('@babel/eslint-parser');

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parser: babelParserPath, parserOptions: { ecmaVersion: 2021, ecmaFeatures: {} }});

const expectedErrorMessageRegex = /.*fiberwait.*replace.*async.*await.*/;

ruleTester.run("async-rule", rule, {
  valid: [
    'var a = Promise.resolve(42)',
    'var b = await Promise.resolve(42)',
    'var c = (await Promise.resolve(console)).log("Hello")',
  ],

  invalid: [
    {
      code: 'var b = fiberwait(Promise.resolve(42))',
      errors: [{ message: expectedErrorMessageRegex, type: "CallExpression" }],
      output: 'var b = await Promise.resolve(42)',
    },
    {
      code: 'fiberwait(Promise.resolve(console)).log("Hello")',
      errors: [{ message: expectedErrorMessageRegex, type: "CallExpression" }],
      output: '(await Promise.resolve(console)).log("Hello")',
    },
    {
      code: 'var c = fiberwait(Promise.resolve(console)).log("Hello")',
      errors: [{ message: expectedErrorMessageRegex, type: "CallExpression" }],
      output: 'var c = (await Promise.resolve(console)).log("Hello")',
    },
  ],
});
