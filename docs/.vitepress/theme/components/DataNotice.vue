<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { withBase } from 'vitepress'

const STORAGE_KEY = 'data-notice-accepted'
// Скрыто при SSR и до монтирования — иначе расхождение гидратации.
const visible = ref(false)

onMounted(() => {
  try {
    if (localStorage.getItem(STORAGE_KEY) !== '1') visible.value = true
  } catch {
    // localStorage недоступен (приватный режим) — показываем уведомление.
    visible.value = true
  }
})

function accept() {
  visible.value = false
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // нет доступа к хранилищу — просто закрываем на эту сессию.
  }
}
</script>

<template>
  <div v-if="visible" class="data-notice" role="region" aria-label="Уведомление об обработке данных">
    <p class="data-notice__text">
      Сайт использует cookie-файлы и сервис Яндекс Метрика для сбора
      обезличенной статистики посещений. Продолжая пользоваться сайтом, вы
      соглашаетесь с
      <a :href="withBase('/privacy.html')">политикой обработки данных</a>.
    </p>
    <button class="data-notice__btn" type="button" @click="accept">
      Понятно
    </button>
  </div>
</template>

<style scoped>
.data-notice {
  position: fixed;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 16px;
  width: calc(100% - 32px);
  max-width: 760px;
  padding: 12px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-3);
  font-size: 13px;
  line-height: 1.5;
}

.data-notice__text {
  margin: 0;
  color: var(--vp-c-text-2);
}

.data-notice__text a {
  color: var(--vp-c-brand-1);
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.data-notice__btn {
  flex: 0 0 auto;
  padding: 7px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.data-notice__btn:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

@media (max-width: 640px) {
  .data-notice {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    text-align: center;
  }
}
</style>
