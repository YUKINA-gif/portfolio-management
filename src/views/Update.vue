<template>
  <div class="store_update">
    <!-- ポートフォリオ変更・削除 -->
    <Management />
    <h2>ポートフォリオ変更・削除</h2>
    <!-- 店舗一覧 -->
    <div class="stores_container">
      <div class="wrap store_flex">
        <div
          class="flex store_card"
          v-for="(portfolio, index) in portfolios"
          :key="index"
        >
          <img
            :src="
              'https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/' +
                portfolio.image
            "
            alt=""
            class="store_image image"
          />
          <div class="store_detail">
            <span class="store_name">{{ portfolio.name }}</span>
            <div></div>
          </div>
          <div>
            <button
              class="button store_button update_button"
              @click="openModal(portfolio)"
            >
              情報変更
            </button>
            <button
              class="button store_button delete_button"
              @click="openModalDel(portfolio)"
            >
              削除
            </button>
          </div>
        </div>
        <!-- 店舗情報変更画面 -->
        <Modal v-if="modal" @close="closeModal" :val="sendSData"></Modal>
        <!-- 店舗削除画面 -->
        <ModalDel
          v-if="modal_del"
          @close="closeModalDel"
          :val="deleteItem"
        ></ModalDel>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import Management from "../components/Management.vue";
import Modal from "../components/Modal.vue";
import ModalDel from "../components/ModalDel.vue";
import axios from "axios";

export default {
  data() {
    return {
      preview: "",
      file: "",
      portfolios: [],
      searchResult: false,
      modal: false,
      modal_del: false,
      loading: false,
      sendSData: "",
    };
  },
  components: {
    Management,
    Modal,
    ModalDel,
  },
  methods: {
    // ポートフォリオ情報取得
    async getPtf() {
      await axios
        .get("https://yukinas-portfolio.herokuapp.com/api/portfolio")
        .then((res) => {
          this.portfolios = res.data.ptf;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 店舗情報変更モーダルウィンドウ表示
    openModal(store) {
      this.modal = true;
      this.sendSData = store;
    },
    closeModal() {
      this.modal = false;
      this.getPtf();
    },
    // 店舗削除モーダルウィンドウ表示
    openModalDel(portfolio) {
      this.modal_del = true;
      this.deleteItem = portfolio;
    },
    closeModalDel() {
      this.modal_del = false;
      this.getPtf();
    },
  },
  created() {
    this.getPtf();
  },
};
</script>

<style scoped>
/* ====================
      全体設計
==================== */
.store_update {
  width: 80%;
  margin-left: 200px;
}
.search_flex {
  margin-top: 20px;
}
/* ====================
      店舗検索
==================== */
.search {
  margin-top: 10px;
  font-weight: bold;
  color: #000;
}
select,
input {
  padding: 7px;
  margin-right: 10px;
}
select {
  width: 15%;
}
input {
  width: 25%;
}
h2 {
  font-size: 25px;
  margin: 20px 0;
}
.button {
  width: 100px;
  font-weight: bold;
  background-color: rgb(212, 208, 201);
  margin-left: 10px;
}
/* ====================
    店舗一覧
==================== */
#store_title {
  font-size: 22px;
  margin: 10px 0;
}
.stores_container {
  line-height: 2;
}
.store_name {
  font-weight: bold;
  font-size: 20px;
}
.store_heart {
  justify-content: space-between;
}
.png {
  margin-right: 10px;
}
.store_button {
  width: 130px;
  padding: 7px 15px;
  font-size: 15px;
  margin: 20px 20px 0 20px;
  color: #fff;
  background-color: rgb(0, 0, 0, 0.7);
}
.tag {
  margin-left: 10px;
  color: gray;
}
span {
  margin-left: 10px;
}
.store_card {
  width: 100%;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
}
.store_image {
  width: 30%;
}
.store_detail {
  width: 20%;
  display: block;
  padding: 10px;
}
.store_overview {
  width: 40%;
  display: block;
  padding: 10px;
}
.loading {
  margin: 150px auto;
}
/* ====================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  .store_button {
    width: 80%;
  }
  .search_flex {
    flex-wrap: wrap;
  }
  .search {
    width: 70%;
    text-align: center;
  }
  select {
    width: 100%;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    margin-bottom: 10px;
  }
  .search_button,
  .delete_search {
    height: 40px;
    width: 40%;
    margin: 0 auto;
  }
}
</style>
