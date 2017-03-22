<template>
    <div id="demo">
        <input placeholder="请输入下试试" v-model="val">
        <p>{{val}}</p> 
        <button @click="testAjax">测试ajax</button>
        <p v-if="testData && testData.msg">{{testData.msg}}</p>
    </div>
</template>

<script>
    import restFullLoader from 'src/common/loader.js';
    // import $ from 'jquery';
    export default {
        data: function () {
            return {
                val: '',
                testData: {}
            };
        },
        mounted: function () {},
        methods: {
            testAjax: function () {
                var that = this;
                let url = '/test';
                restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        that.testData = res.data;
                    }
                });
            }
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
