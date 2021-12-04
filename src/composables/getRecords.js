import { ref } from 'vue'

const getRecords = () => {
  const records = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch("http://localhost:8000/records")
      console.log(data)
      if (!data.ok) {
        throw Error("no data available")
      }
      records.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {
      records,
      error,
      load
  }
}

export default getRecords
