<script setup lang="ts">
import { computed, ref } from 'vue';
import { ButtonComponent as MosaikButton } from '@pixel-brewery/mosaik-elements-vue/components/button';
import { IconComponent as MosaikIcon } from '@pixel-brewery/mosaik-elements-vue/components/icon';
import { PulseComponent as MosaikPulse } from '@pixel-brewery/mosaik-elements-vue/components/pulse';
import { StackComponent as MosaikStack } from '@pixel-brewery/mosaik-elements-vue/components/stack';
import { TextComponent as MosaikText } from '@pixel-brewery/mosaik-elements-vue/components/text';

const clicks = ref(0);
const counterLabel = computed(() => `${clicks.value} ${clicks.value === 1 ? 'click' : 'clicks'}`);

function increment(): void {
  clicks.value += 1;
}
</script>

<template>
  <main>
    <MosaikStack
      class="starter"
      orientation="vertical"
      fit="width"
    >
      <MosaikStack
        class="starter__container"
        orientation="vertical"
        fit="width"
      >
        <MosaikStack
          class="starter__card"
          orientation="vertical"
          fit="width"
        >
          <MosaikStack
            class="starter__header"
            orientation="horizontal"
            vertical-alignment="top"
          >
            <MosaikStack
              class="starter__intro"
              orientation="vertical"
            >
              <MosaikText
                class="starter__title"
                text="Mosaik starter"
                role="heading"
                aria-level="1"
              />
              <MosaikText
                class="starter__description"
                text="A small starting point for your next web app."
                :wrap="true"
              />
            </MosaikStack>
          </MosaikStack>
          <MosaikStack
            class="starter__content"
            orientation="vertical"
            horizontal-alignment="center"
            vertical-alignment="center"
            fit="width"
          >
            <MosaikPulse
              class="starter__pulse"
              :count="2"
              duration="3.6s"
              variant="neutral"
            >
              <MosaikIcon
                class="starter__icon"
                icon="sparkles"
                aria-hidden="true"
              />
            </MosaikPulse>
            <MosaikStack
              class="starter__message"
              orientation="vertical"
              horizontal-alignment="center"
            >
              <MosaikText
                class="starter__counter"
                data-testid="counter"
                :text="counterLabel"
                :wrap="true"
                alignment="center"
                role="status"
                aria-live="polite"
              />
              <MosaikText
                class="starter__hint"
                text="This counter is local to your app."
                :wrap="true"
                alignment="center"
              />
            </MosaikStack>
            <MosaikButton
              class="starter__action"
              data-testid="increment"
              label="Add a click"
              variant="primary"
              appearance="solid"
              size="small"
              icon="plus"
              icon-size="small"
              @click="increment"
            />
          </MosaikStack>
        </MosaikStack>
      </MosaikStack>
    </MosaikStack>
  </main>
</template>
