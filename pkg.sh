# delete the old folder
rm -r -f bookmarker.zip
rm -r -f build/

# create target folder
mkdir build/

# copy the required files
cp -R assets/ build/assets
cp -R dist/ build/dist
cp -R manifest.json build/manifest.json

# zip them for upload
node zipper.js