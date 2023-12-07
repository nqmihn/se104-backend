<p align="center">
  Api For Web E-commerce Management
 
</p>
<br/>
<p>
   Framework: Nestjs
  Database: MySQL, Prisma
</p>


## Installation
Go to the [Backend Folder](./se104-api) then run:
```bash
npm install
```

## Database
<b>Step 1: </b>
Go to the [Docker Folder](./docker/) and run the command bellow:

```bash
docker compose -f mysql.yml -p db-se104 up -d
```
<b>Step 2: </b>
Go to the [Backend Folder](./se104-api) then run:
```bash
npx prisma migrate dev
```
After that: 
```bash
npx prisma db seed
```
## Running the app

```bash
# development
 npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```




