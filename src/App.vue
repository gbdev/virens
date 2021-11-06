<template>
    <div>
        <Menubar :model="items">
            <template #start>
                <b>Homebrew Hub</b>
            </template>
            <template #end>
                <InputText placeholder="Search" type="text" />
            </template>
        </Menubar>
        <router-view />
    </div>
</template>
<script>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';

export default {
    name: 'App',
    data() {
        return {
            items: [{
                    label: 'Games',
                    icon: '',
                },
                {
                    label: 'Demos',
                    icon: '',
                },
                {
                    label: 'gbcompo21',
                    icon: '',
                },
            ]
        }
    }
}
</script>
<style>
.p-menuitem-icon {
    margin: 0 !important
}
</style>