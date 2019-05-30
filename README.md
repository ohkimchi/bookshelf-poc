# bookshelf-poc

#Setup
```
npm install
docker-compose up -d
npm run migrate
npm start
```

#Add data
```
./test/run.sh
```

#Benchmark
```
brew install wrk
wrk -t12 -c100 -d30s http://localhost:3001/devices
```
