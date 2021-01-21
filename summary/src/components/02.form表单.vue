<template>
    <div>
        <input v-model="vInput" type="text" />
        <br>
        <input type="checkbox" name="" id="" v-model="vCheckBox">
        <br>
        <input type="radio" name="" id="" value="name" v-model="vRadio">
        <input type="radio" name="" id="" value="age" v-model="vRadio">
        <br>
        <select name="" id="" v-model="vSelect">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
        </select>
        <br>
        <input type="checkbox" name="" id="" value="checkbox1" v-model="vCheckboxs">
        <input type="checkbox" name="" id="" value="checkbox2" v-model="vCheckboxs">
        <input type="checkbox" name="" id="" value="checkbox3" v-model="vCheckboxs">
        <br>
        <select name="" id="" multiple v-model="vSelects">
            <option value="select1">select1</option>
            <option value="select2">select2</option>
            <option value="select3">select3</option>
        </select>
        <br>
        {{vInput}} --- {{vCheckBox}} --- {{vRadio}} --- {{vSelect}} --- {{vCheckboxs}} -- {{vSelects}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vInput: "vInput",
                vCheckBox: true,
                vRadio: "",
                vSelect: "one",
                vCheckboxs: [],
                vSelects: []
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>