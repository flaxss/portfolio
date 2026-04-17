import { useEffect, useState } from 'react'

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    let animId: number
    let targetX = -100, targetY = -100

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
      setPos({ x: e.clientX, y: e.clientY })
    }

    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const animate = () => {
      setRing(prev => ({
        x: prev.x + (targetX - prev.x) * 0.12,
        y: prev.y + (targetY - prev.y) * 0.12,
      }))
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${clicking ? 0.5 : 1})`,
        }}
      />
      <div
        className="custom-cursor-ring"
        style={{
          left: ring.x,
          top: ring.y,
          transform: `translate(-50%, -50%) scale(${clicking ? 1.4 : 1})`,
        }}
      />
    </>
  )
}