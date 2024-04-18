import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000", //ruta completa
  }), //lo mismo que usar axios
  endpoints: (builder) => ({
    //builder para mirar cuales traen datos y cuales mutan
    //get -> trae datos
    //put, post, delete -> mutan datos
    getTasks: builder.query({
      query: () => "/tasks", //subruta
      providesTags: ["Tasks"], //le damos el nombre de Tasks
      transformResponse: (response) => response.sort((a, b) => b.id - a.id), //ordenar por id
    }),
    createTask: builder.mutation({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Tasks"], //lo que hace es que tenga que volver a ejecutar Tasks
    }),
    updateTask: builder.mutation({
      query: (updatedTask) => ({
        url: `/tasks/${updatedTask.id}`,
        method: "PATCH",
        body: updatedTask,
      }),
      invalidatesTags: ["Tasks"],

    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = apiSlice;
