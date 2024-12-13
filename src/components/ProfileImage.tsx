import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-lg opacity-20 dark:opacity-30"></div>
      <img
        src={src}
        alt={alt}
        className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
      />
    </div>
  );
}