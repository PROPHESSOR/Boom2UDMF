<template>
  <div class="tempform">
    <label>
      THINGS ({{!!things}})
      <input type="file" @change="onThingsFileChange">
    </label>
    <label>
      LINEDEFS ({{!!linedefs}})
      <input type="file" @change="onLinedefsFileChange">
    </label>
    <label>
      SIDEDEFS ({{!!sidedefs}})
      <input type="file" @change="onSidedefsFileChange">
    </label>
    <label>
      SECTORS ({{!!sectors}})
      <input type="file" @change="onSectorsFileChange">
    </label>
    <label>
      VERTEXES ({{!!vertexes}})
      <input type="file" @change="onVertexesFileChange">
    </label>

    <button @click="convert">Convert</button>

    {{stages}}

    <textarea v-model="output" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import { readByteToolsBufferFromInput } from './Boom2UDMF/utils/BrowserFile';
import { generateUdmf } from './Boom2UDMF';
import { setImmediate } from './Boom2UDMF/utils';

export default {
  name: 'App',

  components: {
  },

  data() {
    return {
      worker: null,
      things: null,
      linedefs: null,
      sidedefs: null,
      sectors: null,
      vertexes: null,
      stages: '',
      output: 'Press Convert to get UDMF code',
    };
  },

  methods: {
    async onThingsFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.things = buffer;
    },

    async onLinedefsFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.linedefs = buffer;
    },

    async onSidedefsFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.sidedefs = buffer;
    },

    async onSectorsFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.sectors = buffer;
    },

    async onVertexesFileChange(e) {
      const buffer = await readByteToolsBufferFromInput(e.target);

      if (!buffer) return;

      this.vertexes = buffer;
    },

    async displayStage(stage) {
      this.stages += `${stage} | `;
      await setImmediate();
    },

    async convert() {
      if (!(this.things && this.vertexes && this.sidedefs && this.linedefs && this.sectors)) { return alert('Not all files specified!'); }

      this.output = await generateUdmf(
        this.things, this.vertexes, this.linedefs, this.sidedefs, this.sectors, this.displayStage,
      );
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
