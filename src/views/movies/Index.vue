<template>
    <div class="container mx-auto px-4 pt-16" v-if="!$route.matched.some(record => record.name === 'info')">
        <div class="popular-movies">
            <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="mt-8">
                    <router-link :to="{ name: 'info', params: { id: 1 } }">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </router-link>
                    <div class="mt-2">
                        <router-link :to="{ name: 'info', params: { id: 1 } }" class="text-lg mt-2 hover:text-gray-300">John Wick</router-link>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <!-- <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="now-playing-movies py-24">
            <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Now Playing</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/poster.jpeg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="text-lg mt-2 hover:text-gray-300">John Wick</a>
                        <div class="flex items-center text-gray-400 text-sm mt-1">
                            <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                            <span class="ml-1">85%</span>
                            <span class="mx-2">|</span>
                            <span>Feb 15, 2019</span>
                        </div>
                        <div class="text-gray-400 text-sm">
                            Action, Crime, Thriller
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <router-view />
</template>

<script>
export default {
    name: 'Index'
}
</script>

<style lang="scss" scoped></style>