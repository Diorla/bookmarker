# delete the old folder
rm -r -f chrome.zip
rm -r -f firefox.zip
rm -r -f chrome_build/
rm -r -f firefox_build/

GREEN='\033[0;32m'
DEFAULT_COLOR='\033[0m'

printf "${GREEN}Old files deleted${DEFAULT_COLOR}\n"

# run build
npm run build

printf "${GREEN}Package built${DEFAULT_COLOR}\n"

# create target folder
mkdir chrome_build/
mkdir firefox_build/

# copy the required files
cp -R assets/ chrome_build/assets
cp -R dist/ chrome_build/dist
cp -R manifest.json chrome_build/manifest.json

cp -R assets/ firefox_build/assets
cp -R dist/ firefox_build/dist
cp -R firefox-manifest.json firefox_build/manifest.json

printf "${GREEN}New build dir created${DEFAULT_COLOR}\n"

# zip them for upload
node zip-chrome.js
node zip-firefox.js

printf "${GREEN}Package zipped${DEFAULT_COLOR}\n"