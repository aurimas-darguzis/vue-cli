<template>
    <div>
        <app-header></app-header>
        <app-server-status v-for="server in 5"></app-server-status>
    </div>   
</template>

<script>
    import ServerStatus from './ServerStatus.vue';
    import Header from './Header.vue';

    export default {
       components: {
           'app-server-status': ServerStatus,
           'app-header': Header
       }
    }
</script>
