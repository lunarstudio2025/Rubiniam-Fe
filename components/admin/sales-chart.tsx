"use client"

import { useEffect, useRef } from "react"

// This is a placeholder for a real chart library
// In a real app, you would use a library like Chart.js, Recharts, or D3.js
export default function AdminSalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set canvas dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height

    // Sample data
    const data = [12000, 19000, 15000, 22000, 18000, 24000, 25000, 30000, 28000, 29000, 32000, 35000]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Find max value for scaling
    const maxValue = Math.max(...data)

    // Chart settings
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2
    const barWidth = (chartWidth / data.length) * 0.6
    const barSpacing = (chartWidth / data.length) * 0.4

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw bars
    data.forEach((value, index) => {
      const x = padding + index * (barWidth + barSpacing)
      const barHeight = (value / maxValue) * chartHeight
      const y = height - padding - barHeight

      // Draw bar
      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(labels[index], x + barWidth / 2, height - padding + 20)

      // Draw value
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`$${(value / 1000).toFixed(1)}k`, x + barWidth / 2, y - 10)
    })

    // Draw y-axis labels
    for (let i = 0; i <= 4; i++) {
      const y = height - padding - i * (chartHeight / 4)
      const value = (maxValue / 4) * i

      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`$${(value / 1000).toFixed(0)}k`, padding - 10, y + 3)

      // Draw grid line
      ctx.beginPath()
      ctx.strokeStyle = "#e2e8f0"
      ctx.setLineDash([5, 5])
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
      ctx.setLineDash([])
    }
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
    </div>
  )
}

