<template>
  <transition name="modal">
    <div class="overlay" @click.self="$emit('close')">
      <!-- 削除 -->
      <div class="modal_window">
        <p id="title">削除</p>
        <p class="check_text">本当に削除しますか?</p>
        <button class="button yes_button" @click="deletePtf" v-if="loading">
          はい
        </button>

        <button
          class="button no_button"
          @click.self="$emit('close')"
          v-if="loading"
        >
          いいえ
        </button>
        <vue-loading
          type="barsCylon"
          color="#000"
          v-else
          class="loading"
        ></vue-loading>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";
import { VueLoading } from "vue-loading-template";
export default {
  props: ["val"],
  data() {
    return {
      loading: true,
    };
  },
  components: {
    VueLoading,
  },
  methods: {
    deletePtf() {
      this.loading = false;
      axios
        .request({
          method: "delete",
          url: "https://yukinas-portfolio.herokuapp.com/api/portfolio",
          data: {
            id: this.val.id,
          },
        })
        .then((response) => {
          console.log(response);
          alert("削除しました。");
          this.$emit("close");
          this.loading = true;
        })
        .catch(() => {
          alert("削除できませんでした。お手数ですが再度お試しください。");
          this.loading = true;
        });
    },
  },
};
</script>

<style scoped>
/* ====================
      店舗削除
==================== */
table {
  width: 100%;
  text-align: left;
}
th {
  width: 30%;
  background: #f8f3e9;
  padding: 15px 5px;
  border: 1px solid #fff;
}
td {
  padding-left: 5px;
}
#title {
  font-size: 18px;
  margin: 10px;
  font-weight: bold;
}
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_window {
  text-align: center;
  z-index: 2;
  width: 40%;
  padding: 10px;
  background: #fff;
}
.yes_button {
  margin-right: 50px;
  padding: 5px 15px;
  color: black;
  background-color: #fff;
}
.no_button {
  background-color: #000;
}
.check_text {
  margin-bottom: 20px;
}
.loading {
  margin: 0 auto;
  padding-left: 10px;
}
</style>
