<script setup>
const isMounted = useMounted()
const { width, height } = useWindowSize()
const svgSize = 100
const gap = 32
const cell = svgSize + gap
const diagonal = computed(() =>
  Math.ceil(Math.sqrt(width.value ** 2 + height.value ** 2)),
)
const extra = cell * 1
const gridWidth = computed(() => diagonal.value + extra * 2)
const gridHeight = computed(() => diagonal.value + extra * 2)
const cols = computed(() => Math.ceil(gridWidth.value / cell))
const rows = computed(() => Math.ceil(gridHeight.value / cell))
const offsetX = computed(() => (width.value - diagonal.value) / 2 - extra)
const offsetY = computed(() => (height.value - diagonal.value) / 2 - extra)
</script>

<template>
  <div
    v-if="isMounted"
    class="fixed pointer-events-none z-0 opacity-5 overflow-hidden -rotate-45 origin-center"
    :style="{
      width: `${gridWidth}px`,
      height: `${gridHeight}px`,
      left: `${offsetX}px`,
      top: `${offsetY}px`,
    }"
  >
    <div
      class="w-full h-full grid"
      :style="{
        gridTemplateColumns: `repeat(${cols}, ${cell}px)`,
        gridTemplateRows: `repeat(${rows}, ${cell}px)`,
        gap: `${gap}px`,
      }"
    >
      <template
        v-for="r in rows"
        :key="`r-${r}`"
      >
        <template
          v-for="c in cols"
          :key="`c-${c}`"
        >
          <TarcLogoText
            width="100"
            height="100"
            class="block"
          />
        </template>
      </template>
    </div>
  </div>
</template>
