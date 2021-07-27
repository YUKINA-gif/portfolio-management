<template>
  <div class="skill">
    <Management />
    <h2>スキル登録</h2>
    <table>
      <tr>
        <th>名前:</th>
        <td><input type="text" v-model="name" /></td>
      </tr>
      <tr>
        <th>スキル値:</th>
        <td>
          <select id="skill" v-model="skill">
            <option value="" class="pull_down">スキル</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
      </tr>
    </table>

    <button class="button" @click="createSkill">
      <p v-if="loading">登録</p>
      <vue-loading
        type="barsCylon"
        color="#fff"
        v-else
        class="loading"
      ></vue-loading>
    </button>
  </div>
</template>

<script>
import axios from "axios";
import Management from "../components/Management.vue";
import { VueLoading } from "vue-loading-template";
export default {
  data() {
    return {
      name: "",
      skill: "",
      loading: true,
    };
  },
  components: {
    Management,
    VueLoading,
  },
  methods: {
    createSkill() {
      this.loading = false;
      axios
        .post("https://yukinas-portfolio.herokuapp.com/api/skill", {
          name: this.name,
          skill: this.skill,
        })
        .then(() => {
          alert("登録しました。");
          this.loading = true;
        })
        .catch(() => {
          alert("登録できませんでした。");
          this.loading = true;
        });
    },
  },
};
</script>

<style scoped>
/* ====================
      全体設計
==================== */
.skill {
  width: 80%;
  margin-left: 200px;
}
h2 {
  font-size: 25px;
  margin: 20px 0;
}
table {
  width: 100%;
  margin-top: 20px;
  text-align: left;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
}
tr {
  border: 1px solid #c2c2c2;
}
th {
  width: 15%;
  font-size: 18px;
  padding: 5px;
  background-color: rgb(212, 208, 201);
}
td {
  width: 70%;
  padding: 10px 5px;
}
input,
textarea,
select {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  font-size: 18px;
}
.button {
  margin: 20px 0 20px 50%;
  width: 100px;
  height: 35px;
  font-weight: bold;
  transform: translate(-50%);
  background-color: rgb(108, 209, 115);
}
.loading {
  margin-right: 20px;
}
</style>
