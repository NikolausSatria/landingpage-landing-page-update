import React from 'react'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'

function Partners() {
  return (
    <section className=" bg-muted text-primary-foregroundpy-12 md:py-18 lg:py-24">
         <div className="px-8 md:px-6 text-center justify-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-white py-5 my-5">Our Recent Client</h1>
   
        <Marquee autoFill={true}>
        <Image
            src="/ModularityClientLogo/D1vault.png"
            width={250}
            height={250}
            alt="D1VaultLogo"
            className='px-5'

          />
        <Image
            src="/ModularityClientLogo/ShamalogoTransparent.png"
            width={200}
            height={200}
            alt="D1VaultLogo"
            className='px-5'
       
          />
        <Image
            src="/ModularityClientLogo/Hakedologo.png"
            width={200}
            height={200}
            alt="D1VaultLogo"
            className='px-5'
   
          />
        <Image
            src="/ModularityClientLogo/PT_AndalanMutuEnergi.png"
            width={200}
            height={200}
            alt="D1VaultLogo"
            className='px-5'
        
          />
        <Image
            src="/ModularityClientLogo/Stuffkeren2.png"
            width={200}
            height={200}
            alt="Stuffkeren"
            className='px-5'
        
          />
          </Marquee>
      </div>
    </section>
  )
}

export default Partners