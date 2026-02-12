# Student CRUD (Spring Boot + PostgreSQL)

## What is included
- Spring Boot 3 project (Maven)
- PostgreSQL datasource
- CRUD APIs for Student entity
- Swagger UI (OpenAPI via springdoc)
- Dockerfile and docker-compose to run the app + Postgres

## Run locally
1. Configure `src/main/resources/application.properties` datasource for your local Postgres.
2. Build and run:
   ```
   mvn clean package
   java -jar target/final-app.jar
   ```
3. Swagger UI: http://localhost:8080/swagger-ui.html or http://localhost:8080/swagger-ui/index.html

## Run with Docker Compose
```
docker compose up --build
```
This starts both the app and a Postgres container (username: postgres, password: example).

## Files to be changed for deployment. 
1. application.properties

