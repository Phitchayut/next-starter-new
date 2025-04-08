"use client";
import React from "react";
import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import PageContainer from "@/app/components/container/PageContainer";

import { Grid, Typography } from "@mui/material";
import Payments from "@/app/components/dashboards/dashboard1/Payments";
import Products from "@/app/components/dashboards/dashboard1/Products";
import CongratulationsCard from "@/app/components/dashboards/dashboard1/CongratulationsCard";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
    <Box>
      <Typography variant="h3">Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={12}>
              <Payments isLoading={isLoading} />
            </Grid>
            <Grid item xs={12} sm={6} lg={12}>
              <Products isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CongratulationsCard isLoading={isLoading} />
        </Grid>
        {/* <Grid item xs={12} lg={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12} sm={6}>
              <LatestDeals />
            </Grid>
            <Grid item xs={12} lg={12} sm={6}>
              <Customers isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <VisitUsa />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ProductTable />
        </Grid> */}
      </Grid>
    </Box>
  </PageContainer>
  );
}
