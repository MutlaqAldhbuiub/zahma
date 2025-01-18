'use client'

export const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-[10%] right-[20%] w-[35%] h-[35%] bg-primary/5 rounded-full blur-3xl" />
    </div>
  )
}

