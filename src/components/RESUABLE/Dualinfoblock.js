import React from 'react'
import Heading from './Heading'

export default function Dualinfoblock({heading}) {
  return (
    <section className="my-4 py-4 bg-theme ">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              velit consequuntur quam earum quas placeat non distinctio, unde
              minima, maxime sed quia, necessitatibus impedit dolor ipsam
              tenetur? Eius laboriosam ipsa placeat in similique perferendis
              praesentium quo! Quod, ipsa ea voluptatibus quas ad error qui sed
              quibusdam, explicabo a ex nulla! Accusantium commodi itaque natus
              impedit magni aperiam provident sequi illum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis accusantium voluptatem at, officiis quo natus dolores voluptatum esse excepturi tempora sit odio nisi quam optio omnis dolorum? Asperiores aliquam eveniet est? Recusandae odit, nostrum cum, non odio neque eius ipsum dignissimos vel laboriosam excepturi magni? Repudiandae velit soluta adipisci natus deleniti assumenda aspernatur laudantium odio corrupti magnam sed perferendis neque doloremque aliquam molestiae expedita dolores quis reprehenderit repellat modi porro obcaecati similique, veritatis quaerat. Doloribus inventore ratione tempore suscipit soluta tenetur ex recusandae necessitatibus harum odio blanditiis, itaque assumenda, fugiat ipsam perferendis impedit explicabo voluptatibus! Aperiam rem aliquam perferendis quos?
            </p>





          </div>
          <div className="col-4">
          <div className="card" >
  <img src="https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-block btn-warning">Connect</a>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
