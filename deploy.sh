#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'v1.1 theme changed'

git push -f git@github.com:artem-2237/VueWeather.git master:gh-pages

cd -
