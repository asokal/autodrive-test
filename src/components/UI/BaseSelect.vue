<template>
	<label :class="`relative ${rootClassList}`">
		<span class="mb-1 block leading-5 text-gray-700" v-if="label">
			{{ label }}
		</span>

		<select
			class="w-full appearance-none rounded-md border border-gray-300 bg-arrow-down bg-right bg-no-repeat bg-origin-content px-3 py-2 font-normal leading-5 text-gray-900 shadow-sm"
			:value="modelValue"
			@change="$emit('update:modelValue', $event.target.value)"
			v-bind="$attrs"
		>
			<slot>
				<option value="select" selected disabled>Select...</option>
			</slot>
		</select>

		<span
			class="absolute left-0 -bottom-5 text-xs font-normal text-red-500"
			v-if="error"
		>
			{{ error }}
		</span>
	</label>
</template>

<script>
	export default {
		name: 'base-select',
		inheritAttrs: false,

		props: {
			label: {
				type: String,
				required: false,
			},

			rootClassList: {
				type: String,
				required: false,
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

		data() {
			return {};
		},
	};
</script>

<style lang="css" scoped></style>
