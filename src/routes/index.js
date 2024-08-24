import MoviesIndex from "@/views/movies/Index.vue"
import MoviesShow from "@/views/movies/Show.vue"
import TvIndex from "@/views/tv/Index.vue"
import ActorsIndex from "@/views/actors/Index.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "movies",
        component: MoviesIndex,
        children: [
            {
                path: "movies/info/:id",
                name: "info",
                component: MoviesShow
            }
        ]
    },
    {
        path: "/tv",
        name: "tv",
        component: TvIndex
    },
    {
        path: "/actors",
        name: "actors",
        component: ActorsIndex
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router