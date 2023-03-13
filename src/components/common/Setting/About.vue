<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { NSpin } from 'naive-ui'
import { fetchChatConfig } from '@/api'

interface ConfigState {
  timeoutMs?: number
  reverseProxy?: string
  apiModel?: string
  socksProxy?: string
  httpsProxy?: string
}

const loading = ref(false)

const config = ref<ConfigState>()

async function fetchConfig() {
  try {
    loading.value = true
    const { data } = await fetchChatConfig<ConfigState>()
    config.value = data
  }
  finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchConfig()
})
</script>

<template>
  <NSpin :show="loading">
    <div class="p-4 space-y-4">
      <div class="p-2 space-y-2 rounded-md bg-neutral-100 dark:bg-neutral-700">
        <p>
          本プロジェクトは、
          <a
            class="text-blue-600 dark:text-blue-500"
            href="https://api.openai.com"
            target="_blank"
          >
            OpenAI
          </a>
          と
          <a
            class="text-blue-600 dark:text-blue-500"
            href="https://platform.openai.com/docs/models/gpt-3-5"
            target="_blank"
          >
            GPT-3.5
          </a>
          をもとに、実現できるNapir-ChatGPTでございます。
        </p>
        <p>
          デモバージョンなので、表現不備や体験不良などがございましたら是非ご連絡お願いいたします。
        </p>
        <p>
          ありがとうございます🎵🎧🎶
        </p>
      </div>
      <p>{{ $t("setting.api") }}：{{ config?.apiModel ?? '-' }}</p>
      <p>{{ $t("setting.reverseProxy") }}：{{ config?.reverseProxy ?? '-' }}</p>
      <p>{{ $t("setting.timeout") }}：{{ config?.timeoutMs ?? '-' }}</p>
      <p>{{ $t("setting.socks") }}：{{ config?.socksProxy ?? '-' }}</p>
      <p>{{ $t("setting.httpsProxy") }}：{{ config?.httpsProxy ?? '-' }}</p>
    </div>
  </NSpin>
</template>
