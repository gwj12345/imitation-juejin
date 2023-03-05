<template>
    <div>
    <Information/>
    <ArticleCatalog/>
    <ArticleAds/>
    
    </div>
</template>

<script>
    import ArticleAds from "@/components/articles/rightbars/ArticleAds.vue"
    import ArticleCatalog from "@/components/articles/rightbars/ArticleCatalog.vue"
    import Information from "@/components/articles/rightbars/MyInformation.vue"
    export default {
        name: "Rightbar",
        components: {ArticleCatalog, ArticleAds,Information},
};
</script>

<style>
</style>