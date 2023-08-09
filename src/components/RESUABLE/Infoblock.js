import React from 'react'
import Heading from "./Heading";
import { Link } from 'gatsby';

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4 ">
      <div className="container justify-center">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              ipsam voluptatem quidem ea? Excepturi error reiciendis totam
              corrupti natus architecto ratione dolorum pariatur recusandae
              amet, tempora aspernatur alias maiores veniam autem laborum
              sapiente ullam eos quisquam doloremque? Rerum ratione voluptas
              aperiam accusantium laborum ipsam officiis quos vitae quasi
              similique, molestiae dignissimos deserunt eum, quae libero ut!
              Eveniet ipsam vel eaque.
            </p>
            <Link to="/about/">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
