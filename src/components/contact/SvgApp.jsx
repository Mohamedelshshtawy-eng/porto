// SvgApp.jsx
import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json'; // مسار ملفك الحقيقي

export default function SvgApp() {
  return (
    <div style={{ width: 500, height: 500, }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
}
