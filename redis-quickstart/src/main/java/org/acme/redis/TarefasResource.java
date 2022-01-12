package org.acme.redis;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;
import javax.ws.rs.PUT;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.POST;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.MediaType;
import java.util.List;

import io.smallrye.mutiny.Uni;

@Path("/tarefas")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TarefasResource {

    @Inject
    TarefasService service;

    @GET
    public Uni<List<String>> titulo() {
        return service.titulo();
    }

    @POST
    public Tarefas create(Tarefas tarefas) {
        service.set(tarefas.titulo, tarefas.anotacao);
        return tarefas;
    }

    @GET
    @Path("/{titulo}")
    public Tarefas get(@PathParam("titulo") String titulo) {
        return new Tarefas(titulo, String.valueOf(service.get(titulo)));
    }

    @DELETE
    @Path("/{titulo}")
    public Uni<Void> delete(@PathParam("titulo") String titulo) {
        return service.del(titulo);
    }
}
