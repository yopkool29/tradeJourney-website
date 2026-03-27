<template>
    <div class="min-h-screen bg-white">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <NuxtLink to="/" class="flex items-center space-x-2">
                        <span class="text-2xl">📊</span>
                        <span class="text-xl font-bold text-indigo-600">TradeJourney</span>
                    </NuxtLink>

                    <div class="flex items-center space-x-8">
                        <NuxtLink to="/" class="text-gray-700 hover:text-indigo-600 font-medium transition">
                            Accueil
                        </NuxtLink>
                        <NuxtLink to="/documentation"
                            class="text-gray-700 hover:text-indigo-600 font-medium transition">
                            Documentation
                        </NuxtLink>
                        <a href="https://github.com/yourusername/tradeJourney" target="_blank"
                            class="text-gray-700 hover:text-indigo-600 font-medium transition">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12 mt-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div class="flex items-center space-x-2 mb-4">
                            <span class="text-2xl">📊</span>
                            <span class="text-xl font-bold">TradeJourney</span>
                        </div>
                        <p class="text-gray-400">Journal de trading professionnel</p>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Produit</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li>
                                <NuxtLink to="/documentation" class="hover:text-white transition">Documentation
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/installation" class="hover:text-white transition">Installation</NuxtLink>
                            </li>
                            <li><a href="https://github.com/yourusername/tradeJourney"
                                    class="hover:text-white transition">GitHub</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-semibold mb-4">Support</h4>
                        <ul class="space-y-2 text-gray-400">
                            <li><a href="https://github.com/yourusername/tradeJourney/issues"
                                    class="hover:text-white transition">Issues</a></li>
                            <li><a href="mailto:contact@tradejourney.com"
                                    class="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 TradeJourney. Licence MIT.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
.router-link-active {
    color: rgb(79 70 229);
}
</style>
