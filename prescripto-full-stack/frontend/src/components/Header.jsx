import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Book Appointment <br />  With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                </div>
               <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
  <a
    href="#speciality"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'white',
      padding: '12px 32px',
      borderRadius: '9999px',
      color: '#595959',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'transform 0.3s ease',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  >
    Book appointment <img style={{ width: '12px' }} src={assets.arrow_icon} alt="" />
  </a>

  <Link
  to="/chatbot"
  style={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'white',
    padding: '12px 32px',
    borderRadius: '9999px',
    color: '#595959',
    textDecoration: 'none',
    fontSize: '0.875rem',
    transition: 'transform 0.3s ease',
  }}
  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
>
  Chat with AI🤖 <img style={{ width: '12px' }} src={assets.arrow_icon} alt="" />
</Link>
</div>

                

            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header