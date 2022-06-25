<template>
<Layout> 
   <ol class="tags">
      <li class="tag">
         <span>衣</span>
         <Iconfont name="right"/>
      </li>
   </ol>
       <div class="createTag-wrapper">
      <Button class="createTag">
        新建标签
      </Button>
    </div>
</Layout>
</template>

<script lang="ts">
export default {
   name: 'Labels'
}
</script>

<style lang="scss" scoped>
.tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }

</style>