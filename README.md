This is student-crud-app project which uses Spring boot, React js with vite, PostGreSQL Database, Docker.
It implements all the crud operations of student using React UI.
On backend, spring boot also uses swagger in it. 

# Add the @RequestMapping line in StudentController when deploying on AWS EC2 Server
@RequestMapping({"/api", "/api/"})

# Files to be changed before pushing code for deployment
StudentController.java
CorsConfig.java

# The project runs using command
http://localhost