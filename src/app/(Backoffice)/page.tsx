'use client';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import PageContainer from '@/app/components/container/PageContainer';
import { Typography } from '@mui/material';
import DashboardCard from '../components/shared/DashboardCard';
import ProfielExpanceCard from '../components/dashboards/dashboard2/ProfileExpanceCard';
import ProductSales from '../components/dashboards/dashboard2/ProductSales';
// components
export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <ProfielExpanceCard />
          </Grid>
          <Grid item xs={12} lg={4}>
            <ProductSales />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}
