<template>
<div>
    <div id="directionBar">
        <div id="directions">
            <span class="directionBarText curentPage">Confirmar pedido<span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Endereço de entrega <span class="arrow">&rarr;</span></span>
            <span class="directionBarText ">Dados do comprador <span class="arrow">&rarr;</span></span>
            <span class="directionBarText">Informações do pagamento <span class="arrow"></span></span>
            <hr id="line">   
        </div>
    </div> 



    <div>
        
        <div id="pageContent">

            <div id="productsDiv">



            <div class="cardDiv" v-for="product in cart" :key="product.id"  >
                <div class="imgDiv">
                    <img :src="product.image" alt="" class="imgProducts">
                </div>
                <div class="titleDiv">
                    <span class="titleCard">{{product.name}}</span><br>
                </div>
                <div class="lineDiv">
                </div>
                <div class="buttonDiv" >
                    <button>-</button>
                    <span class="quantity">{{product.count}}</span>
                    <button>+</button>
                </div>
            </div>



        </div>

            <div id="mainLine"></div>

            <div  id="sumDiv" >
                <div id="subSumDiv">
                    <span id="money">R$ <span id="value">{{total}} ,00</span></span>
                    <router-link to="/endereco">    
                        <button>Confirmar</button>
                    </router-link>
                </div>
                
            </div>
        </div>
        
        
        
        
    </div>
</div>
</template>


<script>


import directionbar from '../../components/directionbar.vue'

export default {
    components:{
        directionbar
    },
    data() {
        return {
            cart:[
                {
                    name:"Pão de sal",
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_Franc%C3%AAs_(01_unid)_637257642876936598.jpg",
                    count:5,
                    price:0.8,

                },
                {
                    name:"Pão de queijo",
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_de_Queijo_Tradicional_(1_unid)_637257634276512470.jpg",
                    count:7,
                    price:5,

                },
                {
                    name:"Bolo de cenoura",
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Bolo_de_Cenoura_Cobertura_Chocolate__637294002537304259.jpg",
                    count:1,
                    price:11,

                }
            ],
            total:50,
        }

        total:0
        


    },

    methods:{
        sumTotal(){
            
            for (let i = 0;i < this.cart.lenght;i++){
                this.total += this.cart[i].price * this.cart[i].count
            }
               
        }
    },






    


   
}



    

</script>






<style>
/*Direction bar*/
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


#pageContent{
    position: relative;
    margin: auto;
    margin-top: 1%;
    display: flex;
    width: 100%;
}


#content{
    display: flex;
    position: relative;
    width: 100%;
    margin: auto;
}





/*Products*/


#productsDiv{
    scrollbar-width: none;

    width: 100%;
    margin-right: 5%;
    height: 500px;
    

    overflow-y:scroll;
}

.imgProducts{
    width: 50%;
}




.cardDiv{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1%;
    background-color: darkgrey;

}

.titleCard{
    font-size:x-large;
    margin-left: 1%;
}

.lineCard{
    width:20%;
    transform: rotate(90deg);
}

.imgDiv{
    margin-right: 5%;
    
}

.titleDiv{
    width: 40%;
    margin-right: 10%;
}

.lineDiv{
    width: 5%;
    height: 100px;
    border-left:1px solid rgb(112, 112, 112);
    vertical-align: middle;
    margin-right: 5%;

}

.buttonDiv{
    width: 20%;
    margin-right:5%;
}

.quantity{
    font-size: xx-large;
    margin: 15%;
}

/**********************************************************/

/*Main line*/

#mainLine{
    width: 5%;
    height: 400px;
    border-left:1px solid rgb(0, 0, 0);
    vertical-align: middle;
    margin-right: 1%;
    
}


/*Value to pay*/

#sumDiv{
    position:relative;
    width: 40%;
}

#money{
    font-size:50px;
}

#value{
    font-size: 50px;
}

#subSumDiv{
    position: absolute;
    top: 50%;
    width: 100%;
}





</style>