<template>
    <div class="bracket_container">
        <div class="bracket_innercontainer">
            <div class="bracket_heading">Bracket</div>
            <div class="bracket_content">
                <div class="bracket_wrapper">The brackets will be updated once the registration is closed.</div>
            </div>
        </div>
        <TheCrossPromotion />
    </div>
</template>

<script>
    import TheCrossPromotion from '../default/TheCrossPromotion.vue';
    
    export default {
        name: 'Brackets',
        components: {
            TheCrossPromotion
        },
    }

</script>
<style scoped>
::-webkit-scrollbar {
    width: 3px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #E53935;
    height:200px;
}
.bracket_container {
    padding: 30px 20px 94px 291px;
}
.bracket_innercontainer {
    padding: 0rem 4rem;
}
.bracket_heading {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0em;
    color: #E53935;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 35px;
}
.bracket_content {
    padding: 3rem;
    height: 350px;
    overflow: scroll;
    overflow-x: hidden;
    background: rgba(196, 196, 196, 0.2);
   
}
.bracket_wrapper {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-transform: uppercase;
    color:#000000;
}
@media(min-width: 320px) and (max-width: 767px){
    .bracket_container{
        padding: 0;
    }
    .bracket_innercontainer{
        padding: 0rem 2rem;
    }
}
</style>