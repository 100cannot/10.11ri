<template>
    <div class="home">
        <header class="header">

        </header>
        <section class="section">
            <div class="log">
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
            </div>
            <div class="log">
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
                <dl>
                    <dt><img src="../../build/logo.png" alt=""></dt>
                    <dd>成单奖励</dd>
                </dl>
            </div>
        </section>
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/footer'
export default {
    props:{

    },
    components:{
        Footer
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
.home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.header{
    width: 100%;
    height: 50px;
}
.section{
    flex: 1;
}
.log{
    width: 100%;
    height: 100px;
    display: flex;
}
.log>dl{
    width: 20%;
    height: 100%;
    margin-left: 4%;
}
.log>dl>dt{
    width: 100%;
    height: 70px;
}
.log>dl>dt>img{
    width: 100%;
    height: 100%;
}
</style>