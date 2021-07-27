<template>
  <div class="management flex">
    <div class="tabs">
      <!-- メニューバー -->
      <nav>
        <ul class="contents">
          <li @click="$router.push('/')">
            登録
          </li>
          <li @click="$router.push('/update')">
            情報変更・削除
          </li>
          <li @click="$router.push('/skill')">
            スキル登録
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
/* ====================
      メニューバー
==================== */
  .management {
    width: 100%;
  }
  .tabs {
    position: fixed;
    top: 10;
    left: 0;
    height: 100%;
    width: 170px;
    background-color: rgb(53, 52, 52);
    line-height: 4;
    color: #fff;
  }
  .contents li {
    padding-left: 10px;
    cursor: pointer;
  }
  .contents li:hover {
    background-color: #ffa500;
  }
</style>
