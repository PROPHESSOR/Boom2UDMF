<template>
  <div class="tempform">
    <label>
      WAD ({{!!wad}})
      <input type="file" @change="onWadFileChange">
    </label>

    <button @click="getMaps">Read maps</button>

    <template v-if="maps.length">
      <select v-model="map">
        <option :value="null">Select a map</option>
        <option v-for="map in maps" :key="map.index" :value="map.index">{{map.name}}</option>
      </select>

      <button @click="convert">Convert</button>

      <textarea v-model="output" cols="30" rows="10"></textarea>
    </template>

    {{stages}}

  </div>
</template>

<script>
import { readByteToolsBufferFromInput } from './Boom2UDMF/utils/BrowserFile';
import { boom2Udmf, parseMaps } from './Boom2UDMF';
import { setImmediate } from './Boom2UDMF/utils';

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      wad: null,
      wadParser: null,
      stages: '',
      output: 'Press Convert to get UDMF code',
      maps: [],
      map: null,
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

    async getMaps() {
      if (!this.wad) return alert('No WAD file specified!');

      [this.wadParser, this.maps] = await parseMaps(this.wad, this.displayStage);
    },

    async convert() {
      if (this.map === null) return alert('Please select the map!');

      this.output = await boom2Udmf(this.wadParser, this.map, this.displayStage);

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
