	<template>
    <div ref="container" class="container">
        123s
    </div>
	</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'Echarts',
    props:['option'],
    mounted(){
        const width = document.documentElement.clientWidth;
        (this.$refs.container).style.width=`${width-50}px`;
        (this.$refs.container).style.height=`300px`;
        this.chart=echarts.init(this.$refs.container)
        this.chart.setOption(this.option)
    }
}
</script>
	<style lang="scss" scoped>
    .container{
        border: 1px solid #000;
    }
</style>