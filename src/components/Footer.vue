<template>
    <div class="p-grid">
        <div class="p-col-10">
        	<br>
        	&copy;2017-2021
        	<br><br>
            <img style="height: 40px" src="https://opensource.nyc3.cdn.digitaloceanspaces.com/attribution/assets/PoweredByDO/DO_Powered_by_Badge_black.svg">
        </div>
        <div class="p-col-2"> <br><a href="https://twitter.com/gbdev0" target="_blank">
                <Chip label="Follow @gbdev0" icon="pi pi-twitter" class="p-mb-2 twitter-chip"></Chip>
            </a></div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
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