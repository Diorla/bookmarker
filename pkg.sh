# copy the required files
cp -R assets/ build/assets
cp -R dist/ build/dist
cp -R manifest.json build/manifest.json

# zip them for upload
node zipper.js