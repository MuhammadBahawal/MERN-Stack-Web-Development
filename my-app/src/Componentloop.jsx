import React from 'react'
import Test from './Test'
import { data } from 'autoprefixer'

const Componentloop = () => {
    const user = [
        {
            Name: "Ali",
        },
        {
            Name: "Ali",
        },
        {
            Name: "Ali",
        },
        {
            Name: "Ali",
        }
    ]
    return (
        <>
            {user.map((data,index) => (
                <div key={index}>
                    <Test data={data} />
                </div>
            ))
            }
        </>
    )
}

export default Componentloop
