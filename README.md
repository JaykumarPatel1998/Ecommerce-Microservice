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

##  UI Development in Progress for this project
