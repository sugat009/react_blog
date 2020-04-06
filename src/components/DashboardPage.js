import React from 'react';
import { Link } from 'react-router-dom';
import BlogList from './BlogList';
import BlogFilters from './BlogFilters';
import BlogSummary from './BlogSummary';

const DashboardPage = () => (
  <div>
    <BlogSummary />
    <BlogFilters />
    <BlogList />
  </div>
);

export default DashboardPage;
