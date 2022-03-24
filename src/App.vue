<template>
  <div class="tempform">
    <label>
      WAD ({{!!wad}})
      <input type="file" @change="onWadFileChange">
    </label>

    <button @click="convert">Convert</button>

    {{stages}}

    <textarea v-model="output" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import { readByteToolsBufferFromInput } from './Boom2UDMF/utils/BrowserFile';
import { boom2Udmf, generateUdmf } from './Boom2UDMF';
import { setImmediate } from './Boom2UDMF/utils';

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      wad: null,
      stages: '',
      output: 'Press Convert to get UDMF code',
    };
  },

  methods: {
    async onWadFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.wad = buffer;
    },

    async displayStage(stage) {
      this.stages += `${stage} | `;
      await setImmediate();
    },

    async convert() {
      if (!this.wad) return alert('No WAD file specified!');

      this.output = await boom2Udmf(this.wad, this.displayStage);

      this.wad = null;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.tempform {
  display: flex;
  flex-direction: column;
}

.tempform>* {
  margin-bottom: 15px;
}
</style>
