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
<style>
.items>li>a{
    color: var(--fontColor);
    text-decoration: none;
}
</style>