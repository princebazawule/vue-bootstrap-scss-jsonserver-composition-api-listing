import { ref } from 'vue'

const getRecord = (id) => {
  const record = ref('')
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(`http://localhost:8000/records/${id}`)
      console.log(data)
      if (!data.ok) {
        throw Error("no datassy available")
      }
      record.value = await data.json()
    } catch (err) {
      error.value = err.message
      console.log(error.value)
    }
  }

  return {
      record,
      error,
      load
  }
}

export default getRecord
