import React from 'react';
import { GlCanvas } from '@/components/general';

const App = () => {
  const vertexShaderSource = `
    attribute vec4 a_position;
    void main() {
      gl_Position = a_position;
    }
  `;

  const fragmentShaderSource = `

    precision mediump float;

    #define TWO_PI 6.28318530718
    uniform float u_time;
    uniform vec2 u_resolution;

    vec3 hsb2rgb( in vec3 c ){
      vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
    }

    void main() {
      vec2 st = gl_FragCoord.xy/u_resolution;
      vec3 color = vec3(0.0);

      // Use polar coordinates instead of cartesian
      vec2 toCenter = vec2(0.5)-st;
      float angle = atan(toCenter.y,toCenter.x);
      float radius = length(toCenter)*2.0;

      // Map the angle (-PI to PI) to the Hue (from 0 to 1)
      // and the Saturation to the radius
      color = hsb2rgb(vec3((angle/TWO_PI)+0.5,radius,1.0));

      gl_FragColor = vec4(color,1.0);
    }
  `;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <GlCanvas
        className="w-96 h-96"
        vertexShaderSource={vertexShaderSource}
        fragmentShaderSource={fragmentShaderSource}
      />
    </div>
  );
};

export default App;
