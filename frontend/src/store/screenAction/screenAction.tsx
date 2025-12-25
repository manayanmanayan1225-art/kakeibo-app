let loadingCount = 0

export const screenAction = {
  app: {
    loading: async function <T>(fn: () => Promise<T>): Promise<T> {
      try {
        if (loadingCount === 0) {
          console.log('loading start')
          // TODO: isLoading = true
        }
        loadingCount++

        return await fn()
      } finally {
        loadingCount--
        if (loadingCount === 0) {
          console.log('loading end')
          // TODO: isLoading = false
        }
      }
    }
  }
}
