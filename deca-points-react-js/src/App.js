import React, { useState, useEffect } from 'react';
import "./App.css";

const App = () => {
  return <div className='app-container'>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of birth</th>
          <th>100m</th>
          <th>Long jump</th>
          <th>Shot put</th>
          <th>High jump</th>
          <th>400m</th>
          <th>110m hurdles</th>
          <th>Discus</th>
          <th>Pole vault</th>
          <th>Javelin</th>
          <th>1500m</th>
          <th>Total score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peeter Paan</td>
          <td>04/10/1998</td>
          <td>11.12</td>
          <td>7.23</td>
          <td>13.22</td>
          <td>1.99</td>
          <td>49.32</td>
          <td>14.14</td>
          <td>44.44</td>
          <td>4.40</td>
          <td>50.23</td>
          <td>4:42.22</td>
          <td>8000</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
// function Example() {

//  const data = React.useMemo(
//      () => [
//        {
//          col1: 'Johannes',
//          col2: '10/04/1998',
//          col3: 'male',
//          col4: '10.9',
//          col5: '7.22',
//          col6: '13.22',
//          col7: '1.99',
//          col8: '49.98',
//          col9: '14.12',
//          col10: '43.29',
//          col11: '4.90',
//          col12: '56.20',
//          col13: '4:23:12',
//          col14: '8000'
//        },
//        {
//         col1: 'Jaanus',
//         col2: '10/04/1998',
//         col3: 'male',
//         col4: '10.9',
//         col5: '7.22',
//         col6: '13.22',
//         col7: '1.99',
//         col8: '49.98',
//         col9: '14.12',
//         col10: '43.29',
//         col11: '4.90',
//         col12: '56.20',
//         col13: '4:23:12',
//         col14: '8000'
//        },
//        {
//         col1: 'Jane',
//         col2: '10/04/1998',
//         col3: 'male',
//         col4: '10.9',
//         col5: '7.22',
//         col6: '13.22',
//         col7: '1.99',
//         col8: '49.98',
//         col9: '14.12',
//         col10: '43.29',
//         col11: '4.90',
//         col12: '56.20',
//         col13: '4:23:12',
//         col14: '8000'
//        },
//      ],
//      []
//  )

//  const columns = React.useMemo(
//      () => [
//        {
//          Header: 'Name',
//          accessor: 'col1', // accessor is the "key" in the data
//        },
//        {
//          Header: 'Date of birth',
//          accessor: 'col2',
//        },
//        {
//          Header: 'Gender',
//          accessor: 'col3', // accessor is the "key" in the data
//        },
//        {
//         Header: 'Sprint',
//         accessor: 'col4', // accessor is the "key" in the data
//       },
//       {
//         Header: 'Long jump',
//         accessor: 'col5',
//       },
//       {
//         Header: 'Shot Put',
//         accessor: 'col6', // accessor is the "key" in the data
//       },
//       {
//         Header: 'High jump',
//         accessor: 'col7', // accessor is the "key" in the data
//       },
//       {
//         Header: '400m',
//         accessor: 'col8',
//       },
//       {
//         Header: '100m hurdles',
//         accessor: 'col9', // accessor is the "key" in the data
//       },
//       {
//         Header: 'Discus',
//         accessor: 'col10', // accessor is the "key" in the data
//       },
//       {
//         Header: 'Pole Vault',
//         accessor: 'col11',
//       },
//       {
//         Header: 'Javelin',
//         accessor: 'col12', // accessor is the "key" in the data
//       },
//       {
//         Header: '1500m',
//         accessor: 'col13', // accessor is the "key" in the data
//       },
//       {
//         Header: 'Total score',
//         accessor: 'col14',
//       },
//      ],
//      []
//  )

//  const {
//    getTableProps,
//    getTableBodyProps,
//    headerGroups,
//    rows,
//    prepareRow,
//  } = useTable({ columns, data })

//  return (
//   <React.Fragment>
//      <div>
//        <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
//          <thead>
//          {headerGroups.map(headerGroup => (
//              <tr {...headerGroup.getHeaderGroupProps()}>
//                {headerGroup.headers.map(column => (
//                    <th
//                        {...column.getHeaderProps()}
//                        style={{
//                          borderBottom: 'solid 3px red',
//                          color: 'black',
//                        }}
//                    >
//                      {column.render('Header')}
//                    </th>
//                ))}
//              </tr>
//          ))}
//          </thead>
//          <tbody {...getTableBodyProps()}>
//          {rows.map(row => {
//            prepareRow(row)
//            return (
//                <tr {...row.getRowProps()}>
//                  {row.cells.map(cell => {
//                    return (
//                        <td
//                            {...cell.getCellProps()}
//                            style={{
//                              padding: '10px',
//                              border: 'solid 1px gray',
//                            }}
//                        >
//                          {cell.render('Cell')}
//                        </td>
//                    )
//                  })}
//                </tr>
//            )
//          })}
//          </tbody>
//        </table>
//      </div>
//      </React.Fragment>
//  );
// }

export default App;