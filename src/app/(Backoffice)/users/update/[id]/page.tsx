'use client';
import PageContainer from '@/app/components/container/PageContainer';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { useAppDispatch } from '@/store/store';
import { fetchUser, updateUser, userSelector } from '@/store/users/userSlice';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type Props = {
  params: { id: string };
};

const Edit = ({ params }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userReducer = useSelector(userSelector);
  const { user } = userReducer;

  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const idUser = params.id;

  useEffect(() => {
    dispatch(fetchUser(idUser));
  }, []);

  useEffect(() => {
    if (user) {
      setData({ name: user.name || '', email: user.email || '' });
    }
  }, [user]);

  const handleUpdate = async () => {
    const mergeData = { ...data, id: parseInt(idUser) };
    const res = await dispatch(updateUser(mergeData));
    if (res.type === 'users/updateUser/fulfilled') {
      alert('User Updated Successfully');
      await router.push('/users');
    } else {
      alert('Something went wrong');
    }
  };

  console.log(user);
  return (
    <PageContainer
      title="Update User Page"
      description="this is Update User page"
    >
      <DashboardCard title="Update User Page">
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
            <Button variant="contained" color="success" onClick={handleUpdate}>
              Update
            </Button>
          </Stack>
        </>
      </DashboardCard>
    </PageContainer>
  );
};

export default Edit;
