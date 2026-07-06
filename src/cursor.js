// ---- Custom Premium Follow-Cursor ----
if (typeof window !== 'undefined' && matchMedia('(pointer: fine)').matches) {
  const follow = document.createElement('div')
  follow.className = 'pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3082BE]/25 bg-[#3082BE]/[0.02] shadow-[0_0_15px_rgba(48,130,190,0.08)] transition-[width,height,border-color,background-color] duration-300'
  follow.style.width = '36px'
  follow.style.height = '36px'
  follow.style.left = '-100px'
  follow.style.top = '-100px'
  
  document.body.appendChild(follow)
  
  let mouseX = -100
  let mouseY = -100
  let followX = -100
  let followY = -100
  
  window.addEventListener('mousemove', e => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  
  function animate() {
    const fx = followX + (mouseX - followX) * 0.15
    const fy = followY + (mouseY - followY) * 0.15
    
    followX = fx
    followY = fy
    
    follow.style.left = `${fx}px`
    follow.style.top = `${fy}px`
    
    requestAnimationFrame(animate)
  }
  animate()
  
  const hovers = 'a, button, [role="button"], .brand-card, input, textarea'
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hovers)) {
      follow.style.width = '52px'
      follow.style.height = '52px'
      follow.style.borderColor = 'rgba(48, 130, 190, 0.5)'
      follow.style.backgroundColor = 'rgba(48, 130, 190, 0.05)'
    }
  })
  
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hovers)) {
      follow.style.width = '36px'
      follow.style.height = '36px'
      follow.style.borderColor = 'rgba(48, 130, 190, 0.25)'
      follow.style.backgroundColor = 'rgba(48, 130, 190, 0.02)'
    }
  })
}
