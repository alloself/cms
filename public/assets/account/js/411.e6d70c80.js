"use strict";(self["webpackChunkaccount"]=self["webpackChunkaccount"]||[]).push([[411],{8411:function(e,r,a){a.r(r),a.d(r,{default:function(){return m}});var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("main",{staticClass:"flex flex-col grid-rows-1 tracking-wider"},[a("app-header"),a("div",{staticClass:"flex container mx-auto px-4 h-full"},[a("div",{staticClass:"flex flex-col w-full mt-10"},[a("h1",{staticClass:"mb-4 text-2xl font-bold"},[e._v("Регистрация")]),a("form",{staticClass:"md:w-1/2",on:{submit:function(r){return r.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"mb-6"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{name:"email",required:"",type:"email",placeholder:"Почта"},domProps:{value:e.form.email},on:{input:function(r){r.target.composing||e.$set(e.form,"email",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.last_name,expression:"form.last_name"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{required:"",name:"surname",type:"text",placeholder:"Фамилия"},domProps:{value:e.form.last_name},on:{input:function(r){r.target.composing||e.$set(e.form,"last_name",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.first_name,expression:"form.first_name"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{required:"",name:"first_name",type:"text",placeholder:"Имя"},domProps:{value:e.form.first_name},on:{input:function(r){r.target.composing||e.$set(e.form,"first_name",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.middle_name,expression:"form.middle_name"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{required:"",name:"middle_name",type:"text",placeholder:"Отчество"},domProps:{value:e.form.middle_name},on:{input:function(r){r.target.composing||e.$set(e.form,"middle_name",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{required:"",name:"password",type:"password",placeholder:"Пароль"},domProps:{value:e.form.password},on:{input:function(r){r.target.composing||e.$set(e.form,"password",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{required:"",name:"confrimPassword",type:"password",placeholder:"Подтвердите пароль"},domProps:{value:e.form.password_confirmation},on:{input:function(r){r.target.composing||e.$set(e.form,"password_confirmation",r.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.referal_code,expression:"form.referal_code"}],staticClass:"mb-4 outline-none w-full text-black py-3 px-5 border-2 border-secondary-10 dark:border-secondary rounded-full bg-white dark:bg-block-20 dark:text-white placeholder-main dark:placeholder-white",attrs:{name:"referal_code",type:"password",placeholder:"Реферальный код"},domProps:{value:e.form.referal_code},on:{input:function(r){r.target.composing||e.$set(e.form,"referal_code",r.target.value)}}})]),e._m(0)])])])],1)},o=[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"flex"},[a("button",{staticClass:"outline-none px-6 py-2 rounded-34px bg-brand hover:bg-brand-10 text-white text-18px",attrs:{type:"submit"}},[e._v(" Зарегистрироваться ")])])}],l=a(629),d={data:()=>({form:{}}),methods:{...(0,l.nv)("auth",["createUser"]),async handleSubmit(){try{await this.createUser(this.form),this.$router.push({name:"Wallet"})}catch(e){console.log(e)}}}},n=d,s=a(1001),i=(0,s.Z)(n,t,o,!1,null,"87c70d46",null),m=i.exports}}]);
//# sourceMappingURL=411.e6d70c80.js.map