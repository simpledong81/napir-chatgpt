import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import enUS from './en-US'
import zhCN from './zh-CN'
import jaJP from './ja-JP'
import { useAppStoreWithOut } from '@/store/modules/app'
import type { Language } from '@/store/modules/app/helper'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'ja-JP'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'ja-JP',
  allowComposition: true,
  messages: {
    'en-US': enUS,
    'zh-CN': zhCN,
    'ja-JP': jaJP,
  },
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
  i18n.global.locale = locale
}

export function setupI18n(app: App) {
  app.use(i18n)
}

export default i18n
