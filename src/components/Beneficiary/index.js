import React from 'react';
import MaterialTable from 'material-table';

import tableIcons from '../../assets/icons';
import DialogComponent from '../Dialog';

export default function Beneficiary() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Bank', field: 'bank' },
      { title: 'Account Type', field: 'accountType' },
      { title: 'Account Number', field: 'accountNumber', type: 'numeric' },
    ],
    data: [
      { name: 'Dunlap Hubbard', bank: 'Bank of America', accountType: 'Savings', accountNumber: 5646766464624 },
      { name: 'Stephen Ronald', bank: 'United Overseas Bank', accountType: 'Savings', accountNumber: 5646766464624 },
      { name: 'Peter James', bank: 'City Bank', accountType: 'Current', accountNumber: 5646766464624 },
      { name: 'Henry Mark', bank: 'HDFC Bank', accountType: 'Savings', accountNumber: 5646766464624 },
    ]
  });

  return (
    <div className="mainContainer">
      <DialogComponent title="Beneficiary Page">
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"</span>
      </DialogComponent>
      <MaterialTable
        title=""
        columns={state.columns}
        data={state.data}
        icons={tableIcons}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </div>
  );
}
