<template>
	<label :class="`${rootClassList}`">
		<span class="mb-1 block leading-5 text-gray-700" v-if="label">
			{{ label }}
		</span>

		<input
			:type="type"
			:placeholder="placeholder"
			class="w-full rounded-md border border-gray-300 px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm placeholder:text-gray-500"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			v-bind="$attrs"
		/>
	</label>
</template>

<script>
	export default {
		name: 'base-input',
		inheritAttrs: false,

		props: {
			type: {
				type: String,
				default: 'text',
			},

			label: {
				type: String,
				required: false,
			},

			rootClassList: {
				type: String,
				required: false,
			},

			placeholder: {
				type: String,
				default: 'placeholder...',
			},

			modelValue: {
				type: String,
				default: '',
			},

			error: {
				type: [String, Array, Boolean],
				required: false,
			},
		},
	};
</script>

<style scoped></style>
