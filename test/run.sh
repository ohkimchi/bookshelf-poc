# create a device
curl -X POST \
  http://localhost:3001/devices/register \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "cb3e5d9d-94ed-4a33-bbd0-45cbbbe05d1c",
  "type": "tag",
  "location": "sgp",
  "macaddr": "2c2bcb31cad6"
}'

# create a person
curl -X POST \
  http://localhost:3000/person \
  -H 'Content-Type: application/json' \
  -d '{
  "id": "47da392a-5dbb-4c5d-b7ee-d7116757e587",
  "email": "chakri.patil@gmail.com",
  "name": "chakra",
  "company": "biqmind"
}'

# attach a device to person
curl -X POST \
  http://localhost:3001/devices/person \
  -H 'Content-Type: application/json' \
  -d '{
  "deviceId": "cb3e5d9d-94ed-4a33-bbd0-45cbbbe05d1c",
  "personId": "47da392a-5dbb-4c5d-b7ee-d7116757e587"
}'

# create  a new role
curl -X POST \
  http://localhost:3000/role \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "testrole"
}'

# assign role to person
curl -X POST \
  http://localhost:3000/role/assign \
  -H 'Content-Type: application/json' \
  -d '{
  "roleName": "testrole",
  "personId": "47da392a-5dbb-4c5d-b7ee-d7116757e587"
}'

# get all persons and devices data
curl http://localhost:3000/persons | jq .

