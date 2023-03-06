<template>
  <div class="list">
    <div class="item-name1">
      <span>Ethan_Zhou</span>

      <span class="item-name2"> 前端·面试·后端</span>
      
      <span class="item-name2">  4天前</span>
    </div>
    <div class="item-box">
      <div class="item-title">最近很多人都在说 “前端已死”，讲讲我的看法</div>
      <div class="item-content">  
      </div>
    </div>
    <img
      class="picture"
      src="@/assets/images/3.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Item",
};
</script>
<style>
.list {
  position: relative;
}

.list .item-name1 {
    margin-left: 20px;
    padding-top: 10px;
    font-size: 13px;
    color:#8a929c;
}

.list .item-name2 {
    padding-top: 10px;
    font-size: 13px;
    color:#8a929c;
    padding-left:10px;
  }

.item-box {
    margin-left: 20px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-bottom: 10px;
    padding-top: 12px;
  }

.item-title {
    font-weight: 750;
    color: var(--contentColor);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    flex: 1;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.item-content {
    margin-top: 10px;
    font-size: 13px;
    color: #8a929c;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.icons {
    margin-top: 12px;
    color: #8a929c;
}
.icon-number {
    font-size: 13px;
    color: #8a929c;
    margin-left: 3px;
    margin-right: 20px;
}

.picture {
    height: 70px;
    width: 120px;
    right: 10px;
    top: 10px;
    background-color: black;
    position: absolute;
    background-size: cover;
    background-size: contain;
}

.item-divider {
    height: 0px;
    margin: 8px 0 0;

}
@media(max-width:550px) {
  .list .picture{
    display: none;
  }
}
</style>