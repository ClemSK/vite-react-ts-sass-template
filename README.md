# vite-react-ts-sass-template

Template for Vite React TypeScript Sass projects

FYI Vite does not do type checking, which is why the build is so fast.

To have type-checking run `tsc --noEmit` as part of your build process, or just every now and then. From this [Reddit thread](https://www.reddit.com/r/typescript/comments/qrszys/is_anyone_working_with_vite/).

To improve the Sass workflow I'll be leveraging the [Gulp-Vite plugin](https://www.npmjs.com/package/gulp-vite) specifically to help with purging unused CSS.

I'll be adding tests with [Vitests](https://vitest.dev/guide/) for unit tests and [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file)
