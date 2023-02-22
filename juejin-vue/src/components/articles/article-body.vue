<template>
    <div class="article">
    <div class="article-body">
        <div class="container-inside-article-info">
                    <div class="title">
                        <h2>最近很多人都在说 “前端已死”，讲讲我的看法</h2>
                    </div>
                    <div class="author">
                        <div class="author-left">
                            <div class="avatar"><img class="avatar-img" src="../../assets/images/3.jpg"></div>
                            <div><span class="author-name">LeafCCC</span><span class="create-time">一天前</span></div>
                        </div>
                        <div class="action">
                            <button class="action"
                                aria-disabled="false" type="button">
                                <span class="attention">+关注</span>
                            </button>
                        </div>
                    </div>
                    </div>
        <div class="v-md-editor-preview">
            <div class="markdown-body">
                <h3>现状</h3>
                <h4>我记得去年脉脉的论调还都是 客户端已死，前后端还都是一片祥和，有秀工资的，有咨询客户端转前端的，怎么最近打开脉脉一看，风向变了？
                随便刷几下，出来的信息都是 前端已死，这种悲观信息，还有失业找不到工作的。</h4>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "ArticleBody",

};
</script>

<style>
.article {
  display: flex;
  justify-content: flex-start;
}

.article .article-menu {
    position: sticky;
    top: 20px;
    width: 20%;
    height: 30rem;
    display:flex;
    flex-direction: column;
}
.article-menu .menu-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
}
.article-menu .menu-title p{
        font-size: 20px;
        font-weight: bold;
}
.article-menu .menu-body {
    overflow-y: scroll;
    overflow-x: hidden;
}

.article-body {
    height: 100%;
    padding: 0 30px;
    margin-right: 100px;
    background-color: white;
    overflow: hidden;
}
::-webkit-scrollbar{
  width:6px;
  height:16px;
}
/*定义滚动条轨道内阴影+圆角*/

::-webkit-scrollbar-track{
  border-radius:10px;
}
/*定义滑块内阴影+圆角*/
::-webkit-scrollbar-thumb{
  border-radius:5px;
  -webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);
  box-shadow: inset;
  background-color: #8A919F;
}
.markdown-body{
   width: auto;
}
.action{
    color:#409eff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    border:none;
    margin-left: 240px;
}

.attention{
    transition: .1s;
    border-radius:4px;
    border:1px solid #a0cfff;
    padding:8px 15px;
    outline: none;
    background-color: #ecf5ff;
    cursor: pointer;

}
.attention:hover{
    background-color: #409eff;
    color:white;
}
</style>

