<template>
  <div class="home">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-12 col-md-12 mx-auto">
          <h1 class="display-1 text-black">Record Stash!</h1>
          <p class="display-6 text-muted">
            This is your record collection - Grow it.
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <div v-if="error">{{ error }}</div>
        <div v-else-if="records.length">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <RecordList :records="records" /> 
          </div>
        </div>
        <div v-else>Gathering records...</div>
      </div>
    </div>
  </div>
</template>

<script>
import RecordList from "./RecordList.vue"
import getRecords from "../composables/getRecords"
// import { ref } from 'vue'

export default {
  components: { RecordList },
  setup() {
    const { records, error, load } = getRecords()
    
    load()

    return { records, error }



    // const records = ref([])
    // const error = ref(null)

    // const load = async () => {
    //   try {
    //     let data = await fetch('http://localhost:8000/records')
    //     console.log(data)
    //     if(!data.ok) {
    //       throw Error('no datasss available')
    //     }
    //     records.value = await data.json()

    //   } catch (err) {
    //     error.value = err.message
    //     console.log(error.value)
    //   }
    // }
  },
}
</script>
