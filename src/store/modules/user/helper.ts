import { ss } from '@/utils/storage'
import defaultAvatar from '@/assets/avatar.png'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: defaultAvatar,
      name: 'N-アシスタント',
      description: '<a href="https://www.enapir.com" class="text-blue-500" target="_blank" >株式会社ナピル</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
