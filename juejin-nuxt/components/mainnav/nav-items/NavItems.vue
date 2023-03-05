<template>
    <div>
        <ul class="items">
            <li><a href="javascript:;">{{name}}</a></li>
        </ul>
    </div>
</template>

<script>
export default{
    name:"Navitems",
    props:['name']
    
}

</script>
<style scoped>
@import "@/assets/css/main.css";
@import "@/assets/css/index.css";
@import "@/assets/css/bootstrap.css";
.items>li>a{
    color: var(--fontColor);
    text-decoration: none;
}
</style>