<template>
    <div class="article-menu">
      <div class="menu-title">
        <p>目录</p>
      </div>
      <div class="menu-body">
        <div><a class="menu-item">1.现状</a></div>
        <div><a class="menu-item">2.思考</a></div>
        <div><a class="menu-item">3.总结</a></div>
      </div>
    </div>
</template>

<script>

</script>

<style>
.menu-body .menu-item {
    cursor: pointer;
    color:black
}
.menu-body .menu-item:hover {
    color: #00DDDD;
    font-size: larger;

}
.menu-body .menu-item.active {
    color: #007fff;
}
</style>