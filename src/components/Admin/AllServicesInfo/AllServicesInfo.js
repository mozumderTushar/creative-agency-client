import React from 'react';

const AllServicesInfo = ({ allServices }) => {
    console.log(allServices);
    return (
        <table className="table table-borderless" style={{backgroundColor: '#FFE'}}>
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">Name</th>
                    <th className="text-secondary" scope="col">Email ID</th>
                    <th className="text-secondary" scope="col">Service</th>
                    <th className="text-secondary" scope="col">Project Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    allServices.map((service) =>
                        <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.email}</td>
                            <td>{service.service}</td>
                            <td>{service.details}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllServicesInfo;