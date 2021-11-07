<template>
    <div class="p-grid">
        <div class="p-col-10 p-offset-1">
            <div>
                <Menubar :model="items">
                    <template #start>
                        <b>Homebrew Hub</b>
                    </template>
                    <template #end>
                        <InputText placeholder="Search" type="text" />
                    </template>
                </Menubar>
            </div>
        </div>
        <div class="p-col-10 p-offset-1">
            <router-view />
        </div>
        <div class="p-col-10 p-offset-1">
            <center><small>
              A footer
            </small></center>
        </div>        
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