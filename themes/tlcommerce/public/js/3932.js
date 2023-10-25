"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3932],{7657:(e,t,o)=>{o.d(t,{Z:()=>i});var r=o(3645),n=o.n(r)()((function(e){return e[1]}));n.push([e.id,".section_btn[data-v-b803290e]{background-color:var(--button-background-color);border:var(--button-border);border-color:var(--button-border-color);color:var(--button-color)}.section_btn[data-v-b803290e]:hover{background-color:var(--button-hover-bg-color);border-color:var(--button-hover-border-color);color:var(--button-hover-color)}.deals-section[data-v-b803290e]{background-color:var(--section-background-color);background-image:var(--section-background-image);background-position:var(--section-background-image-position);background-repeat:var(--section-background-image-repeat);background-size:var(--section-background-image-size);margin:var(--section-margin)!important;padding:var(--section-padding)!important}",""]);const i=n},3932:(e,t,o)=>{o.r(t),o.d(t,{default:()=>f});var r=o(118),n={key:0,class:"custom-container2"},i={class:"row align-items-center my-3"},s={class:"col-md-6 mb-2 mb-md-0"},a={class:"col-md-6"},c={class:"col-md-12 text-center mt-20"};var l=o(2830),d=o(1911),p=o(901),u=(0,r.defineAsyncComponent)((function(){return o.e(8199).then(o.bind(o,8199))})),b=(0,r.defineAsyncComponent)((function(){return o.e(9249).then(o.bind(o,9249))})),m=o(9669).default;const g={name:"DealSection",components:{Swiper:l.tq,SwiperSlide:l.o5,SingleProduct:u,Countdown:b,sectionPreloader:p.Z},props:{content:{type:String,required:!1},properties:{type:Array,required:!1}},setup:function(){return{modules:[d.pt,d.tl]}},data:function(){return{dealDetails:{},dealProducts:[],success:!1,dataLoading:!0}},computed:{styleObject:function(){return{"--section-background-color":this.properties.bg_color,"--section-background-image":"url(".concat(this.properties.bg_image,")"),"--section-background-image-position":this.properties.background_position,"--section-background-image-size":this.properties.background_size,"--section-background-image-repeat":this.properties.background_repeat,"--section-padding":"".concat(this.properties.padding_top+"px "+this.properties.padding_right+"px "+this.properties.padding_bottom+"px "+this.properties.padding_left+"px"),"--section-margin":"".concat(this.properties.margin_top+"px "+this.properties.margin_right+"px "+this.properties.margin_bottom+"px "+this.properties.margin_left+"px"),"--button-color":this.properties.btn_color,"--button-background-color":this.properties.btn_bg_color,"--button-border":null!=this.properties.btn_border?this.properties.btn_border+"px solid":"0px","--button-border-color":this.properties.btn_border_color,"--button-hover-border-color":this.properties.btn_border_hover_color,"--button-hover-bg-color":this.properties.btn_bg_hover_color,"--button-hover-color":this.properties.btn_hover_color}}},mounted:function(){this.getDealDetails()},methods:{getDealDetails:function(){var e=this;m.post("/api/theme/tlcommerce/v1/deal-details",{id:this.content}).then((function(t){t.data.success&&(e.dealDetails=t.data.dealsDetails,e.dealProducts=t.data.products.data,e.success=!0,e.dataLoading=!1)})).catch((function(t){e.success=!1,e.dataLoading=!1}))}}};var h=o(3379),v=o.n(h),k=o(7657),_={insert:"head",singleton:!1};v()(k.Z,_);k.Z.locals;const f=(0,o(3744).Z)(g,[["render",function(e,t,o,l,d,p){var u=(0,r.resolveComponent)("section-title"),b=(0,r.resolveComponent)("countdown"),m=(0,r.resolveComponent)("single-product"),g=(0,r.resolveComponent)("swiper-slide"),h=(0,r.resolveComponent)("swiper"),v=(0,r.resolveComponent)("router-link");return(0,r.openBlock)(),(0,r.createElementBlock)("section",{class:"pt-15 pb-15 deals-section home-page-section",style:(0,r.normalizeStyle)(p.styleObject)},[d.success&&!d.dataLoading?((0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",s,[(0,r.createVNode)(u,{class:"section-title",title:d.dealDetails.title,titleColor:o.properties.title_color},null,8,["title","titleColor"])]),(0,r.createElementVNode)("div",a,[(0,r.createVNode)(b,{class:"justify-content-md-end",deadline:d.dealDetails.deadline,titleColor:o.properties.title_color},null,8,["deadline","titleColor"])])]),d.dealProducts.length?((0,r.openBlock)(),(0,r.createBlock)(h,{key:0,slidesPerView:6,modules:l.modules,spaceBetween:1,autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0,pagination:{clickable:!0},class:"product-grid-slider theme-slider-dots",breakpoints:{0:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:6}}},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(d.dealProducts,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)(g,{key:"slide-".concat(t)},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(m,{item:e},null,8,["item"])]})),_:2},1024)})),128))]})),_:1},8,["modules"])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",c,[(0,r.createVNode)(v,{class:"btn btn-sm rounded-0 mb-30 section_btn",style:(0,r.normalizeStyle)(p.styleObject),to:"/deals/".concat(d.dealDetails.permalink)},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(null!=o.properties.btn_title?o.properties.btn_title:e.$t("View All")),1)]})),_:1},8,["style","to"])])])):(0,r.createCommentVNode)("",!0)],4)}],["__scopeId","data-v-b803290e"]])},901:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(118),n={class:"custom-container2"},i={class:"row justify-content-between mb-20"},s={class:"row"};const a={name:"SectionPreloader"};const c=(0,o(3744).Z)(a,[["render",function(e,t,o,a,c,l){var d=(0,r.resolveComponent)("skeleton");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",i,[(0,r.createVNode)(d,{class:"w-25",height:"36px"}),(0,r.createVNode)(d,{class:"w-25",height:"31px"})]),(0,r.createElementVNode)("div",s,[(0,r.createVNode)(d,{class:"w-25 mb-20",height:"370px"}),(0,r.createVNode)(d,{class:"w-25 mb-20",height:"370px"}),(0,r.createVNode)(d,{class:"w-25 mb-20",height:"370px"}),(0,r.createVNode)(d,{class:"w-25 mb-20",height:"370px"})])])}]])}}]);