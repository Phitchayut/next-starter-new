'use client';
import PageContainer from '@/app/components/container/PageContainer';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { useAppDispatch } from '@/store/store';
import { createUser } from '@/store/users/userSlice';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {};

function AddUser({}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const submitForm = async () => {
    const res = await dispatch(createUser(data));
    if (res.type === 'users/createUser/fulfilled') {
      alert('User Created Successfully');
      await router.push('/users');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <PageContainer title="Add User Page" description="this is Add User page">
      <DashboardCard title="Add User Page">
        <>
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="email-address"
          >
            Name
          </CustomFormLabel>
          <CustomTextField
            id="email-address"
            variant="outlined"
            value={data.name}
            onChange={(e: any) => setData({ ...data, name: e.target.value })}
            fullWidth
          />
          <CustomFormLabel
            sx={{
              mt: 0,
            }}
            htmlFor="email-address"
          >
            Email
          </CustomFormLabel>
          <CustomTextField
            id="email-address"
            variant="outlined"
            value={data.email}
            onChange={(e: any) => setData({ ...data, email: e.target.value })}
            fullWidth
          />

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Link href="/users">
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </Link>
            <Button variant="contained" color="success" onClick={submitForm}>
              Save
            </Button>
          </Stack>
        </>
      </DashboardCard>
    </PageContainer>
  );
}

export default AddUser;
