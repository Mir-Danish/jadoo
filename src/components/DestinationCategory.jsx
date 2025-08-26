import React from 'react'
import "../components/DestinationCategory.css"

const DestinationCategory = () => {
  return (
    <>
    <div className='destinations-category'>
           <div className='destinations-category-heading'>
                  <p className='destinations-heading-text'>Top Destinations</p> 
                  </div>
                  <div className='destinations-category-boxes'>
                  <div className='destinations-category-box1'>
                    <img className='destinations-images' src='https://cdn.pixabay.com/photo/2025/03/31/21/30/italy-9505446_640.jpg'alt="" />
                        <p>Rome,Italy</p>
                        <p>$5.24K</p>
                  </div>
                  <div className='destinations-category-box1'>
                    <img className='destinations-images' src='https://cdn.pixabay.com/photo/2015/08/23/16/20/westminster-902972_960_720.jpg'alt="" />
                        <p>London, Uk</p>
                        <p>$4.2k</p>
                  </div>
                  <div className='destinations-category-box1'>
                    <img className='destinations-images' src='https://cdn.pixabay.com/photo/2024/08/28/14/04/roof-9004113_1280.jpg'alt="" />
                        <p>Full Europe</p>
                        <p>$15k</p>
                  </div>
                  </div>
            </div>

            <div className='book-main-container'>
              {/* <div className='book-container-subtext'>
              <p>Easy And Fast</p>
              </div> */}

              <div className='book-container-side1'>
                  <p className='book-container-heading'>Book Your Next Trip In 3 Easy Steps</p>

                  <div className='book-container-side1-minibox'>
                    <div className='book-container-side1-subminibox1'>
                      
                      
                       <p className='book-container-side1-subminibox-text'>Choose Destination</p>
                       <p className='book-container-side1-subminibox-subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>

                    <div className='book-container-side1-subminibox1'>
                       <p className='book-container-side1-subminibox-text'>Make Payment</p>
                       <p className='book-container-side1-subminibox-subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>

                    <div className='book-container-side1-subminibox1'>
                       <p className='book-container-side1-subminibox-text'>Reach Airport on Selected Date</p>
                       <p className='book-container-side1-subminibox-subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                    </div>
                  </div>
              </div>

              <div className='book-container-side2-card'>
                <div className='book-container-card'>
                <img className='book-container-image' src="https://cdn.pixabay.com/photo/2016/11/19/10/30/beach-1838501_960_720.jpg" alt=''  />
                <p>Trip to Greece</p>
                <p>14-29 June</p>
                </div>
              </div>
            </div>


            <div className='testimonial'>
      <div className='testimonial-heading-box'>
      <p className='testimonial-heading'>What people say
about Us.</p>
      </div>

      <div className='testimonial-boxes1'>
        <p className='testimonial-boxes1-text'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
      </div>
    </div>

            </>
  )
}

export default DestinationCategory
