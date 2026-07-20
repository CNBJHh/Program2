/**
 * EventBus — 轻量级发布订阅
 * 全局事件通信，解耦组件依赖
 *
 * @example
 *   import { eventBus } from 'core/EventBus'
 *   eventBus.on('data:refresh', () => fetchData())
 *   eventBus.emit('data:refresh')
 */
class EventBus {
  constructor() {
    this._events = new Map()
  }

  on(event, callback) {
    if (!this._events.has(event)) {
      this._events.set(event, new Set())
    }
    this._events.get(event).add(callback)
    return () => this.off(event, callback)
  }

  off(event, callback) {
    this._events.get(event)?.delete(callback)
  }

  emit(event, ...args) {
    this._events.get(event)?.forEach((cb) => {
      try { cb(...args) } catch (e) { console.error(`[EventBus] ${event}:`, e) }
    })
  }

  once(event, callback) {
    const wrapper = (...args) => {
      this.off(event, wrapper)
      callback(...args)
    }
    this.on(event, wrapper)
  }

  clear() {
    this._events.clear()
  }
}

export const eventBus = new EventBus()
export default EventBus
