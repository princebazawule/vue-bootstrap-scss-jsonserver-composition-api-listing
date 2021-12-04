<template>
    <div v-if="record" class="card shadow-lg h-100">
      <div class="bg-light card-img-top">
        <img :src="makeImagePath(record)" alt="" class="img-fluid p-5" />
      </div>

      <div class="card-body d-flex flex-column">
        <router-link :to="{ name: 'RecordDetails', params: { id: record.id } }" class="text-decoration-none">
          <h2 class="text-color-gray-hover fw-light py-2 px-4">
            {{ record.title }} - ({{ rating }})
          </h2>

          <div class="card-text text-muted fw-light fs-5 py-2 lh-sm">
            <p>
              <span class="fw-bold">Artist:</span>
              {{ record.details.artist }}
            </p>
            <p>
              <span class="fw-bold">Genre:</span>
              {{ record.details.genre }}
            </p>
            <p>
              <span class="fw-bold">Released:</span>
              {{ record.details.released }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  <div v-else class="display-6">Loading Your Records...</div>
</template>

<script>
import { computed } from "@vue/reactivity"
import RecordDetails from "./RecordDetails.vue"
import { imagePath } from "@/mixins/imagePath.js"

export default {
  components: { RecordDetails },
  props: ["record"],
  mixins: [imagePath],

  setup(props) {
    // console.log(props.record)

    // simply testing the computed
    const rating = computed(() => {
      return props.record.details.style.substring(1, 3)
    })

    return { rating }
  },
}
</script>
