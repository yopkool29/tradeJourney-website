<template>
    <div>
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-5xl font-bold mb-6">
                            Journal de Trading <span class="text-purple-200">Professionnel</span>
                        </h1>
                        <p class="text-xl mb-8 text-indigo-100">
                            Analysez vos performances, identifiez vos forces et améliorez votre stratégie de trading
                            avec TradeJourney
                        </p>
                        <div class="flex gap-4">
                            <NuxtLink to="/installation"
                                class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg">
                                Commencer maintenant
                            </NuxtLink>
                            <NuxtLink to="/documentation"
                                class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                                Documentation
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="hidden md:block">
                        <div class="bg-white/10 backdrop-blur rounded-2xl p-8 shadow-2xl">
                            <div class="bg-gradient-to-br from-purple-400/20 to-indigo-400/20 h-64 rounded-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">Fonctionnalités principales</h2>

                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="feature in features" :key="feature.title"
                        class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                        <div class="text-4xl mb-4">{{ feature.icon }}</div>
                        <h3 class="text-xl font-bold mb-3 text-gray-900">{{ feature.title }}</h3>
                        <p class="text-gray-600">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 text-center">
                    <div v-for="stat in stats" :key="stat.label">
                        <div class="text-4xl font-bold text-indigo-600 mb-2">{{ stat.value }}</div>
                        <div class="text-gray-600">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tech Stack Section -->
        <section class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">Technologies modernes</h2>

                <div class="grid grid-cols-2 md:grid-cols-5 gap-6">
                    <div v-for="tech in techStack" :key="tech.name"
                        class="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition">
                        <div class="font-bold text-indigo-600 mb-1">{{ tech.name }}</div>
                        <div class="text-sm text-gray-500">{{ tech.desc }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl font-bold mb-4">Prêt à améliorer votre trading ?</h2>
                <p class="text-xl mb-8 text-indigo-100">Commencez à analyser vos performances dès aujourd'hui</p>
                <NuxtLink to="/installation"
                    class="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition shadow-lg text-lg">
                    Installer TradeJourney
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const features = [
    {
        icon: '📈',
        title: 'Analyse Avancée',
        description: 'Métriques professionnelles : Sharpe Ratio, Profit Factor, Recovery Factor, Win Rate et plus encore.'
    },
    {
        icon: '📅',
        title: 'Calendrier de Trading',
        description: 'Suivez votre activité jour par jour. Identifiez vos meilleurs patterns et périodes de trading.'
    },
    {
        icon: '📥',
        title: 'Import Automatique',
        description: 'Support MT5, NinjaTrader, Quantower et CSV personnalisé. Import en un clic.'
    },
    {
        icon: '🎯',
        title: 'Gestion des Tags',
        description: 'Organisez vos trades par stratégie, setup ou critère personnalisé. Analysez par tag.'
    },
    {
        icon: '💰',
        title: 'Multi-Comptes',
        description: 'Gérez plusieurs comptes simultanément. Vue consolidée ou par compte.'
    },
    {
        icon: '🔒',
        title: 'Auto-hébergé',
        description: 'Vos données restent chez vous. Déployez avec Docker en quelques minutes.'
    }
]

const stats = [
    { value: '100%', label: 'Open Source' },
    { value: '0€', label: 'Gratuit' },
    { value: '∞', label: 'Trades illimités' },
    { value: '🔐', label: 'Données privées' }
]

const techStack = [
    { name: 'Nuxt 3', desc: 'Framework Vue.js' },
    { name: 'TypeScript', desc: 'Type-safe' },
    { name: 'SQLite', desc: 'Base de données' },
    { name: 'Chart.js', desc: 'Visualisations' },
    { name: 'Docker', desc: 'Déploiement' }
]
</script>
