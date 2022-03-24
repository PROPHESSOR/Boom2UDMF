<template>
  <div class="page">
    <div class="main">
      <h1>Boom2UDMF Converter</h1>
      <template v-if="!maps.length">
        <label>
          Choose .wad file with Vanilla (Boom) maps to convert:
          <input type="file" @change="onWadFileChange">
        </label>

        <!-- <button v-show="wad" @click="getMaps">Read maps</button> -->
      </template>

      <template v-if="maps.length">
        Select a map to convert:
        <select v-model="map">
          <option :value="null">Select a map</option>
          <option v-for="map in maps" :key="map.index" :value="map.index">{{map.name}}</option>
        </select>

        <button v-show="map !== null" :disabled="isConverting" @click="convert">Convert</button>
      </template>

      <template v-if="output">
        <textarea v-model="output" rows="10"></textarea>

        <button class="primary" @click="downloadWad">Download WAD</button>
        <button class="secondary" @click="downloadTextmap">Download TEXTMAP</button>
      </template>

      <a href="https://discord.gg/sCwwCDQ" class="copyright">&copy; PROPHESSOR 2018-2022</a>
    </div>
    <div class="logs">
      <textarea v-model="stages" readonly></textarea>
    </div>

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

      try {
        await this.getMaps();
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    },

    async displayStage(stage) {
      this.stages += `${stage} \n`;
      await setImmediate();
    },

    async getMaps() {
      if (!this.wad) return alert('No WAD file specified!');

      try {
        [this.wadParser, this.maps] = await parseMaps(this.wad, this.displayStage);

        this.wad = null;
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    },

    async convert() {
      if (this.map === null) return alert('Please select the map!');

      try {
        this.output = await boom2Udmf(this.wadParser, this.map, this.displayStage);
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    },

    downloadTextmap() {
      download(this.output, 'TEXTMAP', '');
    },

    downloadWad() {
      try {
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
      } catch (e) {
        console.error(e);
        alert(e.message);
      }
    },
  },
};
</script>

<style>
:root {
  --main-color: rgb(0, 100, 0);
  --main-color-overlay: rgba(0, 100, 0, 0.7);
  --primary-color: var(--main-color);
  --secondary-color: gray;
  --dark-color: #030;
  --light-color: green;
  --background-color: brown;
  --page-color: white;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: var(--background-color);
}

#app {
  font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.page {
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background: var(--page-color);
  padding: 20px;
  border-radius: 7px;
}

.copyright {
  color: white;
  position: fixed;
  right: 5px;
  bottom: 0px;
  font-family: 'Segoe UI', 'Open Sans', Tahoma, Geneva, Verdana, sans-serif;
  text-decoration: none;
}

@media screen and (max-width: 900px) {
  .page {
    flex-wrap: wrap;
    width: 80%;
  }
}

.main {
  display: flex;
  flex-direction: column;
  flex: 3;
  margin-right: 15px;
}

.main>* {
  margin-bottom: 15px;
}

.logs {
  flex: 1;
}

.logs textarea {
  height: 50vh;
}

input,
button {
  padding: 10px;
  color: white;
  cursor: pointer;
}

button {
  background: var(--main-color-overlay);
  border-color: gray;
  border-radius: 5px;
  border-style: none;
}

/* .primary {
  background: var(--primary-color);
} */

button:hover {
  background: var(--main-color);
}

.secondary {
  background: var(--secondary-color);
}

textarea {
  width: 100%;
  resize: none;
  border-radius: 5px;
}

h1 {
  text-align: center;
  font-size: 1.1rem;
}
</style>
