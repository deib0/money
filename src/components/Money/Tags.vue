<template>
  <div class="tags">
    <ul class="current">
      <li
        v-for="u in tagsOfType"
        :key="u.tagName"
        @click="toggle(u.tagName)"
        :class="selectedTags.indexOf(u.tagName) >= 0 ? 'selected' : ''"
      >
        <div class="icon">
          <Iconfont :name="u.iconName" class="iconfont" />
        </div>
        <p class="tagname">{{ u.tagName }}</p>
      </li>
      <li>
        <router-link @click="createTag" class="new" :to="`/labels/editLabel/0`">
          <div class="icon">
            <Iconfont name="add" class="iconfont" />
          </div>
          <p class="tagname">新增标签</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() tags: Tag[] | undefined;
  @Prop() type: string | undefined;;
  selectedTags: string[] = [];
  get tagsOfType(){
    return (this.tags!).filter(item=>item.type===this.type)
  }
  createTag() {
    const tagName = prompt("请输入标签名");
    if (tagName === "") {
      return;
    }
    this.$emit("update:newTag", tagName);
  }
  toggle(tagName: string) {
    let index = this.selectedTags.indexOf(tagName);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tagName);
    }
    this.$emit("update:selectedTag", this.selectedTags);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  flex-grow: 1;
  > .current {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 70px;
      width: 20%;
      margin-top: 4px;
      overflow: hidden;
      .icon {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #f4f4f4;
        .iconfont {
          width: 30px;
          height: 30px;
        }
      }
        .tagname {
        text-align: center;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 700;
        color: #999999;
      }
      .new {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        background: #f4f4f4;
      }
      &.selected .icon {
        background: #a4d6c8;
      }
      &.selected .tagname {
        color: #000000;
      }
    }
  }
}
</style>