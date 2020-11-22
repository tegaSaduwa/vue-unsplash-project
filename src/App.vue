<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  
}

small {
  font-size: 8px;
}
.top-half {
  left: 0;
  background-color: #d1d1d1;
  height: 30vh;
  width: 100%;
}

.input-wrapper {
  padding-top: 5rem;
}

.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 13px 10px 10px 10px;
  min-width: 40px;
  margin-left: 23%;
  font-size: 12px;
  color: #d1d1d1;
}
.input-field {
  margin: 0 auto;
  padding: 12px 12px 12px 50px;
  width: 700px;
  border: none;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  box-shadow: black;
}

.input-field:focus {
  outline: none;
}

.row {
  margin: 30px auto;
  /* background: #000; */
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

.column {
  flex: 25%;
  max-width: 33%;
  padding: 0 23px;
}

.img {
  margin-top: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0 0 30px 30px rgba(0, 0, 0, 0.4) inset;
}

.column .index-0 {
  width: 100%;
  border-radius: 5px;
  height: 32vh;
  padding-bottom: 0rem;
}
.column .index-3 {
  border-radius: 5px;
  height: 35vh;
  margin-top: 0rem;
}
.column .index-1 {
  border-radius: 5px;
  height: 37vh;
}
.column .index-4 {
  border-radius: 5px 5px 0px 0px;
  height: 32vh;
  margin-top: 2.2rem;
}
.column .index-2 {
  border-radius: 5px;
  height: 33vh;
}
.column .index-5 {
  border-radius: 5px 5px 0px 0px;
  height: 36.3vh;
  /* margin-top: 1.5rem; */
}

.placeholder-text0 {
  color: white;
  padding-top: 154px;
  padding-left: 20px;
  font-size: 14px;
}

.placeholder-text3 {
  color: white;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 183px;
}
.placeholder-text1 {
  color: white;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 190px;
}
.placeholder-text4 {
  color: transparent;
  font-size: 14px;
  /* padding-left: 20px;
  padding-top: 190px; */
}
.placeholder-text2 {
  color: white;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 162px;
}
.placeholder-text5 {
  color: white;
  font-size: 14px;
  padding-left: 20px;
  padding-top: 210px;
}

@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
  .icon {
    padding: 13px 10px 10px 10px;
    min-width: 40px;
    margin-left: 20%;
    font-size: 12px;
    color: #d1d1d1;
  }
  .input-field {
    margin: 0 auto;
    padding: 12px 12px 12px 50px;
    width: 300px;
    border: none;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    box-shadow: black;
  }
}
</style>
