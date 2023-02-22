<template>
    <div>
        <ul class="nav-list clearfix">
            <li class="widen right"><a href="javascript:;">{{name}}</a></li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"Rightitem",
    props:['name']  ,
}

</script>
<style>
.widen {
    width: 50px !important;
}
.nav-list .right{
    position: absolute;
    right:240px;
}
@media (max-width: 768px){
.nav-list .right{
    display: none;
}
}
@media (min-width: 768px){
.nav-list .right{
    position: absolute;
    right:90px;
}
}
@media (min-width: 992px){
    .nav-list .right{
    position: absolute;
    right:150px;
}
}
@media (min-width:1200px){
    .nav-list .right{
    position: absolute;
    right:240px;
}
}
@media (min-width:1400px){
    .nav-list .right{
    position: absolute;
    right:360px;
}
}

</style>