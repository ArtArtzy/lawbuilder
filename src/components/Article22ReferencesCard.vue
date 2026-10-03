<template>
  <section class="additional-references-card article22-references-card">
    <div class="additional-references-heading">
      <span class="reference-section-number">2</span>
      <div>
        <h2>Provide references for key terms</h2>
        <p>Resolve the bracketed references before finalizing this article.</p>
      </div>
      <button class="clear-references-button" type="button" @click="clearAll">Clear all</button>
    </div>

    <div v-for="reference in references" :key="reference.key" class="reference-item">
      <div class="reference-item-heading">
        <span class="reference-number">{{ reference.number }}</span>
        <div>
          <strong>{{ reference.label }}</strong>
          <p>Resolve the text “{{ reference.bracketText }}” in the draft.</p>
        </div>
        <button class="clear-reference-button" type="button" :disabled="!reference.source && !reference.customReference" @click.stop="clearReference(reference)">Clear</button>
      </div>
      <div class="reference-choices">
        <label v-for="choice in reference.choices" :key="choice.value">
          <input v-model="reference.source" type="radio" :name="`article22-reference-${reference.key}`" :value="choice.value" />
          <div class="reference-choice-copy"><span>{{ choice.label }}</span><small v-if="reference.source === choice.value">{{ choice.hint }}</small></div>
        </label>
        <label>
          <input v-model="reference.source" type="radio" :name="`article22-reference-${reference.key}`" value="custom" />
          <div class="reference-choice-copy"><span>Specify final text or another reference</span></div>
          <input v-model="reference.customReference" :disabled="reference.source !== 'custom'" class="reference-input" type="text" placeholder="e.g. Module 2, Article 2.1" />
        </label>
      </div>
    </div>

    <div class="reference-progress">
      <strong>References completed: {{ resolvedCount }} of {{ references.length }}</strong>
      <span v-if="remainingCount > 0">{{ remainingCount }} reference{{ remainingCount === 1 ? '' : 's' }} remaining</span>
      <span v-else class="reference-progress--complete">All references resolved</span>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  references: { type: Array, required: true },
})
const emit = defineEmits(['update:references'])
const resolvedCount = computed(() => props.references.filter((reference) => reference.source === 'custom' ? reference.customReference.trim() : reference.source).length)
const remainingCount = computed(() => props.references.length - resolvedCount.value)

function clearReference(reference) {
  reference.source = ''
  reference.customReference = ''
}
function clearAll() {
  emit('update:references', props.references.map((reference) => ({ ...reference, source: '', customReference: '' })))
}
</script>
