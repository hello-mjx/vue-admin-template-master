<template>
    <div>
        <el-button type="peimary" v-show="$store.state.user.buttons.indexOf(btn.Add3) != -1">添加按钮3</el-button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>