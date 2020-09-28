import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

import tableIcons from '../../assets/icons';

export const MaterialTableComponent = ({
    tableValues,
    onRowAdd, 
    onRowUpdate, 
    onRowDelete 
}) => {
    const { title, columns, data, isEditable } = tableValues;
    return (
        <MaterialTable
            title={title || ''}
            columns={columns}
            data={data || []}
            icons={tableIcons}
            editable={isEditable && {
                onRowAdd: (newData) => onRowAdd(newData),
                onRowUpdate: (newData, oldData) => onRowUpdate(newData, oldData),
                onRowDelete: (oldData) => onRowDelete(oldData)
                }}
        />
    );
}

MaterialTableComponent.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array,
    isEditable: PropTypes.bool,
    onRowAdd: PropTypes.func,
    onRowUpdate: PropTypes.func,
    onRowDelete: PropTypes.func
}

export default MaterialTableComponent;
