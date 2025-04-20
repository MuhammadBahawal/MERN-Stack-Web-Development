import React from 'react'

const Loop = () => {
    const header = ["Name", "Age", "Class", "Rollno"]
    const data = [
        {
            id: 1,
            Name: "Muhammad Bahawal",
            Age: 20,
            Class: "BSSE",
            Rollno: 239,
           
        },
        {
            id: 2,
            Name: "Muhammad Bahawal",
            Age: 20,
            Class: "BSSE",
            Rollno: 239
        }
    ];
    return (
        <>
            <table border="1px">
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>age</td>
                        <td>class</td>
                    </tr>
                </thead>
                <tbody>
                  {data.map((info)=>(
                    <tr >
                        <td>{info.id}</td>
                        <td>{info.Name}</td>
                        <td>{info.Age}</td>
                        <td>{info.Class}</td>
                        <td>{info.Rollno}</td>
                    </tr>



                  ))}
                </tbody>
            </table>
        </>
    )
}

export default Loop
