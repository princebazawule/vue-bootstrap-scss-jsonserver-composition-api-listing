<template>
      <div 
        v-for="record in records" 
        :key="record.id"
        class="col mb-3 mb-lg-5"
      >
          <SingleRecord :record="record" />
      </div>
</template>


<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SingleRecord from './SingleRecord.vue'


export default {
  components: { SingleRecord },
  props: ['records'],

  setup(props) {
    // console.log(props.records)
    onMounted(() => console.log("i'm ready"))
    onUpdated(() => console.log("we're up & running"))
    onUnmounted(() => console.log("that's it folks"))
  }
}
</script>
