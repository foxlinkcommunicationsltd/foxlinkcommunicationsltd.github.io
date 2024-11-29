#!/bin/bash
npm run build
cd dist
git add .
git commit -m "Update website"
git push
cd ..