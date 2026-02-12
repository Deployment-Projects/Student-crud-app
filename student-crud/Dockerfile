# Use Spring Boot build artifact
FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /workspace
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
COPY src ./src
# run maven to build the jar
RUN ./mvnw -B -DskipTests package

FROM eclipse-temurin:17-jre-jammy
ARG JAR_FILE=target/final-app.jar
WORKDIR /app
COPY --from=build /workspace/target/final-app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
