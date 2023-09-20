import { useEffect, useState } from "react";
function DepartmentList() {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://localhost:8000/api/Departments/");
                response = await response.json();
                setDepartments(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <div>
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Departments</h1>
                <table className="doing" className="bg-gray-100 w-full max-w-6xl mx-auto text-center">
                    <thead>
                        <tr>
                            <th>Department Number</th>
                            <th>Department Name</th>
                            <th>Head of Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index} className="hover:text-white">
                                <td>{data.department_number}</td>
                                <td>{data.department_name}</td>
                                <td>{data.hod_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default DepartmentList;
