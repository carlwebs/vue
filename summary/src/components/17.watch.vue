<template>
    <div>
        <input type="text" v-model="firstName">
        <input type="text" v-model="lastName">
        <input type="text" v-model="fullName">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: "",
                lastName: "",
                fullName: ""
            }
        },
        watch: {
            firstName(newValue, oldValue) {
                console.log(newValue,oldValue);
                this.fullName = this.firstName + this.lastName;
            },
            lastName(newValue, oldValue) {
                console.log(newValue,oldValue);
                this.fullName = this.firstName + this.lastName;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>