echo "users"
mongo webprojectdb --eval db.user.drop()
mongoimport --db webprojectdb --collection user --file .\src\db\users.json --jsonArray
echo ""