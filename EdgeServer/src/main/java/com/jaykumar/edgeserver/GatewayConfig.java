package com.jaykumar.edgeserver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import reactor.core.publisher.Mono;

@Configuration
public class GatewayConfig {
    Logger logger = LoggerFactory.getLogger(GatewayConfig.class);
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("user", r -> r.path("/api/user/**")
                        .filters(f->f.rewritePath("/api/(?<service>.*)/(?<remaining>.*)",
                                "/${service}/${remaining}")
                                .circuitBreaker(config -> config.setName("userCircuitBreaker")
                                        .setFallbackUri("forward:/fallback"))
                        )
                        .uri("lb://USER-SERVICE"))
                .route("movies", r -> r.path("/api/movies/**")
                        .filters(f->f.rewritePath("/api/(?<service>.*)/(?<remaining>.*)",
                                        "/${service}/${remaining}")
                                .circuitBreaker(config -> config.setName("movieCircuitBreaker")
                                        .setFallbackUri("forward:/fallback"))
                        )
                        .uri("lb://MOVIE-SERVICE"))
                .build();
    }

    @Bean
    public GlobalFilter customGlobalFilter() {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            String requestMethod = request.getMethod().name();
            String requestPath = request.getPath().toString();
            logger.info("Incoming request " + requestMethod + " " + requestPath);
            long startTime = System.currentTimeMillis();

            return chain.filter(exchange).then(Mono.fromRunnable(() -> {
                // Capture and log response details
                ServerHttpResponse response = exchange.getResponse();
                HttpStatusCode responseStatus = response.getStatusCode();
                long duration = System.currentTimeMillis() - startTime;
                logger.info("Outgoing response with status code " + responseStatus + " processed in " + duration + " ms");
            }));
        };
    }

}
