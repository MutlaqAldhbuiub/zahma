import React from 'react'
import Image from 'next/image'

export const PatternBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <div className="absolute inset-0">
        <Image
          src="/pattern.svg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  )
}

