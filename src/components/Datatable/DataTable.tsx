import React from 'react';
import DataTablePropsType from './datatable.type';
import { StyledDataTable } from './datatable.style';
import { Link } from 'react-router-dom';

/**
 * @param {Object} props
 * @param {Array} props.tableHead
 * @param {Array} props.data
 * @returns {JSX.Element}
 */
const DataTable: React.FC<DataTablePropsType> = ({
  tableHead,
  data,
}: DataTablePropsType): JSX.Element => {
  return (
    <StyledDataTable>
      <table className="table-container">
        <thead className="table-head">
          <tr>
            {tableHead.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {data.map((item) => (
            <tr className="">
              {Object.entries(item).map(([key, prop]) => (
                <td key={key}>
                  <Link to="/">{prop}</Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledDataTable>
  );
};

export default DataTable;
