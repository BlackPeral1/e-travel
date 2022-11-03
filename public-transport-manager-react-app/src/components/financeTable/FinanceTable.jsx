import { Space, Table, Tag } from 'antd';
import './financeTable.scoped.css';
import React from 'react';
import { financeData } from '../../data/dummyFinanceData';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'From',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'To',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'Income',
    dataIndex: 'income',
    key: 'income',
  },
  {
    title: 'Expenses',
    dataIndex: 'expenses',
    key: 'expenses',
  },
  {
    title: 'Profit',
    dataIndex: 'profit',
    key: 'profit',
  },

];


const FinanceTable = () => <Table columns={columns} dataSource={financeData} />;
export default FinanceTable;