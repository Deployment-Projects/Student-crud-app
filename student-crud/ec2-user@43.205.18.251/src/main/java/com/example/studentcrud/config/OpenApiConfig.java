package com.example.studentcrud.config;

import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Student CRUD API")
                        .version("1.0")
                        .description("Simple CRUD APIs for Student entity")
                        .contact(new Contact().name("Lucky Wadhwa"))
                );
    }
}
