/**
 * @fileoverview Forbid some functions and classes and suggest alternatives
 * @author NyuB
 */

 import { Rule } from 'eslint';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export interface Forbidden {
  replacement?: string;
}

export type ForbiddenMap =  {[key: string]: Forbidden};

export interface BlackList {
  methods: ForbiddenMap;
  classes: ForbiddenMap;
}

const MyBlackList: BlackList = {
  classes: {
    "BadClass": {
      replacement: "GoodClass",
    }
  },
  methods: {
    "doBad": {
      replacement: "doGood",
    }
  }
}

/**
 * @type {import('eslint').Rule.RuleModule}
 */
export const blackListRuleModule: Rule.RuleModule = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Forbid some functions and classes and suggest alternatives",
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
      Identifier: function(node): void {
        if(MyBlackList.methods[node.name]) {
            const replacement = MyBlackList.methods[node.name]?.replacement;
            context.report({
              node,
              message: 'Forbidden method ' + node.name,
              fix: replacement
                ? function(fixer) {
                    return fixer.replaceText(node, replacement)
                  }
                : undefined
            })
        } else if(MyBlackList.classes[node.name]) {
          const replacement = MyBlackList.classes[node.name]?.replacement;
          context.report({
            node,
            message: 'Forbidden class ' + node.name,
            fix: replacement
              ? function(fixer) {
                  return fixer.replaceText(node, replacement)
                }
              : undefined
          })
        }
      }
    };
  },
};
