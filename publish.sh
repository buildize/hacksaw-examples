DIRS="
todos
blog
pagination
github
shopping-cart
"

rm -rf ./build

for dir in $DIRS; do
  (cd $dir && npm run build)
  mkdir -p ./build/$dir
  cp -R ./$dir/build/. ./build/$dir
done

(cd common && npm run build)
cp -R ./common/build/. ./build

cp ./CNAME ./build/CNAME

cd ./build
git init
git commit --allow-empty -m 'update apps'
git checkout -b gh-pages
touch .nojekyll
git add .
git commit -am 'update apps'
git push https://github.com/Buildize/hacksaw-examples.git gh-pages --force
