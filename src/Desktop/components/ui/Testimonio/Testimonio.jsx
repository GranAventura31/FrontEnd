import React from 'react'


export const Testimonio = ({img, content, pcontent,pcontent2, style, stylep,stylep2, styleh1,referencia}) => {
  
  
  return (
    
    // <div className='divTestimonio'>
        <div className='CardTestimonios'>

          <div className='CardImagen'>
            <img src={img} alt="" className={style}/>
            <div className='CardH1P'>
              <h1 className={styleh1}>{content}</h1>
              <a href={referencia} className={stylep} target='_black'><p>{pcontent}</p></a>
            </div> 
          </div>
          <div className='CardInformacionTestimonio'>
                <p className={stylep2}>{pcontent2}</p>
          </div>
          
        </div>
  )
}
