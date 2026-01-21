<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '#/effects/common-ui/src';
import { LOGIN_PATH } from '#/constants/src';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
