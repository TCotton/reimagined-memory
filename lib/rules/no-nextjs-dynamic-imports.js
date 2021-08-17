/**
 * @fileoverview Prevents NextJS dynamic imports
 * @author no-nextjs-dynamic-imports
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: `problem`, // `problem`, `suggestion`, or `layout`
        docs: {
            description: "Prevents NextJS dynamic imports",
            category: "Severe",
            recommended: true,
            url: null, // URL to the documentation page for this rule
        },
        fixable: `code`, // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
        unexpected: 'There is a bug in Next.JS that means that it is not possible to use dynamic imports',
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
            CallExpression(node) {
                if (node.callee.name === "dynamic") {
                    context.report(node, "There is a bug in Next.JS that means that it is not possible to use dynamic imports");
                }
            }
        };
    },
};
