# delete the old folder
rm -r -f bookmarker.zip
rm -r -f build/

GREEN='\033[0;32m'
DEFAULT_COLOR='\033[0m'

printf "${GREEN}Old files deleted${DEFAULT_COLOR}\n"

# run build
npm run build

printf "${GREEN}package built${DEFAULT_COLOR}\n"

# create target folder
mkdir build/

# copy the required files
cp -R assets/ build/assets
cp -R dist/ build/dist
cp -R manifest.json build/manifest.json

printf "${GREEN}new build dir created${DEFAULT_COLOR}\n"

# zip them for upload
node zipper.js

printf "${GREEN}package zipped${DEFAULT_COLOR}\n"