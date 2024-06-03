"use client"; // 确保这是一个客户端组件

import React, { useEffect } from 'react';

const GradioComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://gradio.s3-us-west-2.amazonaws.com/4.19.1/gradio.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <gradio-app src="https://bytedance-animatediff-lightning.hf.space" style={{ width: '100%', maxWidth: '850px' }}></gradio-app>
    </div>
  );
};

export default GradioComponent;