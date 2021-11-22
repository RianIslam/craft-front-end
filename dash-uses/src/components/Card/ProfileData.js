import React from 'react'

const ProfileData = ({
    item: {
      img,
      iconInsta,
      id,
      title,
      content,
      icon,
      iconFacebook,
      iconTwitter,
      iconLinkedin,
    },
  }) => {
    return (
        <div className="col-md-3">
      <div>
          <div >
              <img className="img-fluid rounded" src={img} alt="" />
          </div>
          <div>
              <div className="leadIcon">
              <div>Card</div>
                  <h5 className="rounded-circle iconDesign text-white ">{iconTwitter}</h5>
                  <h5 className="rounded-circle mx-2 iconDesign text-white ">{iconFacebook}</h5>
                  <h5 className="rounded-circle mx-2 iconDesign text-white ">{iconLinkedin}</h5>
                  <h5 className="rounded-circle iconDesign text-white ">{iconInsta}</h5>
              </div>
          </div>
          <div>
              <div className="py-3">
                  <h5 className="text-center">{title}</h5>
                  <p className="text-center">{content}</p>
              </div>
          </div>
      </div>
    </div>
    )
}

export default ProfileData
