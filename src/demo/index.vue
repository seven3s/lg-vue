<template>
    <div id="demo">
        <input placeholder="请输入下试试" v-model="val">
        <p>{{val}}</p> 
        <button @click="testAjax">测试ajax</button>
    </div>
</template>

<script>
    import restFullLoader from 'src/common/loader.js';
    // import $ from 'jquery';
    export default {
        data: function () {
            return {
                val: ''
            };
        },
        mounted: function () {},
        methods: {
            testAjax: function () {
                let url = '/a/a';
                restFullLoader.requestGET(url)
                .then((res) => {
                    console.log(res);
                });
            }
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
