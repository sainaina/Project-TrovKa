import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { selectCategories, selectCategoryTypes } from '../../redux/feature/category/cateSlice';
import { selectServices, selectServicesError, selectServicesStatus, fetchProviderServices, deleteService } from '../../redux/feature/service/providerServiceSlice';
import ConfirmDelete from './ConfirmDelete';
import { Rings } from 'react-loader-spinner';
import LoadingComponent from '../common/LoadingComponent';

const CustomDataTable = styled(DataTable)`
  .rdt_Pagination select {
    display: none;
  }
`;

const MyService = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const services = useSelector(selectServices);
  const categoryTypes = useSelector(selectCategoryTypes);
  const categories = useSelector(selectCategories);
  const servicesStatus = useSelector(selectServicesStatus);
  const servicesError = useSelector(selectServicesError);

  const [filteredServices, setFilteredServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (servicesStatus === 'idle') {
      dispatch(fetchProviderServices());
    }
  }, [servicesStatus, dispatch]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery, services]);

  const handleAddService = () => {
    navigate('/add-service');
  };

  const handleSearch = () => {
    if (searchQuery) {
      const filtered = services.filter(service =>
        Object.values(service).some(value =>
          value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices(services);
    }
  };

  const toggleStatus = (id) => {
    const updatedServices = services.map(service =>
      service.id === id ? { ...service, status: !service.status } : service
    );
    setFilteredServices(updatedServices.filter(service =>
      Object.values(service).some(value =>
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    ));
  };

  const handleDeleteClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (selectedService) {
      dispatch(deleteService(selectedService.id)).then(() => {
        setFilteredServices(filteredServices.filter(service => service.id !== selectedService.id));
        setShowModal(false);
        setSelectedService(null);
      });
    }
  };

  const handleEditClick = (serviceId) => {
    navigate(`/services/update/${serviceId}`);
  };

  const columns = [
    {
      name: 'Service',
      selector: row => row.name, 
      sortable: true,
    },
    {
      name: 'Category',
      selector: row => {
        const category = categories.find(cat => cat.id === row.category);
        if (category) {
          const categoryType = categoryTypes.find(type => type.id === category.category_type);
          return categoryType ? categoryType.name : 'N/A';
        }
        return 'N/A';
      },
      sortable: true,
    },
    {
      name: 'Sub Category',
      selector: row => {
        const subCategory = categories.find(subCategory => subCategory.id === row.category);
        return subCategory ? subCategory.category_name : 'N/A'; 
      },
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Created By',
      selector: row => row.created_by.username,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: row => new Date(row.created_at).toLocaleDateString(), 
      sortable: true,
      width: '120px',
    },
    {
      name: 'Status',
      cell: row => (
        <label className="switch small-switch">
          <input
            type="checkbox"
            checked={row.status}
            onChange={() => toggleStatus(row.id)}
          />
          <span className="slider round small-slider"></span>
        </label>
      ),
      sortable: false,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '50px',
    },
    {
      name: 'Action',
      cell: row => (
        <>
          <FaEdit 
            className="text-blue-500 inline mx-2 cursor-pointer"
            onClick={() => handleEditClick(row.id)} 
          />
          <FaTrash 
            className="text-red-500 inline mx-2 cursor-pointer" 
            onClick={() => handleDeleteClick(row)} 
          />
        </>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  if (servicesStatus === 'loading') {
    return <LoadingComponent/>
  }

  if (servicesStatus === 'failed') {
    const errorMessage = typeof servicesError === 'object' ? JSON.stringify(servicesError) : servicesError;
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <section className="container mx-auto p-4 w-[1000px]">
      <h2 className="text-2xl font-bold mb-4">My Services</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="border p-2 rounded"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddService}
          className="bg-Primary text-white px-4 py-2 rounded-lg"
        >
          Add service +
        </button>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">List Services</h3>
        <CustomDataTable
          columns={columns}
          data={filteredServices}
          pagination
        />
      </div>
      <ConfirmDelete
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
    </section>
  );
};

export default MyService;
