<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

};
</script>

<style>
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }

  body {
      line-height:1;
  }

  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
      display:block;
  }

  nav ul {
      list-style:none;
  }

  blockquote, q {
      quotes:none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
      content:'';
      content:none;
  }

  a {
      margin:0;
      padding:0;
      font-size:100%;
      vertical-align:baseline;
      background:transparent;
  }
  h2{
    font-size:18px;
  }

/* change colours to suit your needs */
  ins {
      background-color:#ff9;
      color:#000;
      text-decoration:none;
  }

/* change colours to suit your needs */
  mark {
      background-color:#ff9;
      color:#000;
      font-style:italic;
      font-weight:bold;
  }

  del {
      text-decoration: line-through;
  }

  abbr[title], dfn[title] {
      border-bottom:1px dotted;
      cursor:help;
  }

  table {
      border-collapse:collapse;
      border-spacing:0;
  }

  li{
    list-style: none;
  }

/* change border colour to suit your needs */
  hr {
      display:block;
      height:1px;
      border:0;  
      border-top:1px solid #cccccc;
      margin:1em 0;
      padding:0;
  }

  input, select {
      vertical-align:middle;
      outline: none;
      border-radius: 2px;
      border:1px solid #c2c2c2;
  }

  .flex{
    display: flex;
  }
  .button{
    background-color: #FFA500;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 15px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  }
  .image{
    width: 100%;
    object-fit: cover;
  }
  .png{
    width:35px;
    cursor: pointer;
  }
  .wrap{
    flex-wrap: wrap;
  }

/* ====================
   ヘッダー固定分調整
==================== */
  .top{
    margin-top: 60px;
  }
</style>
