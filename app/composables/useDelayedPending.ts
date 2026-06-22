import { ref, watch, onUnmounted, type Ref } from 'vue'

export const useDelayedPending = (pending: Ref<boolean>, delay = 160) => {
  const showLoading = ref(false)
  let timer: ReturnType<typeof setTimeout> | null = null

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  watch(pending, (value) => {
    if (value) {
      clearTimer()
      timer = setTimeout(() => {
        showLoading.value = true
      }, delay)
    } else {
      clearTimer()
      showLoading.value = false
    }
  }, { immediate: true })

  onUnmounted(() => {
    clearTimer()
  })

  return {
    showLoading
  }
}
