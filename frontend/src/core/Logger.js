/**
 * Logger — 分级日志系统
 *
 * @example
 *   import { logger } from 'core/Logger'
 *   logger.info('Dashboard', '数据加载完成')
 *   logger.warn('API', '响应超时, 使用缓存数据')
 */

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 }
const COLORS = {
  debug: '#9ca3af',
  info: '#60a5fa',
  warn: '#f59e0b',
  error: '#ef4444',
}

class Logger {
  constructor() {
    this._level = import.meta.env.DEV ? 'debug' : 'warn'
  }

  _log(level, module, message, data) {
    if (LEVELS[level] < LEVELS[this._level]) return

    const time = new Date().toLocaleTimeString()
    const style = `color: ${COLORS[level]}; font-weight: 600;`
    const tag = `[${level.toUpperCase()}]`.padEnd(7)

    if (data !== undefined) {
      console.log(
        `%c${tag}%c${time} %c[${module}]%c ${message}`,
        style, 'color:#6b7280', 'color:#d4a745', 'color:#e5e7eb',
        data
      )
    } else {
      console.log(
        `%c${tag}%c${time} %c[${module}]%c ${message}`,
        style, 'color:#6b7280', 'color:#d4a745', 'color:#e5e7eb'
      )
    }
  }

  debug(module, message, data) { this._log('debug', module, message, data) }
  info(module, message, data) { this._log('info', module, message, data) }
  warn(module, message, data) { this._log('warn', module, message, data) }
  error(module, message, data) { this._log('error', module, message, data) }
}

export const logger = new Logger()
export default Logger
