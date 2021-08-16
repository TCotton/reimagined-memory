/* eslint-env es2021 */
/**
 * @fileoverview Prevents NextJS dynamic imports
 * @author no-nextjs-dynamic-imports
 */
"use strict";
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-nextjs-dynamic-imports"),
    RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    }
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-nextjs-dynamic-imports", rule, {
    valid: [
        "const DynamicComponent = import('../components/hello');"
    ],

    invalid: [
        {
            code: "import dynamic from 'next/dynamic'; const DynamicComponent = dynamic(() => import('../components/hello'));",
            errors: [{message: "There is a bug in Next.JS that means that it is not possible to use dynamic imports", type: "CallExpression"}],
        },
    ],
});
