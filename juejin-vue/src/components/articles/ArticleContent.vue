<template>

    <div class="container-inside-article">
        <div>
            <ArticleBody/>
        </div>
    </div>

</template>

<script>
import ArticleBody from "@/components/articles/ArticleBody.vue"
export default {
  name: "ArticleContent",
  components: {ArticleBody },
};

</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.container .container-inside {
    margin-top: 16px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
}
.container-inside .container-inside-article {
    width: 80%;
    background: white;
    border-radius: 2px;
    padding: 24px;
}
.container-inside-article-info {
        display: flex;
        flex-direction: column;
}
.article {
    display: flex;
    justify-content: flex-start;
}
.author {
    display: flex;
    justify-content: left;
}
.author .author-left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.avatar .avatar-img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
}
.author-left    span {
    display: block;
}
.author-name {
    color: #515767;
    font-size: 16px;
    margin-left: 10px;
}
.create-time {
    color: #8A919F;
    font-size: 14px;
    margin-top: 7px;
    margin-left: 10px;
}


</style>