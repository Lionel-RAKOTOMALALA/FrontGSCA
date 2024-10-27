import React, { useState } from 'react';
import { EMPLOYEES, EMPLOYEE_STATUSES } from '../../../store/EmployeeStore'; 
import DateCell from '../TableConfig/DateCell'; 
import EditableCell from '../TableConfig/EditableCell'; 
import Filters from '../TableConfig/Filters'; 
import Pagination from '../TableConfig/Pagination'; 
import StatusCell from '../TableConfig/StatusCell'; 
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState(EMPLOYEES);
    const [columnFilters, setColumnFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 5;

    const filteredEmployees = employees.filter(employee => {
        return columnFilters.every(filter => {
            return employee.name.toLowerCase().includes(filter.value.toLowerCase());
        });
    });

    const displayedEmployees = filteredEmployees.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);
    
    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>Employee List</Heading>
            <Filters 
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                filterPlaceholder="Search by name"
                data={employees}
            />
            <Table variant="simple" width="100%" border="1px" borderColor="gray.200">
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Name</Th>
                        <Th>Position</Th>
                        <Th>Status</Th>
                        <Th>Start Date</Th>
                        <Th>Notes</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {displayedEmployees.map((employee) => (
                        <Tr key={employee.id}>
                            <Td>{employee.id}</Td>
                            <Td>
                                <EditableCell 
                                    value={employee.name} 
                                    onChange={(newName) => {
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, name: newName } : emp)
                                        );
                                    }} 
                                />
                            </Td>
                            <Td>
                                <EditableCell 
                                    value={employee.position} 
                                    onChange={(newPosition) => {
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, position: newPosition } : emp)
                                        );
                                    }} 
                                />
                            </Td>
                            <Td>
                                <StatusCell 
                                    status={employee.status} 
                                    onStatusChange={(newStatus) => {
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, status: newStatus } : emp)
                                        );
                                    }} 
                                    statusOptions={EMPLOYEE_STATUSES} 
                                />
                            </Td>
                            <Td>
                                <DateCell 
                                    value={new Date(employee.startDate)} 
                                    row={{ index: employee.id }} 
                                    column={{ id: 'startDate' }} 
                                    updateData={(index, columnId, date) => {
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, startDate: date } : emp)
                                        );
                                    }} 
                                />
                            </Td>
                            <Td>
                                <EditableCell 
                                    value={employee.notes} 
                                    onChange={(newNotes) => {
                                        setEmployees((prev) => 
                                            prev.map(emp => emp.id === employee.id ? { ...emp, notes: newNotes } : emp)
                                        );
                                    }} 
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Pagination 
                pageIndex={currentPage}
                pageOptions={Array.from({ length: Math.ceil(filteredEmployees.length / rowsPerPage) })}
                nextPage={() => setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredEmployees.length / rowsPerPage) - 1))}
                previousPage={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                canNextPage={currentPage < Math.ceil(filteredEmployees.length / rowsPerPage) - 1}
                canPreviousPage={currentPage > 0}
            />
        </Box>
    );
};

export default EmployeeTable;
