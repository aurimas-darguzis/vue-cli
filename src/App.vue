<template>
  <h1>Server Status: {{ status }}</h1>
  <hr>
</template>

<script>
  export default {
    data: function() {
      return {
        status: 'Critical'
      }
    } 
  }
</script>