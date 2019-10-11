<template>
    <div class="footer">
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/my" tag="span">我的</router-link>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
.footer{
    width: 100%;
    height: 50px;
    display: flex;
}
.footer>span{
    flex: 1;
    text-align: center;
    line-height: 50px;
}
</style>