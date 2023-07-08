<template>
    <div class="contain">
        <div class=" containme">
            <div class="lds-dual-ring"></div>
        </div>
    </div>
</template>



<style scoped>
.containme{
    position: relative;
    display: flex;
    align-items: center!important;
    justify-content: center;
    top: 45%;
}
.contain{
    position: absolute;
    inset: 0;
    top: 0%;
    width:100%;
    height:98%;
    background-color: rgba(29, 29, 29, 0.537);
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>