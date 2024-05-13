https://www.udemy.com/course/typescript-course/learn/lecture/33550794#overview

npm install typescript -g

tsc -v

if it is not global install would need to do npx tsc -v

tsc --init

will not emit js if it runs into errors

<!-- tsc --noEmitOnError index.ts -->

tsc --help

<!-- this will use the tsconfig -->

tsc -p ./tsconfig.json

<!-- parcel is cool can vite do this?-->

"start": "(npx parcel ./index.html) & npx parcel watch ./index.html",

<!-- troubleshooting -->

the main prop and value in package.json may cause issue in parcel delete it.

<!-- cannot redeclare block scoped variables  -->
