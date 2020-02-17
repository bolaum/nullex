# export PG_PORT=$(grep PG_PORT .env | cut -d '=' -f2)
# export PG_PASSWORD=$(grep PG_PASSWORD .env | cut -d '=' -f2)

mkdir -p tmp/

echo '{ "Servers": { "1": { "Name": "nullex", "Group": "nullex", "Port": 5432, "Username": "postgres", "Host": "postgres", "SSLMode": "prefer", "MaintenanceDB": "postgres" } } }' | envsubst > tmp/servers.json

docker-compose -f nullex-compose.yaml up
