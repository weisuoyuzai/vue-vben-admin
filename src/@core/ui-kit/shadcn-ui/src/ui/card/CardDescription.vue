<script setup lang="ts">
import { cn } from '#/@core/base/shared/src/utils';

const props = defineProps<{
  class?: any;
}>();
</script>

<template>
  <p :class="cn('text-sm text-muted-foreground', props.class)">
    <slot></slot>
  </p>
</template>
