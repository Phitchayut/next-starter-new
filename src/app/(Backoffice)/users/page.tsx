'use client';
import PageContainer from '@/app/components/container/PageContainer';
import BlankCard from '@/app/components/shared/BlankCard';
import DashboardCard from '@/app/components/shared/DashboardCard';
import { useAppDispatch } from '@/store/store';
import { deleteUser, fetchUsers, userSelector } from '@/store/users/userSlice';
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { IconMapPin } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const User = () => {
  const dispatch = useAppDispatch();
  const userReducer = useSelector(userSelector);

  const { users } = userReducer;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);


  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
  
    await dispatch(deleteUser(id));
  };

  return (
    <PageContainer title="User Page" description="this is User page">
      <DashboardCard title="User Page">
        <Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 3 }}
            justifyContent="space-between"
          >
            <Typography variant="h6">User List</Typography>
            <Link href="/users/add">
              <Button variant="contained">Add User</Button>
            </Link>
          </Stack>
          <Grid container spacing={3}>
            {users.map((user, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <BlankCard>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Stack direction="row" spacing={2}>
                        <Avatar src={user.avatar} alt={user.avatar} />
                        <Box>
                          <Typography variant="h6">{user.name}</Typography>
                          <Typography
                            variant="subtitle1"
                            color="textSecondary"
                            display="flex"
                            alignItems="center"
                            gap="3px"
                          >
                            <IconMapPin width={18} /> {user.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                    <Link href={`/users/update/${user.id}`}>
                      <Button
                        variant="contained"
                        color="info"
                        size="small"
                        sx={{ mt: 2 }}
                      >
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ mt: 2, ml: 2 }}
                      onClick={() => handleDelete(user.id ?? 0)}
                    >
                      Del.
                    </Button>
                  </CardContent>
                </BlankCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </DashboardCard>
    </PageContainer>
  );
};

export default User;
