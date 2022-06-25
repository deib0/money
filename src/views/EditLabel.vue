<template>
    <div>
         <Iconfont name="left"/>
         <TextInput inputTitle="标签" placeHolder="请输入新的标签" />
    </div>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from 'vue-property-decorator'
import TextInput from '../components/Money/TextInput.vue'
@Component({components:{TextInput}})
export default class Labels extends Vue {
created(){
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags =tagListModel.data
    const tag = tags.filter(item=>item.tagId===id)[0]
    if(tag){console.log(tag);
    }else{
        this.$router.replace('/404')
    }
    }
}
</script>
<style lang="scss" scoped>

</style>