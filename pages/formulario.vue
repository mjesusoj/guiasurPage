<template>
    <div id="formulario-de-contacto" class="mt-5">
        <h3 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Formulario de contacto</h3>
        <UForm
            ref="form"
            :validate="validate"
            :state="state"
            @submit.prevent="submit"
        >
            <UFormGroup label="Nombre y apellidos" name="name">
                <UInput v-model="state.name" />
            </UFormGroup>

            <UFormGroup label="Correo electrónico" name="email">
                <UInput v-model="state.email" />
            </UFormGroup>

            <UTextarea color="primary" variant="outline" />

            <UButton type="submit">
                Enviar formulario
            </UButton>
           
            <MazPhoneNumberInput
                v-model="phoneNumber"
                show-code-on-list
                color="info"
                :max="9"
                defaultCountryCode="ES"
                @update="results = $event"
            />
        </UForm>

    </div>
</template>
                
<script lang="ts" setup>
    import { ref } from 'vue'
    import type { FormError } from '@nuxthq/ui/dist/runtime/types'
    import { trackEvent } from "@aptabase/web";

    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

    const phoneNumber = ref('')
    const results = ref('')

    const state = ref({
        name: undefined,
        email: undefined,
    })

    const validate = (state: any): FormError[] => {
        const errors = []
        if (!state.email) errors.push({ path: 'name', message: 'Requerido' }, { path: 'email', message: 'Requerido' })
        return errors
    }

    const form = ref()

    async function submit () {
        await form.value!.validate()
        // Do something with state.value
    }

    trackEvent('app_started');
    trackEvent('page_view', { name: 'Formulario de Contacto', path: '#formulario-de-contacto' });
</script>