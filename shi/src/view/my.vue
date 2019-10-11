<template>
    <div class="my">
         <header class="header">

        </header>
        <section class="section">

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
.my{
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
</style>