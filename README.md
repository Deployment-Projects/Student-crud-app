# Student CRUD App
> Spring Boot + React + PostgreSQL + Docker

---

## 🖥️ Running Locally (Without Docker)

You need Java, Maven, Node.js and PostgreSQL installed on your machine.

### 1. Set up the database connection

Open `student-crud/src/main/resources/application.properties` and make sure it looks like this:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/studentdb
spring.datasource.username=postgres
spring.datasource.password=root

# keep these commented out
# spring.datasource.url=${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/docker-demo-db}
# spring.datasource.username=${SPRING_DATASOURCE_USERNAME:lucky}
# spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:papa}
```

### 2. Set the API URL in the frontend

Open these 3 files and update the `url` variable in each one:
- `student-react-project/src/MyComponents/StudentList.jsx`
- `student-react-project/src/MyComponents/AddStudent.jsx`
- `student-react-project/src/MyComponents/EditStudent.jsx`

Make it look like this in each file:
```js
let url = "http://localhost:8080/";   // keep this active
// let url = "/api/";                 // keep this commented out
```

### 3. Start the backend

Open a terminal and run:
```bash
cd student-crud
mvn spring-boot:run
```
Backend is ready at → http://localhost:8080

### 4. Start the frontend

Open another terminal and run:
```bash
cd student-react-project
npm run dev
```
App is ready at → http://localhost:5174 🎉

---

## 🐳 Running Locally WITH Docker

You only need Docker Desktop installed. No PostgreSQL, no manual backend/frontend startup needed.

### 1. Set up the database connection

Open `student-crud/src/main/resources/application.properties` and make sure it looks like this:

```properties
# keep these commented out
# spring.datasource.url=jdbc:postgresql://localhost:5432/studentdb
# spring.datasource.username=postgres
# spring.datasource.password=root

spring.datasource.url=${SPRING_DATASOURCE_URL:jdbc:postgresql://localhost:5432/docker-demo-db}
spring.datasource.username=${SPRING_DATASOURCE_USERNAME:lucky}
spring.datasource.password=${SPRING_DATASOURCE_PASSWORD:papa}
```

### 2. Set the API URL in the frontend

Open these 3 files and update the `url` variable in each one:
- `student-react-project/src/MyComponents/StudentList.jsx`
- `student-react-project/src/MyComponents/AddStudent.jsx`
- `student-react-project/src/MyComponents/EditStudent.jsx`

Make it look like this in each file:
```js
// let url = "http://localhost:8080/";  // keep this commented out
let url = "/api/";                      // keep this active
```

### 3. Start Docker Desktop

Open Docker Desktop and wait until it says **"Engine running"** in the bottom left.

### 4. Start everything with one command

Open a terminal in the `deployment/` root folder and run:
```bash
docker-compose down        # clean up old containers (skip if first time)
docker-compose up --build  # build and start everything
```

App is ready at → http://localhost:3000 🎉

---

## ☁️ Deploying to AWS EC2

Before pushing your code for deployment, complete all the steps below.

### 1. Set up the database connection

`application.properties` stays the same as Docker — no changes needed here.

### 2. Set the API URL in the frontend

Same as Docker — `let url = "/api/"` should be active in all 3 React files.

### 3. Add the API route mapping in the backend

Open `student-crud/src/main/java/.../controller/StudentController.java` and add this line above the class:
```java
@RequestMapping({"/api", "/api/"})
```

### 4. Update the allowed domain in CORS

Open `student-crud/src/main/java/.../config/CorsConfig.java` and replace the allowed origins with your actual domain:
```java
config.setAllowedOrigins(List.of("https://your-domain.com"));
```

### 5. Push and deploy

Once all changes are done, push your code and run on your EC2 instance:
```bash
docker-compose up --build
```

App is live at → https://decormoments.shop 🚀

For running locally with docker ------------------------------------
docker compose -f docker-compose.dev.yml up -d
docker ps
Then start Spring Boot from your IDE:
Spring Boot
↓
localhost:8080
How we'll activate it locally
When you run Spring Boot locally, we'll explicitly use:
.\mvnw.cmd spring-boot:run "-Dspring-boot.run.profiles=local"

Then start React:
cd student-react-project
npm install
npm run dev

Remember we are using docker postgresql database not the local machine database
start postgresql by 
docker compose -f docker-compose.dev.yml up

start postgresql by
docker compose -f docker-compose.dev.yml down




