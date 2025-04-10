'use client';
import PageContainer from '@/app/components/container/PageContainer';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { Users } from '@/models/users/user.model';
import { useAppDispatch } from '@/store/store';
import { createUser } from '@/store/users/userSlice';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { formUserValidateSchema } from '@/libs/validation/formValidation';

type Props = {};

function AddUser({}: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const initialValue: Users = {
    name: '',
    email: '',
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Users>({
    defaultValues: initialValue,
    resolver: zodResolver(formUserValidateSchema),
  });

  const onSubmit = async (values: Users) => {
    const res = await dispatch(createUser(values));
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
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
            >
              Name
            </CustomFormLabel>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant="outlined"
                  error={Boolean(errors.name?.message)}
                  helperText={errors.name?.message?.toString()}
                  fullWidth
                />
              )}
            />
            <CustomFormLabel
              sx={{
                mt: 0,
              }}
            >
              Email
            </CustomFormLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant="outlined"
                  error={Boolean(errors.email?.message)}
                  helperText={errors.email?.message?.toString()}
                  fullWidth
                />
              )}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Link href="/users">
                <Button variant="contained" color="error">
                  Cancel
                </Button>
              </Link>
              <Button variant="contained" color="success" type="submit">
                Save
              </Button>
            </Stack>
          </form>
        </>
      </DashboardCard>
    </PageContainer>
  );
}

export default AddUser;
