import { watch as _watch } from '@histoire/vendors/vue'
import { applyState } from '@histoire/shared'

function cleanupState (state: Record<string, any>): Record<string, any> {
  const result = {}
  for (const key in state) {
    if (key === 'Hst') continue
    const value = state[key]
    if (typeof value === 'function') continue
    result[key] = value
  }
  return result
}

export function syncState (variantState, onChange: (state) => unknown) {
  let syncing = false

  const _stop = _watch(() => variantState, value => {
    if (value == null) return
    if (!syncing) {
      syncing = true
      onChange(value)
    } else {
      syncing = false
    }
  }, {
    deep: true,
    immediate: true,
  })

  function apply (value) {
    if (value == null) return
    if (!syncing) {
      syncing = true
      applyState(variantState, cleanupState(value))
    } else {
      syncing = false
    }
  }

  return {
    apply,
    stop () {
      _stop()
    },
  }
}
