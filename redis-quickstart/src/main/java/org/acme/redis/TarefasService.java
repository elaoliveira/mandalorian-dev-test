package org.acme.redis;

import io.quarkus.redis.client.RedisClient;
import io.quarkus.redis.client.reactive.ReactiveRedisClient;
import io.smallrye.mutiny.Uni;

import io.vertx.mutiny.redis.client.Response;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;

@Singleton
class TarefasService {

    @Inject
    RedisClient redisClient;

    @Inject
    ReactiveRedisClient reactiveRedisClient;

    Uni<Void> del(String titulo) {
        return reactiveRedisClient.del(Arrays.asList(titulo))
                .map(response -> null);
    }

    String get(String titulo) {
        return redisClient.get(titulo).toString();
    }

    void set(String titulo, String anotacao) {
        redisClient.set(Arrays.asList(titulo, anotacao.toString()));
    }

    Uni<List<String>> titulo() {
        return reactiveRedisClient
                .keys("*")
                .map(response -> {
                    List<String> result = new ArrayList<>();
                    for (Response r : response) {
                        result.add(r.toString());
                    }
                    return result;
                });
    }
}

