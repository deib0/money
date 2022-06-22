<template>
    <div class="nav-wrapper">
    <div class="content">
        <slot></slot>
    </div>
     <Nav/>
</div>
</template>
<script lang="ts">
export default {
    name:'Layout'
}
</script>
<style lang="scss" scoped> 
.nav-wrapper{
    border: 30px solid pink;
    display: flex;
    flex-direction: column;
    justify-content: end;
        height: 100vh;
}
.nav-wrapper .content {
    border: 1px solid #000;
    flex-grow: 1;
    text-align: center;
    overflow: auto;
}
</style>