<script setup>
const config = useRuntimeConfig().public;
</script>
<template>
  <DataView :value="entries" :layout="layout" :paginator="paginator" :rows="18">
    <template #grid="slotProps">
      <div class="listgrid col-12 sm:col-6 lg:col-3 xl:col-2">
        <div class="product-grid-item card">
          <div class="product-grid-item-content">
            <router-link tag="li" :to="'/game/' + slotProps.data.slug">
              <img
                :src="
                  config.BASE_API_URL +
                  '/entries/' +
                  slotProps.data.slug +
                  '/' +
                  slotProps.data.screenshots[0]
                "
                class="product-image"
                :alt="slotProps.data.title"
              />
              <div class="product-name">
                {{ slotProps.data.title }}
              </div></router-link
            >
            <div class="product-description">
              {{ slotProps.data.developer }}
            </div>
          </div>
          <div class="product-grid-item-bottom"></div>
        </div>
      </div>
    </template>
  </DataView>
</template>
<script>
export default {
  name: "List",
  props: {
    msg: String,
    entries: Array,
    paginator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      total_entries: 0,
      layout: "grid",
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.listgrid {
  background-color: var(--surface-b);
}
.grid-nogutter {
  background-color: var(--surface-b);
}

.p-paginator {
  background-color: var(--surface-b);
}

.card {
  background: var(--surface-e);
  padding: 0rem;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}

.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.15rem;
  font-weight: 600;
  height: 2.3rem;
}

a {
  color: var(--text-color);
}

.product-image {
  width: 100%;
  margin-top: 0px;
}

.product-description {
  margin: 0 0 1rem 0;
  color: var(--text-color-secondary);
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}

::v-deep(.product-grid-item) {
  margin: 0.5rem;
  border: 1px solid var(--surface-d);

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    margin-bottom: 1rem;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
