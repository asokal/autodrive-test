<script setup></script>

<template>
	<div class="container mx-auto p-2.5 sm:py-5 sm:px-0">
		<base-button label="Заказать в Москву" class="mb-2.5 sm:mb-0 sm:mr-5" />
		<base-button label="Заказать в Санкт-Петербург" color="teal-600" />
	</div>
</template>

<style scoped></style>
<script>
	import BaseButton from './components/BaseButton.vue';
	export default {
		components: { BaseButton },
	};
</script>
