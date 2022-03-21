import styled, { DefaultTheme } from 'styled-components';

type StyledDataTablePropsType = {
  theme: DefaultTheme;
};

export const StyledDataTable = styled.div<StyledDataTablePropsType>`
  & {
    width: 100%;
  }

  .table-container {
    border-spacing: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray[10]};
  }

  // TABLE HEAD STYLES
  .table-head {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.gray[900]};
  }

  .table-head th {
    font-weight: ${({ theme }) => theme.fontWeight[500]};
    color: ${({ theme }) => theme.colors.black};
  }

  // TABLE BODY STYLES
  .table-body {
    width: 100%;
  }

  .table-body tr {
    background-color: ${({ theme }) => theme.colors.gray[10]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[900]};
    cursor: pointer;
  }

  .table-body tr:hover {
    background-color: ${({ theme }) => theme.colors.gray[1000]};
  }

  .table-body tr:hover a {
    color: ${({ theme }) => theme.colors.blue[500]};
  }

  .table-body td a {
    transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }

  // STYLES FOR BOTH, HEAD AND BODY
  .table-head th,
  .table-body td {
    font-size: ${({ theme }) => theme.fontSize[200] - 1}px;
    display: none;
    padding: 0.7rem;
  }

  .table-body td:nth-child(1),
  .table-body td:nth-child(2),
  .table-body td:last-child,
  .table-head th:nth-child(1),
  .table-head th:nth-child(2),
  .table-head th:last-child {
    display: inline;
  }

  .table-head tr,
  .table-body tr {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    justify-items: center;
  }

  @media (min-width: 900px) {
    .table-body td,
    .table-head th {
      display: inline;
    }
  }
`;
