<template>
    <div>
        <div :class="[red]">red</div>
        <div :class="['red',{'blur':blur}]">blur</div>
        <div :class="{'yellow':yellow}">yellow</div>
        <div :class="green1">green</div>

        <div :style="{'color':red,'fontSize':fontSize+'px'}">style</div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "msg",
                blur: true,
                yellow: true,
                green: true,
                red: 'red',
                fontSize: 30
            }
        },
        computed: {
            green1() {
                return {green:this.green}
            }
        },
    }
</script>

<style lang="scss" scoped>
    .red {
        color: red;
    }
    .blur {
        color: blue;
    }
    .yellow {
        color: yellow;
    }
    .green {
        color: green;
    }
</style>