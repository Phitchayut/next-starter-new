'use client';
import PageContainer from '@/app/components/container/PageContainer';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { formUserValidateSchema } from '@/libs/validation/formValidation';
import { Users } from '@/models/users/user.model';
import { useAppDispatch } from '@/store/store';
import { fetchUser, updateUser, userSelector } from '@/store/users/userSlice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

type Props = {
  params: { id: string };
};

const Edit = ({ params }: Props) => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const userReducer = useSelector(userSelector);
  const { user } = userReducer;
  const idUser = params.id;

  const initialValue: Users = {
    name: user?.name || '',
    email: user?.email || '',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Users>({
    defaultValues: initialValue,
    resolver: zodResolver(formUserValidateSchema),
  });

  useEffect(() => {
    dispatch(fetchUser(parseInt(idUser)));
  }, [dispatch, idUser]);
  useEffect(() => {
    if (user) {
      reset({
        name: user.name || '',
        email: user.email || '',
      });
    }
  }, [user, reset]);

  const onSubmit = async (values: Users) => {
    const mergeData = { ...values, id: parseInt(idUser) };
    const res = await dispatch(updateUser(mergeData));
    if (res.type === 'users/updateUser/fulfilled') {
      alert('User Updated Successfully');
      await router.push('/users');
    } else {
      alert('Something went wrong');
    }
  };

  return (
    <PageContainer
      title="Update User Page"
      description="this is Update User page"
    >
      <DashboardCard title="Update User Page">
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
                Update
              </Button>
            </Stack>
          </form>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default Edit;
