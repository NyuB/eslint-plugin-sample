/**
 * @fileoverview Replace fiberwait with await
 * @author NyuB
 */
import { Rule } from 'eslint';
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const asyncRuleModule: Rule.RuleModule = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Replace fiberwait with await",
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
      CallExpression: function(node): void {
        const name = (node.callee as any).name;
        if(name === 'fiberwait') {
          context.report({
            node,
            message: '<fiberwait> call should be replaced with async/await',
            fix: function (fixer): Rule.Fix {
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
        }
      }
    };
  },
};
