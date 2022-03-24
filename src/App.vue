<template>
  <div class="tempform">
    <template v-if="!maps.length">
      <label>
        WAD ({{!!wad}})
        <input type="file" @change="onWadFileChange">
      </label>

      <button v-show="wad" @click="getMaps">Read maps</button>
    </template>

    <template v-if="maps.length">
      <select v-model="map">
        <option :value="null">Select a map</option>
        <option v-for="map in maps" :key="map.index" :value="map.index">{{map.name}}</option>
      </select>

      <button :disabled="isConverting" @click="convert">Convert</button>
    </template>

    <template v-if="output">
      <textarea v-model="output" cols="30" rows="10"></textarea>

      <button @click="downloadWad">Download WAD</button>
      <button @click="downloadTextmap">Download TEXTMAP</button>
    </template>

    {{stages}}

  </div>
</template>

<script>
import { readByteToolsBufferFromInput } from './Boom2UDMF/utils/BrowserFile';
import { boom2Udmf, parseMaps } from './Boom2UDMF';
import { download, setImmediate } from './Boom2UDMF/utils';
import { WadGenerator, WadGeneratorLump } from './Boom2UDMF/WadParser';

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      wad: null,
      wadParser: null,
      stages: '',
      output: '',
      maps: [],
      map: null,
      isConverting: false,
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

      this.wad = null;
    },

    async convert() {
      if (this.map === null) return alert('Please select the map!');

      this.output = await boom2Udmf(this.wadParser, this.map, this.displayStage);
    },

    downloadTextmap() {
      download(this.output, 'TEXTMAP', '');
    },

    downloadWad() {
      const wad = new WadGenerator();

      const mapName = this.maps.find((x) => x.index === this.map).name;

      const map = new WadGeneratorLump(mapName, '');
      const textmap = new WadGeneratorLump('TEXTMAP', this.output);
      const endmap = new WadGeneratorLump('ENDMAP', '');

      wad.addLump(map);
      wad.addLump(textmap);
      wad.addLump(endmap);

      const buffer = wad.generate();

      download(buffer, `${mapName}.wad`, '');
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
