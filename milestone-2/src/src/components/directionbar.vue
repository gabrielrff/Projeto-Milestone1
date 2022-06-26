<template>
    <div id="directionBar">
        <div id="directions">
            <span class="directionBarText curentPage">Confirmar pedido<span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Endereço de entrega <span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Dados do comprador <span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Informações do pagamento <span class="arrow"></span></span>
            <hr id="line">   
        </div>
    </div> 

 

    
    
</template>


<script>
    export default{
        name:"directionbar"

    }

</script>


<style scoped>
    #directionBar{
    display: flex;
    
    
}

#directions{
    position: relative;
    margin: auto;
    margin-top: 1%;
}

.directionBarText{
    font-size: large;
    opacity: 50%;
}

.curentPage{
    opacity: 100% !important;
}


.arrow{
    font-size:large;
    margin-left: 5px;
    margin-right: 5px;
}


#line{
    width: 100%;
    position: relative;
    margin: auto;
}
</style>
    
