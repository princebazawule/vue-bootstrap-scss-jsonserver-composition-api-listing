<template>
  <!-- <p>{{ id }}</p> -->
  <div v-if="error">{{ error }}</div>
  <div v-else-if="record">
    <h1>{{ record.title }}</h1>
    <h4>{{ record.artist }}</h4>
  </div>
  <div v-else>Grabbing Record Data...</div>
</template>


<script>
import getRecord from "../composables/getRecord"

export default {
  props: ["id"],

  setup(props) {
    //   console.log(props.id)

    const { record, error, load } = getRecord(props.id)
    load()

    return { record, error }
  },
}
</script>
