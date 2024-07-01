import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo iusto officiis quasi, mollitia dicta, amet excepturi eveniet temporibus quod cupiditate possimus est. Eum officiis molestiae molestias, veritatis tenetur natus itaque fugiat quae id, error explicabo. Dolorem, quia? Iusto ipsam maxime nisi magnam nemo vitae sit rem corporis unde tenetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci pariatur illum sequi quibusdam sapiente itaque, voluptatibus maiores soluta similique rerum odio nostrum nobis atque numquam mollitia omnis in unde quae!</p>
        </div>
    </div>
  )
}

export default DescriptionBox