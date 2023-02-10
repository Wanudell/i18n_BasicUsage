<template>
  <main>
      <h1>{{ $t("home.header") }}</h1>
      <p>{{ $t("home.createdBy", {company: "Son 4 Dakika"}) }}</p>
      <p>{{ $t("home.numVisits", 100)}}</p>
  </main>
</template>

<script>
  import {useI18n} from 'vue-i18n'
  
  export default {
    setup(){
      const {t} = useI18n()
      return {t}
    },
    methods: {
      switchTR() {
        localStorage.setItem("lang","tr");
        this.$root.$emit('forceRerender');
      },
      switchEN() {
        localStorage.setItem("lang","en");
        this.$root.$emit('forceRerender');
      }
    }
  }
</script>