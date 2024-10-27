import React, { useState } from 'react';
import { EMPLOYEES, EMPLOYEE_STATUSES } from '../../../store/EmployeeStore';
import DateCell from '../TableConfig/DateCell';
import EditableCell from '../TableConfig/EditableCell';
import Filters from '../TableConfig/Filters';
import Pagination from '../TableConfig/Pagination';
import StatusCell from '../TableConfig/StatusCell';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState(EMPLOYEES); // État local pour les employés
    const [columnFilters, setColumnFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 5; // Ajustez selon vos besoins

    // Filtrer les employés en fonction des filtres
    const filteredEmployees = employees.filter(employee => {
        return columnFilters.every(filter => {
            return employee.name.toLowerCase().includes(filter.value.toLowerCase());
        });
    });

    // Pagination
    const displayedEmployees = filteredEmployees.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
    
    return (
        <div>
            <h2>Employee List</h2>
            <Filters 
                columnFilters={columnFilters} 
                setColumnFilters={setColumnFilters} 
                filterPlaceholder="Search by name" 
                data={employees} 
            />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Start Date</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>
                                <EditableCell 
                                    value={employee.name} 
                                    onChange={(newName) => {
                                        // Met à jour le nom dans l'état local
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, name: newName } : emp)
                                        );
                                    }} 
                                />
                            </td>
                            <td>
                                <EditableCell 
                                    value={employee.position} 
                                    onChange={(newPosition) => {
                                        // Met à jour le poste dans l'état local
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, position: newPosition } : emp)
                                        );
                                    }} 
                                />
                            </td>
                            <td>
                                <StatusCell 
                                    status={employee.status} 
                                    onStatusChange={(newStatus) => {
                                        // Met à jour le statut dans l'état local
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, status: newStatus } : emp)
                                        );
                                    }} 
                                    statusOptions={EMPLOYEE_STATUSES} 
                                />
                            </td>
                            <td>
                                <DateCell 
                                    value={new Date(employee.startDate)} 
                                    onChange={(date) => {
                                        // Met à jour la date de début dans l'état local
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, startDate: date } : emp)
                                        );
                                    }} 
                                />
                            </td>
                            <td>
                                <EditableCell 
                                    value={employee.notes} 
                                    onChange={(newNotes) => {
                                        // Met à jour les notes dans l'état local
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, notes: newNotes } : emp)
                                        );
                                    }} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                pageIndex={currentPage} 
                pageOptions={Array.from({ length: Math.ceil(filteredEmployees.length / rowsPerPage) })} 
                nextPage={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredEmployees.length / rowsPerPage) - 1))} 
                previousPage={() => setCurrentPage((prev) => Math.max(prev - 1, 0))} 
                canNextPage={currentPage < Math.ceil(filteredEmployees.length / rowsPerPage) - 1} 
                canPreviousPage={currentPage > 0} 
            />
        </div>
    );
};

export default EmployeeTable;
