
echo "Removing key from key store..."

rm -rf ./hfc-key-store

# Remove chaincode docker image
sudo docker rmi -f dev-peer0.org1.example.com-mycc-1.0-384f11f484b9302df90b453200cfb25174305fce8f53f4e94d45ee3b6cab0ce9
sleep 2

cd ../basic-network
./start.sh

sudo docker ps -a

sudo docker-compose -f ./docker-compose.yml up -d cli
sudo docker ps -a
sleep 5

echo 'Installing chaincode..'
sudo docker exec -it cli peer chaincode install -n mycc -v 1.0 -p "/opt/gopath/src/github.com" -l "node"

echo 'Instantiating chaincode..'
sudo docker exec -it cli peer chaincode instantiate -o orderer.example.com:7050 -C mychannel -n mycc -l "node" -v 1.0 -c '{"Args":[]}'
echo 'Getting things ready for Chaincode Invocation..should take only 10 seconds..'

sleep 10
echo 'Adding User.'
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"registerUser","Args":["salman279","12345","Salman"]}'
sleep 5

echo 'Adding Products..'

sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Tomato","Vegetables","24","120","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Tomato","Vegetables","24","190","D.no.6-13/A,Oldcity, Hyderabad","+91123462687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","BiiterGaurd","Vegetables","18","140","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Brinjal","Vegetables","20","180","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Cucumber","Vegetables","18","200","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Dates","Fruits","170","300","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Apple","Fruits","25","800","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Rice","Grains","39","1200","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'
sleep 3
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"addProduct","Args":["salman279","12345","Weat","Grains","29","1200","D.no.7-13/A,Oldcity, Hyderabad","+9112345687","16/10/2019"]}'

sleep 3
echo 'Querying;.. Products'

sudo docker exec -e “CORE_PEER_LOCALMSPID=Org1MSP” -e “CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp” cli peer chaincode query -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"searchProducts","Args":["Vegetables","Tomato"]}'
sudo docker exec -e “CORE_PEER_LOCALMSPID=Org1MSP” -e “CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp” cli peer chaincode query -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"searchProducts","Args":["Fruits","Apple"]}'
sudo docker exec -e “CORE_PEER_LOCALMSPID=Org1MSP” -e “CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp” cli peer chaincode query -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"searchProducts","Args":["Grains","Rice"]}'
sleep 5
#My Account
sudo docker exec -it cli peer chaincode invoke -o orderer.example.com:7050 -C mychannel -n mycc -c '{"function":"myAccount","Args":["salman279","12345"]}'


# Starting docker logs of chaincode container

sudo docker logs -f dev-peer0.org1.example.com-mycc-1.0


