	<template>
    <div class="chart-wrapper">
        <h4 ref="title">{{type}}</h4>
    <div ref="container" class="container">
    </div>
    </div>
	</template>
<script>
import * as echarts from 'echarts';
export default {
    name:'Echarts',
    props:['option','type'],
    mounted(){
        this.chart=echarts.init(this.$refs.container)
        this.chart.setOption(this.option)
    }
}
</script>
	<style lang="scss" scoped>
    .chart-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90vw;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 1px 1px 1px rgba($color: #000000, $alpha: .3);
        h4 {
            padding: 0 10px;
            width: 100%;
        }
            .container{
                width: 100%;
                height: 200px;
    }
    }

</style>