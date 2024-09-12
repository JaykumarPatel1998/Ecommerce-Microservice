# E-commerce Microservice Application

This is an e-commerce application backend built using microservices architecture with Spring Framework in Java. The application is containerized with Docker and uses RabbitMQ for asynchronous communication.

## Functional Requirements
- **Products Service**: Manages product information including name, description, price, image id, and stock availability. It has endpoints to create, delete, and fetch products.
- **Admin Service**: Manages admin operations such as creating, deleting, viewing, and updating products. Admins can also view all orders.
- **Orders Service**: Processes customer orders. This includes receiving product selections and quantities, calculating total price, and updating product stock.
- **Image Service**: Adds a new product to file storage and Retrieves product images based on image Id.

## Technical Implementation
![diagram-export-9-12-2024-12_00_12-AM](https://github.com/user-attachments/assets/a0c69864-c9af-4899-b34e-c70442d3973a)


- **Microservices**: Separate, independent microservices for Products, Orders, Admin, and Image.
- **Containerization**: Docker containers for each microservice.
- **Database**:  PostgreSQL is used as the database.
- **Communication**: RESTful APIs for communication between the API Gateway and microservices. NetFlix Eureka Server is used for service discovery and interservice communication. OpenFeign is used as a Rest Client for interservice communication and as a client-side load balancer.

## Prerequisites
1. **Java 17**: Ensure that Java 17 is installed on your system.
2. **Maven**: Install Apache Maven for building the Spring Boot projects.
3. **Docker**: Docker Desktop must be installed to run the services in containers.
4. **Git**: TO clone the project from the repository.

## Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-microservice.git
   cd ecommerce-microservice
   ```

2. ***Navigate to the ProductService directory and run build command***:
```bash
cd ProductService/
mvn compile jib:dockerBuild
```
This will build the project, create JAR files, and docker image for product Service.

3. ***Navigate to each microservice directory (e.g., AdminService, ImageService, EurekaService etc.) and run build command***:
```bash
cd <Insert-Directory-Name>
mvn compile jib:dockerBuild
```
This will build the project, create JAR files, and docker image for all Services.

4. ***Now you need to add docker images of the services you created above in the docker-compose.yaml file***

#### Example Microservice Configuration: Product Service

```yaml
  product-service:
    image: product-service:latest
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/postgres
      - SPRING_DATASOURCE_USERNAME=jay
      - SPRING_DATASOURCE_PASSWORD=postgres
      - RABBITMQ_HOST=rabbitmq
    depends_on:
      - db
      - rabbitmq
      - storage
    networks:
      - e-commerce
```
add similar configuration for other files as well

5. ***Monitor your docker desktop to check if all the services are up and running or else you can also check Service Health from Eureka Service Panel***
```bash
  http://localhost:8761
```


