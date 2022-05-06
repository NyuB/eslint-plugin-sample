/**
 * @fileoverview My first rule
 * @author NyuB
 */
 import { Rule } from 'eslint';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const learnRuleModule: Rule.RuleModule = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "My first rule",
      category: "Fill me in",
      recommended: false,
      url: undefined, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context: Rule.RuleContext): Rule.RuleListener {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      CallExpression: function(node): void {
        const name = (node.callee as any).name;
        if(name === 'foo') {
          context.report({
            node,
            message: "Invalid call to foo, replace with bar",
            fix: function(fixer) {
              return fixer.replaceText(node.callee, 'bar')
            }
          });
          return;
        } else {
          return;
        }
      }
    };
  },
};
