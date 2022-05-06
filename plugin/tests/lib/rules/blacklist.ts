/**
 * @fileoverview Forbid some functions and classes and suggest alternatives
 * @author NyuB
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { blackListRuleModule } from  '../../../lib/rules/blacklist';
import { RuleTester } from 'eslint';


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("blacklist", blackListRuleModule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "bar.doBad()",
      errors: [{ message: /.*[fF]orbidden.*doBad.*/, type: "Identifier" }],
      output: "bar.doGood()",
    },
  ],
});
