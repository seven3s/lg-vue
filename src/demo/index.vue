<template>
    <div id="demo">
        <input placeholder="请输入下试试" v-model="val">
        <p>{{val}}</p>        
    </div>
</template>

<script type="text/javascript">
    export default {
        data: function () {
            return {
                val: ''
            };
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
