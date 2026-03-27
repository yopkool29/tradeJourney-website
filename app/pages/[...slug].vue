<script setup lang="ts">
import { withLeadingSlash } from 'ufo'

const route = useRoute()

const slug = computed(() => 
    Array.isArray(route.params.slug) 
        ? withLeadingSlash(String(route.params.slug.join('/'))) 
        : withLeadingSlash(String(route.params.slug))
)

const { data: page } = await useAsyncData('page-' + slug.value, async () => {
    return await queryCollection('content').path(slug.value).first()
})
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContentRenderer v-if="page" :value="page" class="prose prose-lg max-w-none" />
        <div v-else class="text-center py-20">
            <h1 class="text-4xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
            <p class="text-gray-600 mb-8">La page que vous recherchez n'existe pas.</p>
            <NuxtLink to="/" class="text-indigo-600 hover:text-indigo-700 font-semibold">
                Retour à l'accueil
            </NuxtLink>
        </div>
    </div>
</template>

<style>
/* Styles pour le contenu Markdown */
.prose {
    color: #374151;
}

.prose h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    color: #111827;
}

.prose h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #1f2937;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.5rem;
}

.prose h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #374151;
}

.prose p {
    margin-bottom: 1rem;
    line-height: 1.75;
}

.prose a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: 500;
}

.prose a:hover {
    color: #4338ca;
    text-decoration: underline;
}

.prose code {
    background: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875em;
    color: #dc2626;
}

.prose pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}

.prose pre code {
    background: transparent;
    color: inherit;
    padding: 0;
}

.prose ul,
.prose ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
}

.prose li {
    margin-bottom: 0.5rem;
}

.prose blockquote {
    border-left: 4px solid #4f46e5;
    padding-left: 1rem;
    font-style: italic;
    color: #6b7280;
    margin: 1.5rem 0;
}

.prose table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
}

.prose th,
.prose td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: left;
}

.prose th {
    background: #f9fafb;
    font-weight: 600;
}

.prose img {
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    margin: 1.5rem 0;
}
</style>
