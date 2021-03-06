import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSweetalert2 from 'vue-sweetalert2';
import VueGoodTable from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css';

Vue.use(VueGoodTable);
Vue.use(VueSweetalert2);
Vue.use(VueRouter)

require('./bootstrap');

window.Vue = require('vue');


Vue.component('item-shop', require('./components/Shop/ItemShopComponent.vue'));
Vue.component('cart-shop', require('./components/Shop/CartShoppingModal.vue'));
Vue.component('item-detail', require('./components/Shop/ItemDetailComponent.vue'));
Vue.component('details-item', require('./components/Shop/ItemDetailComponent.vue'));
Vue.component('user-home', require('./components/UserActions/IndexUserComponent.vue'));
Vue.component('seller-home', require('./components/UserActions/IndexSellerComponent.vue'));
Vue.component('client-home', require('./components/UserActions/IndexClientComponent.vue'));

Vue.component('shop-finish', require('./components/Shop/ShopFinish.vue'));


import ItemDetail from './components/Shop/ItemDetailComponent.vue';
import indexShop from './components/Shop/IndexShopComponent.vue';
import NewItem from './components/UserActions/Products/NewItem.vue';
import AllItems from './components/UserActions/Products/AllItems.vue';
import EditItem from './components/UserActions/Products/EditItem.vue';
import NewClient from './components/UserActions/Clients/NewClient.vue';
import Transactions from './components/UserActions/Sales/Transactions.vue';
import NewSale from './components/UserActions/Sales/NewSale.vue';
import Sales from './components/UserActions/Sales/Sales.vue'; //esteeeeeeeeeeeeeeeeeeeeeeeeeeeeee
import SalesDetail from './components/UserActions/Sales/SalesDetail.vue';
import ControlStock from './components/UserActions/Products/ControlStock.vue';
import StockDetail from './components/UserActions/Products/StockDetail.vue';
import AllClients from './components/UserActions/Clients/AllClients.vue';
import EditClient from './components/UserActions/Clients/EditClient.vue';
import ShowDataClient from './components/UserActions/Clients/ShowDataClient.vue';
import UpdatePass from './components/UserActions/Clients/UpdatePass.vue';



const routes = [
    { name: 'indexShop', path: '/', component: indexShop },
    { name: 'ItemDetail', path: '/item/:id', component: ItemDetail, props: true},
    { name: 'NewItem', path: '/user/new/item', component: NewItem },
    { name: 'AllItems', path: '/user/all/item', component: AllItems },
    { name: 'EditItem', path: '/user/edit/item/:id', component: EditItem, props: true  },
    { name: 'SalesDetail', path: '/user/sales/:id', component: SalesDetail, props: true  },
    { name: 'UpdatePass', path: '/user/updatepass', component: UpdatePass },
    { name: 'NewClient', path: '/user/new/client', component: NewClient },
    { name: 'NewSale', path: '/user/new/sale', component: NewSale },
    { name: 'Sales', path: '/user/sales', component: Sales },
    { name: 'StockDetail', path: '/user/product/detail/:id', component: StockDetail, props: true },
    { name: 'ControlStock', path: '/user/stock', component: ControlStock },
    { name: 'EditClient', path: '/user/edit/:id', component: EditClient, props: true },
    { name: 'ShowDataClient', path: '/client/data/:id', component: ShowDataClient, props: true },
    { name: 'AllClients', path: '/user/clients', component: AllClients },
    { name: 'Transactions', path: '/user/new/transactions', component: Transactions }

];
  
  const router = new VueRouter({
    routes, // short for `routes: routes`
   // mode: 'history'
  })
  
  const app = new Vue({
      el: '#app',
      router
  });
