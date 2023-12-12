<template>
  <div class="switchToggle">
    <input type="checkbox" id="switch" v-model="inputValue" @input="onInputChange">
    <label for="switch">Toggle</label>
    <span>{{ label }}</span>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "Toggle me"
    }
  },
  data() {
    return {
      inputValue: false,
    };
  },
  methods: {
    onInputChange() {
      this.$emit('onInputChange');
    },
  },
}
</script>

<!-- Yeah, this styles are messy. Just copied from someone sandbox, there is no switcher in bootstrap v4 -->
<style scoped>
.switchToggle {
  display: flex;
  gap: 12px;

  font-size: 14px;
  line-height: 20px;
}
.switchToggle input[type=checkbox]{height: 0; width: 0; visibility: hidden; position: absolute; }
.switchToggle label {cursor: pointer; text-indent: -9999px; width: 36px; max-width: 36px; height: 22px; background: #9C9C9C; display: block; border-radius: 100px; position: relative; }
.switchToggle label:after {content: ''; position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; background: #fff; border-radius: 90px; transition: 0.3s; }
.switchToggle input:checked + label, .switchToggle input:checked + input + label  {background: #53CBA0; }
.switchToggle input + label:before, .switchToggle input + input + label:before {content: ''; position: absolute; top: 5px; left: 35px; width: 26px; height: 18px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }
.switchToggle input:checked + label:before, .switchToggle input:checked + input + label:before {content: ''; position: absolute; top: 5px; left: 10px; width: 26px; height: 18px; border-radius: 90px; transition: 0.3s; text-indent: 0; color: #fff; }
.switchToggle input:checked + label:after, .switchToggle input:checked + input + label:after {left: calc(100% - 2px); transform: translateX(-100%); }
.switchToggle label:active:after {width: 60px; }
.toggle-switchArea { margin: 10px 0 10px 0; }
</style>