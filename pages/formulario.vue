<template>
    <div id="formulario-de-contacto" class="col-end-4 col-span-2 mt-5">
        <h3 class="text-3xl text-blue-300 font-bold bg-clip-text mb-4">Formulario de contacto</h3>
        <form class="">
            <MazInput
                class="mb-2"
                v-model='inputValue'
                label='Nombre y Apellidos'
            />

            <MazPhoneNumberInput
                v-model="phoneNumber"
                show-code-on-list
                color="info"
                :max="9"
                defaultCountryCode="ES"
                @update="results = $event"
            />

            <MazTextarea
                class="mt-1"
                v-model="value"
                name="comment"
                id="comment"
                label="Escriba aquí detalladamente que es lo que desea"
            />

            <MazBtn
                class="mt-2"
            >
                Enviar formulario
            </MazBtn>
        </form>
    </div>
</template>
                
<script lang="ts" setup>
    import { ref } from 'vue'
    import { trackEvent } from "@aptabase/web";
    import MazBtn from 'maz-ui/components/MazBtn'
    import MazInput from 'maz-ui/components/MazInput'
    import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
    import MazTextarea from 'maz-ui/components/MazTextarea'

    const inputValue = ref('')
    const phoneNumber = ref('')
    const results = ref('')
    const value = ref('')

    trackEvent('app_started');
    trackEvent('page_view', { name: 'Formulario de Contacto', path: '#formulario-de-contacto' });
</script>