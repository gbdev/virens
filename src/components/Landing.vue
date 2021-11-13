<template>
    Homebrew Hub is community-led attempt to collect, archive and preserve every unofficial game and homebrew released for Game Boy produced through decades of passionate work. <br>
    There are {{ total_entries }} total entries in the database.
    <br>
    <div class="card">
        <Carousel :value="entries" :numVisible="4" :numScroll="4" :responsiveOptions="responsiveOptions">
            <template #header>
            <h3>Last entries added</h3>
            </template>
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="p-mb-3">
                            <img :src="'https://hh3.gbdev.io/entries/'+slotProps.data.slug+'/'+slotProps.data.screenshots[0]" class="product-image" />
                        </div>
                        <div>
                            <h4 class="p-mb-1"> <router-link tag="li" :to="'/game/'+slotProps.data.slug"> {{slotProps.data.title}} </router-link> </h4>
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>
<script>
import axios from 'axios'
import Carousel from 'primevue/carousel';


export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {
            total_entries: 0,
            entries: [
                { 'title': 'a',
                  'screenshots': ['1.png']}
            ],
            responsiveOptions: [{
                    breakpoint: '1024px',
                    numVisible: 3,
                    numScroll: 3
                },
                {
                    breakpoint: '600px',
                    numVisible: 2,
                    numScroll: 2
                },
                {
                    breakpoint: '480px',
                    numVisible: 1,
                    numScroll: 1
                }
            ]
        }
    },
    created: function() {
        window.vm = this
        self = this
        axios(self.baseAPI+'/api/all', { responseType: 'json' })
            .then(async function(response) {
                self.total_entries = response.data.results
                self.entries = response.data.entries
            })

    },
}
</script>

<style type="text/css">
.product-image {
    width: 320px;
    height: 288px;
    box-shadow: 0px 2px 7px rgba(24, 53, 66, 0.5);
}


</style>
