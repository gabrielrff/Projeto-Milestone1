<template>



    <img src="../assets/imagens/Padaria-moderna-Destaque.jpg" alt="Padaria-moderna-Destaque" id="padariaModerna">
    <h1 id="titleCard">Cardápio</h1>
    <hr class="lines">


    <div id="cart">        
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">MEU CARRINHO</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="cartProducts" v-for="productCart in cart" :key="productCart.id">
                                <img :src="productCart.image" class="imgProductsCart">
                                <div>
                                    <span class="titleProductsCart">{{productCart.name}}</span><br>
                                    <p><span class="desciptionProductsCart"><!--Estoque:{{productCart.storage}}--></span><br></p>
                                    <span class="priceProductsCart">R${{productCart.price}}</span>
                                </div>
                                <div class="quantityDiv">
                                    <button @click.prevent="operations(productCart.price,'sub',productCart.count)" @click =" productCart.count = subCount(productCart.count)">-</button>
                                    <span class="quantityClass">{{productCart.count}}</span>
                                    <button  @click.prevent="operations(productCart.price,'sum')" @click="productCart.count++" >+</button>
                                    <div class="closeBtnDiv">
                                        <button @click.prevent="removeCart(productCart)" type="button" class="btn-close" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="modal-footer">
                            Subtotal:<span id="subTotalCart">R$ {{subTotal}},00</span>
                        </div>
                        <div class="modal-footer">
                            <router-link to="/confirmar" type="button" class="btn btn-primary"  >Finalizar compra</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    <!--Área de produtos-->

       <!--Pães--> 
        <h2 class="subtitleCard">Pães</h2>

        <div v-for="product in products" :key="product">
            <div class="productsLine" v-if="product.category == 'pao'"><!--Linha 1-->
                <a          
                            @click.prevent="addCart(product)"
                            href="#" 
                            @click="operations(product.price,'sum')" 
                            
                            class="blockProducts" 
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop">
                    <img :src="product.image" alt="" class="imgProducts" />
                    <div>
                        <span class="titleProducts">{{product.name}}</span><br>
                        <p><span class="desciptionProducts">{{product.description}} </span><br></p>                        
                        <span class="priceProducts">{{"R$"+product.price}}</span>
                    </div>
                </a>
            </div>
        </div>


        <!--Pães de queijo--> 
        <h2 class="subtitleCard">Salgados</h2>

        <div v-for="product in products" :key="product">
            <div class="productsLine" v-if="product.category == 'salgado'"><!--Linha 1-->
                <a          
                            @click.prevent="addCart(product)"
                            href="#" 
                            @click="operations(product.price,'sum')" 
                            
                            class="blockProducts" 
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop">
                    <img :src="product.image" alt="" class="imgProducts" />
                    <div>
                        <span class="titleProducts">{{product.name}}</span><br>
                        <p><span class="desciptionProducts">{{product.description}} </span><br></p>
                        <span class="priceProducts">{{"R$"+product.price+",00"}}</span>
                    </div>
                </a>
            </div>
        </div>


        <!--Doces--> 
        <h2 class="subtitleCard">Doces</h2>

        <div v-for="product in products" :key="product">
            <div class="productsLine" v-if="product.category == 'doce'"><!--Linha 1-->
                <a          
                            @click.prevent="addCart(product)"
                            href="#" 
                            @click="operations(product.price,'sum')" 
                            
                            class="blockProducts" 
                            data-bs-toggle="modal" 
                            data-bs-target="#staticBackdrop">
                    <img :src="product.image" alt="" class="imgProducts" />
                    <div>
                        <span class="titleProducts">{{product.name}}</span><br>
                        <p><span class="desciptionProducts">{{product.description}} </span><br></p>
                        <span class="priceProducts">{{"R$"+product.price}}</span>
                    </div>
                </a>
            </div>
        </div>



        








</template>




