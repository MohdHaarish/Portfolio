'use client'

import { useEffect, useRef } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let app: { dispose?: () => void } | undefined

    async function loadSpline() {
      if (!canvasRef.current) return
      const { Application } = await import('@splinetool/runtime')
      app = new Application(canvasRef.current)
      await (app as { load: (url: string) => Promise<void> }).load(scene)
    }

    loadSpline()

    return () => {
      app?.dispose?.()
    }
  }, [scene])

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  )
}
