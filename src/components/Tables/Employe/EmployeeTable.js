import React, { useState } from 'react';
import { EMPLOYEES, EMPLOYEE_STATUSES } from '../../../store/EmployeeStore';
import DateCell from '../TableConfig/DateCell';
import EditableCell from '../TableConfig/EditableCell';
import Filters from '../TableConfig/Filters';
import Pagination from '../TableConfig/Pagination';
import StatusCell from '../TableConfig/StatusCell';
import { Box, Flex, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue, Button } from '@chakra-ui/react';
import { EditEmployeeModal } from '../../Modals/EditEmployeModal';
import { ViewEmployeeModal } from '../../Modals/ViewEmployeeModal';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState(EMPLOYEES);
    const [columnFilters, setColumnFilters] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 5;
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isViewModalOpen, setViewModalOpen] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    const tableRowColor = useColorModeValue("#F7FAFC", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const textTableColor = useColorModeValue("gray.500", "white");

    const filteredEmployees = employees.filter(employee => 
        columnFilters.every(filter => employee.name.toLowerCase().includes(filter.value.toLowerCase()))
    );

    const displayedEmployees = filteredEmployees.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet utilisateur ?");
        if (confirmDelete) {
            setEmployees(prev => prev.filter(emp => emp.id !== id));
        }
    };

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
        setEditModalOpen(true);
    };

    const updateData = (rowId, columnId, newValue) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
                emp.id_employe === rowId ? { ...emp, [columnId]: newValue } : emp
            )
        );
    };

    const updateStatus = (rowId, newStatus) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
                emp.id_employe === rowId ? { ...emp, statut: newStatus } : emp
            )
        );
    };

    const handleViewModalClose = () => {
        setViewModalOpen(false);
        setCurrentEmployee(null);
    };

    const handleModalClose = () => {
        setEditModalOpen(false);
        setCurrentEmployee(null);
    };

    const handleView = (employee) => {
        setCurrentEmployee(employee);
        setViewModalOpen(true);
    };

    return (
        <Box p={4}>
            <Filters 
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                filterPlaceholder="Search by name"
                data={employees}
            />
            <Box overflowX="auto" maxHeight="500px">
                <Table>
                    <Thead>
                        <Tr bg={tableRowColor}>
                            <Th color='gray.400' borderColor={borderColor}>ID de l'employé</Th>
                            <Th color='gray.400' borderColor={borderColor}>Nom</Th>
                            <Th color='gray.400' borderColor={borderColor}>Prénom</Th>
                            <Th color='gray.400' borderColor={borderColor}>Date de naissance</Th>
                            <Th color='gray.400' borderColor={borderColor}>Âge</Th>
                            <Th color='gray.400' borderColor={borderColor}>Genre</Th>
                            <Th color='gray.400' borderColor={borderColor}>Situation matrimoniale</Th>
                            <Th color='gray.400' borderColor={borderColor}>Contact personnel</Th>
                            <Th color='gray.400' borderColor={borderColor}>Email</Th>
                            <Th color='gray.400' borderColor={borderColor}>Titre du poste</Th>
                            <Th color='gray.400' borderColor={borderColor}>Statut</Th>
                            <Th color='gray.400' borderColor={borderColor}>Lieu d'affectation</Th>
                            <Th color='gray.400' borderColor={borderColor}>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {displayedEmployees.map((employee) => (
                            <Tr key={employee.id_employe}>
                                <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                                    {employee.id_employe}
                                </Td>
                                <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.nom} 
                                        columnId="nom" 
                                        onChange={(columnId, newNom) => {
                                            if (newNom) {
                                                updateData(employee.id_employe, columnId, newNom);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' fontWeight='bold' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.prenom} 
                                        columnId="prenom" 
                                        onChange={(columnId, newPrenom) => {
                                            if (newPrenom) {
                                                updateData(employee.id_employe, columnId, newPrenom);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <DateCell 
                                        value={employee.date_naissance} 
                                        updateData={updateData} 
                                        rowId={employee.id_employe} 
                                        columnId="date_naissance" 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.age.toString()} 
                                        columnId="age" 
                                        onChange={(columnId, newAge) => {
                                            if (newAge) {
                                                updateData(employee.id_employe, columnId, parseInt(newAge, 10));
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.genre} 
                                        columnId="genre" 
                                        onChange={(columnId, newGenre) => {
                                            if (newGenre) {
                                                updateData(employee.id_employe, columnId, newGenre);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.situation_matrimoniale} 
                                        columnId="situation_matrimoniale" 
                                        onChange={(columnId, newSituation) => {
                                            if (newSituation) {
                                                updateData(employee.id_employe, columnId, newSituation);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.contact_personnel} 
                                        columnId="contact_personnel" 
                                        onChange={(columnId, newContact) => {
                                            if (newContact) {
                                                updateData(employee.id_employe, columnId, newContact);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.email} 
                                        columnId="email" 
                                        onChange={(columnId, newEmail) => {
                                            if (newEmail) {
                                                updateData(employee.id_employe, columnId, newEmail);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.poste.titre_poste} 
                                        columnId="titre_poste" 
                                        onChange={(columnId, newTitre) => {
                                            if (newTitre) {
                                                updateData(employee.id_employe, columnId, newTitre);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <StatusCell 
                                        status={employee.statut} 
                                        statusOptions={EMPLOYEE_STATUSES}
                                        onStatusChange={(newStatus) => updateStatus(employee.id_employe, newStatus)} 
                                    />
                                </Td>
                                <Td color={textTableColor} fontSize='sm' borderColor={borderColor}>
                                    <EditableCell 
                                        value={employee.affectation.lieu_affectation} 
                                        columnId="lieu_affectation" 
                                        onChange={(columnId, newLieu) => {
                                            if (newLieu) {
                                                updateData(employee.id_employe, columnId, newLieu);
                                            }
                                        }} 
                                    />
                                </Td>
                                <Td borderColor={borderColor}>
                                    <Flex gap={2}>
                                        <Button 
                                            colorScheme="blue" 
                                            onClick={() => handleView(employee)}
                                        >
                                            Voir
                                        </Button>
                                        <Button 
                                            colorScheme="yellow" 
                                            onClick={() => handleEdit(employee)}
                                        >
                                            Éditer
                                        </Button>
                                        <Button 
                                            colorScheme="red" 
                                            onClick={() => handleDelete(employee.id_employe)}
                                        >
                                            Supprimer
                                        </Button>
                                    </Flex>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalRows={filteredEmployees.length}
                rowsPerPage={rowsPerPage}
            />
            <EditEmployeeModal 
                isOpen={isEditModalOpen} 
                onClose={handleModalClose} 
                employee={currentEmployee} 
                setEmployees={setEmployees}
            />
            <ViewEmployeeModal 
                isOpen={isViewModalOpen} 
                onClose={handleViewModalClose} 
                employee={currentEmployee}
            />
        </Box>
    );
};

export default EmployeeTable;