<template>
    <div class="d-flex justify-content-center  skeleton-header">

    </div>
    <div class="skeleton skeleton-text" v-for="i in count" :key="i"></div>
</template>

<script>
export default{
    props:{
        count : {
            default : 4
        }
    }
}
</script>

<style scoped>
.skeleton {
    background-image: linear-gradient(to right, #1b222e 0%, rgba(80, 69, 69, 0.07) 40%, #252c37 70%, #1e2531 100%);
    background-size: 1500px 400px;
    animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0%{
    background-position: -1500px 0;
  }
  100%{
    background-position: 1500px 0;
  }
}

.skeleton-header {
    width: 100%;
    height: 1.9rem;
    background: #374151;
    border-bottom: 1px solid rgba(128, 128, 128, 0.281);
    background-image: linear-gradient(to right, #374151 0%, rgba(80, 69, 69, 0.07) 40%, #515c6e 70%, #374151 100%);
    background-size: 1500px 400px;
    animation: shimmer 3s linear infinite;
}

.skeleton-text {
  width: 100%;
  height: 1.8rem;
  border-bottom: 1px solid rgba(128, 128, 128, 0.281);
}

.skeleton-text__body {
  width: 75%;
}

.skeleton-footer {
  width: 30%;
}

</style>