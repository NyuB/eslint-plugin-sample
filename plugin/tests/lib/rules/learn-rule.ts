/**
 * @fileoverview My first rule
 * @author NyuB
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { RuleTester } from 'eslint';
import { learnRuleModule } from '../../../lib/rules/learn-rule';


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("learn-rule", learnRuleModule, {
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