<script>

    export default{
        data() {
        return {
            products:[
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_Franc%C3%AAs_(01_unid)_637257642876936598.jpg",
                    name:"Pão francês",
                    category:"pao",
                    description:"1 unidade. Peso aproximado: 50g.",
                    price:"1",
                    count:1,

                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_de_Quinoa_com_Castanha_do_Par%C3%A1_(01_unid)_637302487227612269.jpg",
                    name:"Pão De forma",
                    category:"pao",
                    description:"Pao de forma fatiado. Peso aproximado: 400g.",
                    price:"12.0",
                    count:1,

                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_D%E2%80%99%C3%81gua_(01_unid)_637301111444074882.jpg",
                    name:"Pão D'Água",
                    category:"pao",
                    description:"1 unidade. Peso aproximado: 50g.",
                    price:"2.0",
                    count:1,

                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Baguete_Tradi%C3%A7%C3%A3o_Francesa_(01_unid)_637301102492259111.jpg",
                    name:"Baguete",
                    category:"pao",
                    description:"Pão de longa fermentação. Farinha orgânica. Peso aproximado 280g.",
                    price:"14.0",
                    count:1,
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_Italiano_(01_unid)_637301105531633030.jpg",
                    name:"Pão italiano",
                    category:"pao",
                    description:"Pão italiano tradicional. Peso aproximado: 280g. ",
                    price:"13.0",
                    count:1,
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/P%C3%A3o_de_Queijo_Tradicional_(1_unid)_637257634276512470.jpg",
                    name:"Pão de queijo",
                    category:"salgado",
                    description:"Pão de queijo tradicional. Peso aproximado: 90g.",
                    price:"5.0",
                    count:1,
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Coxinha_(1_unid)_637260829410994126.jpg",
                    name:"Coxinha",
                    category:"salgado",
                    description:"Coxinha tradicional artesanal com recheio de frango. Peso aproximado: 160g",
                    price:"8.0",
                    count:1,
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Pastel_Frito_de_Feira_637256620490917744.jpg",
                    name:"Pastel frito",
                    category:"salgado",
                    description:"Pastel frito na hora",
                    price:"8.0",
                    count:1,
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Sonho_Assado_recheado_637302584692925115.jpg",
                    name:"Sonho assado recheado",
                    category:"doce",
                    description:"Sonho tradicional assado recheado.(Creme/Nata/Doce de Leite/Goiabada/Brigadeiro/Nata com Morango)",
                    price:"5.0",
                    count:1
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Bolo_de_Cenoura_Cobertura_Chocolate__637294002537304259.jpg",
                    name:"Bolo de cenoura",
                    category:"doce",
                    description:"Bolo de cenoura com cobertura de doce de leite de chocolate. Peso do pedaço: aproximadamente 400g. ",
                    price:"30.0",
                    count:1
                },
                {
                    image:"https://content.epadoca.com/images/padaria/padaria-karoa/Torta_de_Lim%C3%A3o_(Fatia)_637293983452490431.jpg",
                    name:"Torta de limão",
                    category:"doce",
                    description:"Massa à Base de Biscoito com Recheio de Mousse de Limão",
                    price:"10.0",
                    count:1
                },
                

                

                

            ],
            
            cart:[],

            subTotal:0,
        }
    },

    methods: {
        
        inCart(product){
            return this.cart.indexOf(product) == -1
        },

        addCart(product) {
            if(this.inCart(product)){
                this.cart.push(product)
            }
            

        },
        removeCart(product){
            const cartAux = this.cart.filter((prod) =>{
                return product != prod
            } )

            this.cart = cartAux
            this.subTotal -= product.price * product.count 

        },

        operations(price,op,count){

            price = parseFloat(price)
            
            if(op == "sum"){
                this.subTotal += price 
            }
            else{
                if(count > 1)
                    this.subTotal -= price 
            }

        },

        subCount(count){            
            if(count > 1){
                count -= 1
                return count
            }
            return count
        },


    }
    }


    

        

</script>



<style scoped>
    #padariaModerna{width: 60%; 
                display: block;
                margin: 1% auto;}

#titleCard{text-align: center;
            font-size: 100px;}


.lines{width: 50%;
        color: black;
        position: relative;
        margin: auto;}

.subtitleCard{text-align: center;
                font-size: 50px;
                margin-top: 5% ;}


.productsLine{align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        margin: auto;
        margin-bottom: 3%;}


.imgProducts{width: 20%;
            margin-left: 10%;
            margin-right: 10%;
            margin: 5%;
        border-radius: 5px;}



.blockProducts{background-color:  #64c4d2 !important;
            margin-right: 1%;
            margin-left: 1%;
            padding:0%;
            width: 42% !important;
            display: flex;
            border-radius: 10px;
            text-decoration: none;
            color: black;
            transition: 0.5s !important;
        }
.blockProducts:hover{/*box-shadow:5px 5px 5px 5px  #64c4d2 ;*/
        width: 43% !important;
        text-decoration: none !important;

}

.informationProducts{line-height: 300%;}


.titleProducts{font-size: x-large;}


.desciptionProducts{width: fit-content;}

.priceProducts{position: absolute;
bottom: 10%;
}











.imgProductsCart{width: 20%;
        margin-left: 10%;
        margin-right: 10%;
        margin: 5%;
        border-radius: 5px;}



.cartProducts{background-color:  #ffffff ;
        margin-right: 1%;
        margin-left: 1%;
        padding:0%;
        width: 100% !important;
        display: flex;
        color: black;
}



.titleProductsCart{font-size:small;}


.desciptionProductsCart{font-size: smaller;}

.priceProductsCart{
                bottom: 10%;
                font-size: x-large;
}

.quantityDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 20%;
        margin-right: 20%;
}

.closeBtnDiv{
        margin-left: 50%;
}

#subTotalCart{
        color: brown;
}



    
</style>