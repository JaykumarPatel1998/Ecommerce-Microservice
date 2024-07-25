package com.jaykumar.imageservice;

import io.minio.MinioClient;
import io.minio.messages.Bucket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("storage")
public class ImageController {

    private final MinioClient minioClient;

    @Autowired
    public ImageController(MinioClient minioClient) {
        this.minioClient = minioClient;
    }

    @GetMapping("/buckets")
    public List<String> getBuckets() {
        try {
            System.out.println(this.minioClient.listBuckets());
            return this.minioClient.listBuckets().stream().map((Bucket::name)).toList();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}