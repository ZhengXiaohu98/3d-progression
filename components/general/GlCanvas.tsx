"use client";
import React, { useEffect, useRef } from 'react';

interface GlCanvasProps {
  className?: string;
  vertexShaderSource: string;
  fragmentShaderSource: string;
}

export const GlCanvas: React.FC<GlCanvasProps> = ({
  className = '',
  vertexShaderSource,
  fragmentShaderSource
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const gl = canvas?.getContext('webgl') as WebGLRenderingContext;

    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // 获取 canvas 尺寸
    const width = canvas.width;
    const height = canvas.height;

    // 设置视口为 canvas 的大小
    gl.viewport(0, 0, width, height);

    // 编译着色器的函数
    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type) as WebGLShader;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling shader', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    // 编译顶点着色器和片段着色器
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource) as WebGLShader;
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource) as WebGLShader;

    // 创建 WebGL 程序
    const shaderProgram = gl.createProgram() as WebGLProgram;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('ERROR linking program', gl.getProgramInfoLog(shaderProgram));
      return;
    }

    gl.useProgram(shaderProgram);

    const uTimeLocation = gl.getUniformLocation(shaderProgram, 'u_time');
    const uResolutionLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');

    // 设置顶点数据
    const vertices = new Float32Array([
      -1.0, 1.0, 0.0,
      -1.0, -1.0, 0.0,
      1.0, -1.0, 0.0,
      1.0, 1.0, 0.0
    ]);

    // 创建并绑定顶点缓冲区
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(shaderProgram, 'a_position');
    gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    let startTime = Date.now();

    function animate() {
      const currentTime = (Date.now() - startTime) / 1000; 
      gl.uniform1f(uTimeLocation, currentTime);
      gl.uniform2f(uResolutionLocation, canvas.width, canvas.height);
      
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.deleteBuffer(vertexBuffer);
      gl.deleteProgram(shaderProgram);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [vertexShaderSource, fragmentShaderSource]);

  return <canvas ref={canvasRef} className={className}></canvas>;
};
