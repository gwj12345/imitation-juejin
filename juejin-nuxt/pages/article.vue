<template>
  <div>
    <Layout></Layout>
    <div class="content_box">
            <div
            class="row index"
            :style="{
              position: 'relative',
              display:flex,
              height:'1000px',
              overflow:hidden
            }">
                <div class="container-inside-leftBar col-md-1 col-lg-1">
                    <ArticleLeftbar/>
                </div>
                <div class="article-content col-lg-8 col-md-7 col-sm-12 col-xs-12">
                    <ArticleContent/>
                </div>
                <div class="col-md-2 col-lg-2">
                    <div class="article-catalog">
                        <Rightbar/>
                    </div>
                </div>
            </div>
    </div>
  </div>
</template>
<script>
    import Layout from "@/layouts/index.vue"
    import ArticleContent from "@/components/articles/ArticleContent.vue"
    import ArticleLeftbar from "@/components/articles/ArticleLeftbar.vue"
    import Rightbar from "@/components/articles/rightbars/RightBar.vue"
    export default {
        name: "Article",
        components: {Layout,ArticleContent,ArticleLeftbar,Rightbar  },
        head() {
        return {
            title:  '最近很多人都在说 “前端已死”，讲讲我的看法',
            meta: [{
                    hid: 'description',
                    name: 'description',
                    content: '最近很多人都在说 “前端已死”，讲讲我的看法'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: '掘金,稀土,前端'
                },
            ]
        }
    },
};
</script>

<style>
.container-inside{
    position: relative;
}
.article-content{
    height: 1000px;
    margin: 10px;

}
.article-catalog{
    margin:10px;
    left: 20px;

    max-width:100%;
}


</style>

