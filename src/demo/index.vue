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
                let url = 'http://api.36wu.com/Weather/GetWeather?district=%E5%8C%97%E4%BA%AC&authkey=7dce6cdbe90c461f8dc807c8399640c5';
                restFullLoader.requestGET(url)
                .then((res) => {
                    console.log(res);
                });
                // $.ajax({
                //     url: url,
                //     type: 'get',
                //     dataType: 'json'
                // })
                // .done(function (res) {
                //     console.log('success');
                // })
                // .fail(function (res) {
                //     console.log(res);
                // })
                // .always(function (res) {
                //     console.log(res);
                // });
            }
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
