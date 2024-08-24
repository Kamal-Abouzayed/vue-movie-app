<template>
    <div class="movie-info border-b border-gray-800">
        <div class="container flex flex-col px-4 py-16 mx-auto md:flex-row">
            <img src="../../assets/images/poster.jpeg" alt="" class="w-96">
            <div class="md:ml-24">
                <h2 class="text-4xl font-semibold">John Wick</h2>
                <div class="flex items-center text-gray-400 text-sm">
                    <span><i class="fa fa-star fa-xs text-orange-500"></i></span>
                    <span class="ml-1">85%</span>
                    <span class="mx-2">|</span>
                    <span>Feb 15, 2019</span>
                    <span class="mx-2">|</span>
                    <span>Action, Crime, Thriller</span>
                </div>

                <p class="text-gray-300 mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dicta modi pariatur deserunt sit ratione rem odit, fugit minus quia architecto, ex tempore velit commodi repellendus excepturi rerum. Non expedita tenetur saepe quasi consectetur dignissimos facilis est? Minima, natus perspiciatis odit consequatur vel possimus beatae velit, soluta cum id similique.
                </p>

                <div class="mt-12">
                    <h4 class="text-white font-semibold">Featured Cast</h4>
                    <div class="flex mt-4">
                        <div>
                            <div>Bong Joon-ho</div>
                            <div class="text-sm text-gray-400">Screenplay, Director, Story</div>
                        </div>
                        <div class="ml-8">
                            <div>Michael Nyqvist</div>
                            <div class="text-sm text-gray-400">Screenplay</div>
                        </div>
                    </div>
                </div>

                <div class="mt-12">
                    <button class="bg-orange-500 rounded font-semibold py-2 px-4 text-lg text-gray-900 hover:bg-orange-600 transition ease-in-out duration-150">
                        <i class="fa-regular fa-circle-play mr-1"></i>
                        Play Trailer
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="movie-cast border-b border-gray-800">
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-semibold">Cast</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/actor.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="mt-2 text-lg hover:text-gray:300">Keanu Reeves</a>
                        <div class="text-sm text-gray-400">
                            John Wick
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/actor.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="mt-2 text-lg hover:text-gray:300">Keanu Reeves</a>
                        <div class="text-sm text-gray-400">
                            John Wick
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/actor.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="mt-2 text-lg hover:text-gray:300">Keanu Reeves</a>
                        <div class="text-sm text-gray-400">
                            John Wick
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/actor.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="mt-2 text-lg hover:text-gray:300">Keanu Reeves</a>
                        <div class="text-sm text-gray-400">
                            John Wick
                        </div>
                    </div>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/actor.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                    <div class="mt-2">
                        <a href="" class="mt-2 text-lg hover:text-gray:300">Keanu Reeves</a>
                        <div class="text-sm text-gray-400">
                            John Wick
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="movie-images border-b border-gray-800">
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-semibold">Images</h2>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/movie-image.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/movie-image.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/movie-image.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/movie-image.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                </div>
                <div class="mt-8">
                    <a href="#">
                        <img src="../../assets/images/movie-image.jpg" alt="Poster" class="hover:opacity-75 transition ease-in-out duration-150">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Show'
}
</script>

<style scoped></style>