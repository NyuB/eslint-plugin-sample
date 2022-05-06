/**
 * @fileoverview Replace fiberwait with await
 * @author NyuB
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Replace fiberwait with await",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      CallExpression: function(node) {
        if(node.callee.name === 'fiberwait') {
          context.report({
            node,
            message: '<fiberwait> call should be replaced with async/await',
            fix: function (fixer) {
              const sourceCode = context.getSourceCode();
              const expressionText = sourceCode.getText(node.arguments[0]);
              if(node.parent.type === 'MemberExpression') {
                return fixer.replaceText(node, '(await '+ expressionText+')');
              } else {
                return fixer.replaceText(node, 'await '+ expressionText);
              }
              
            },
          })
          return
        } else {
          return
        }
      }
    };
  },
};
