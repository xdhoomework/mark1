document.addEventListener('DOMContentLoaded',()=>{
  const avatarInput = document.getElementById('avatarInput')
  const coverInput = document.getElementById('coverInput')
  const avatarPreview = document.getElementById('avatarPreview')
  const coverPattern = document.querySelector('.cover-pattern')

  function readFileAsDataURL(file, cb){
    const rdr = new FileReader()
    rdr.onload = e=> cb(e.target.result)
    rdr.readAsDataURL(file)
  }

  if(avatarInput){
    avatarInput.addEventListener('change', e=>{
      const f = e.target.files && e.target.files[0]
      if(!f) return
      readFileAsDataURL(f, data=>{
        avatarPreview.style.backgroundImage = `url(${data})`
        avatarPreview.textContent = ''
        avatarPreview.style.backgroundSize = 'cover'
        avatarPreview.style.backgroundPosition = 'center'
      })
    })
  }

  if(coverInput){
    coverInput.addEventListener('change', e=>{
      const f = e.target.files && e.target.files[0]
      if(!f) return
      readFileAsDataURL(f, data=>{
        coverPattern.style.background = `url(${data}) center/cover no-repeat, repeating-linear-gradient(135deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 40px)`
      })
    })
  }
})
