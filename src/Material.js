'use strict';

let LSL = require('./utils/LSL');
let Structure = require('./Structure');

const shades = { flat: 1, smooth: 0 };

const _name = 'material';
const _path = 'material';
const _uniforms = ['sampler image', 'vec3 ambient', 'vec3 diffuse', 'i shading', 'i type'];
const _pattern = {};
const _ambient = 0xFFFFFF;
const _diffuse = 0x000000;
const _shading = 'smooth';

class Material extends Structure
{
   constructor({ name = _name, program, path = _path, uniforms = _uniforms, pattern = _pattern, ambient = _ambient, diffuse = _diffuse, shading = _shading } = {})
   {
      super({ name, program, path, uniforms });

      this.ambient = LSL(ambient);

      this.diffuse = LSL(diffuse);

      this.image = pattern.unit;

      this.shading = shades[shading];

      this.pattern = pattern;

      this.type = 0;
   }

   bind()
   {
      super.bind();

      if (this.image !== undefined)
      {
         this.pattern.bind();
      }
   }

   unbind()
   {
      super.unbind();

      if (this.image !== undefined)
      {
         this.pattern.unbind();
      }
   }
}

module.exports = Material;