echo "files"
mongo webprojectdb --eval 'db.files.drop()'
mongo webprojectdb --eval 'db.createCollection("files")'
echo ""

echo "users"
mongo webprojectdb --eval 'db.users.drop()'
mongoimport --db webprojectdb --collection users --file db\users.json --jsonArray
echo ""