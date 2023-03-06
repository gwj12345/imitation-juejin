<template>
    <div>
        <ul class="nav-list clearfix">
          <li class="widen"><a href="javascript:;">{{name}}</a></li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"Widen",
    props:['name']
    
}

</script>
<style>
.widen {
    width: 50px !important;
}
/* .widen:last-child{
    position:absolute;
    right:0
    这里不是最后一个元素，由于全是独立的组件
} */

</style>