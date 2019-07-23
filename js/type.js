
        //化妝品 商品物件
        Vue.component('skincare-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //化妝品 熱門標籤
                Vue.component('makeuptype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            //名品 商品物件
            Vue.component('international-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //名品 熱門標籤
                Vue.component('internationaltype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })

            //服裝 商品物件
            Vue.component('accessories-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //服裝 熱門標籤
                Vue.component('accessoriestype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            //男裝 商品物件
            Vue.component('mensport-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //男裝 熱門標籤
                Vue.component('mensporttype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })

            //童裝 商品物件
            Vue.component('kidsbaby-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //童裝 熱門標籤
                Vue.component('kidsbabytype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            //內睡衣 商品物件
            Vue.component('underwear-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //內睡衣 熱門標籤
                Vue.component('underweartype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            //家用 商品物件
            Vue.component('homeneeds-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //家用 熱門標籤
                Vue.component('homeneedstype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            
            //食品 商品物件
            Vue.component('food-item', {
            props: ['todo'],
            template: '<div class="block"><a v-bind:href="todo.link"><img class="_img" v-bind:src="todo.img" border="0" alt=""><div class="Ceud">{{ todo.text }}</div><span class="Price_all">{{ todo.pricetext }} $<b class="Price">{{ todo.price }}</b></span></a></div>'
            })
                //食品 熱門標籤
                Vue.component('foodtype-item', {
                props: ['todo'],
                template: '<div class="logo-block"><div class="logo-line"></div><a v-bind:href="todo.link" v-bind:title="todo.titletext">{{ todo.text }}</a> </div>'
                })
            //PC端banner
            Vue.component('banner-item', {
            props: ['todo'],
            template: '<div class="item"><a v-bind:href="todo.link"><img v-bind:src="todo.img"><div class="font"><div class="title">{{ todo.title }}</div><div class="subtitle">{{ todo.text }}<br> {{ todo.textbr }}</div><a v-bind:href="todo.link" class="shop">SHOP NOW</a></div></a></div>'
            })
            //手機板banner
            Vue.component('banner-item-m', {
            props: ['todo'],
            template: '<div class="item" ><a v-bind:href="todo.link"><img v-bind:src="todo.img"><div class="phone-font"><span>{{ todo.text }} <br> {{ todo.textbr }}</span></div></a></div>'
            })
        
        