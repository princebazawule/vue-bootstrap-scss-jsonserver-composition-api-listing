export const imagePath = {
    methods: {
      makeImagePath(record) {
        return require(`../assets/records/${record.images[0]}.jpg`)
      }
    }
  }
  