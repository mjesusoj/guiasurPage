<template>
    <div id="formulario-de-contacto" class="mt-5">
        <h3 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Formulario de contacto</h3>
        <UForm
            class="form"
            ref="form"
            :validate="validate"
            :state="state"
            action="https://submit-form.com/RQtlPjLt"
        >
            <MazInput v-model="state.name" label="Nombre y Apellidos"/>
            <MazInput v-model="state.email" label="Correo electrónico" required />

            <MazTextarea
                v-model="textArea"
                name="message"
                id="message"
                label="Escriba aquí lo que desea"
            />

            <MazPhoneNumberInput
                v-model="phoneNumber"
                name="phoneNumber"
                show-code-on-list
                color="info"
                :max="9"
                defaultCountryCode="ES"
                @update="results = $event"
            />

            <MazBtn class="mt-2" color="info" type="submit" block>Enviar formulario</MazBtn>
        </UForm>
    </div>
</template>
                
<script lang="ts" setup>
    import { ref } from 'vue'
    import type { FormError } from '@nuxthq/ui/dist/runtime/types'
    import { trackEvent } from "@aptabase/web";

    import MazBtn from 'maz-ui/components/MazBtn'
    import MazInput from 'maz-ui/components/MazInput'
    import MazTextarea from 'maz-ui/components/MazTextarea'
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'

    const phoneNumber = ref('')
    const textArea = ref()
    const results = ref('')
    const form = ref()

    const state = ref({
        name: undefined,
        email: undefined,
    })

    const validate = (state: any): FormError[] => {
        const errors = []
        if (!state.email) errors.push({ path: 'email', message: 'Requerido' })
        return errors
    }

    async function submit () {
        console.log(form);
        
        await form.value!.validate()
        // Do something with state.value
    }

    trackEvent('app_started');
    trackEvent('page_view', { name: 'Formulario de Contacto', path: '#formulario-de-contacto' });
</script>

<style scoped>
    .form > div {
        margin: 2%;
    }
</style>