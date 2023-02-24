<template>
    <div>
    <Information/>
    <ArticleCatalog/>
    <ArticleAds/>
    
    </div>
</template>

<script>
    import ArticleAds from "@/components/articles/rightbars/article-ads.vue"
    import ArticleCatalog from "@/components/articles/rightbars/article-catalog.vue"
    import Information from "@/components/articles/rightbars/information.vue"
    export default {
        name: "Rightbar",
        components: {ArticleCatalog, ArticleAds,Information},
};
</script>

<style>
</style>